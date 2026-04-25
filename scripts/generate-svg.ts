import { readFileSync, writeFileSync, readdirSync, statSync, existsSync } from 'node:fs';
import { join, relative, sep, posix } from 'node:path';
import { execSync } from 'node:child_process';

const ROOT = process.cwd();
const PORTALS = ['leetcode', 'geeksforgeeks', 'hackerrank', 'interviewbit'] as const;
type Portal = (typeof PORTALS)[number];
type Difficulty = 'Easy' | 'Medium' | 'Hard' | 'Unknown';

interface ProblemMeta {
  title: string;
  difficulty: Difficulty;
  category: string;
  patterns: string[];
  companies: string[];
}

interface PracticeEntry {
  file: string;
  date: string;
  notes?: string;
}

interface MetaFile {
  problems: Record<string, ProblemMeta>;
  corePatterns: string[];
}

interface ProblemRecord extends ProblemMeta {
  file: string;
  portal: Portal;
  practiceCount: number;
  practiceLast30Days: number;
}

const COLORS = {
  bg: '#0d1117',
  panel: '#161b22',
  border: '#30363d',
  text: '#e6edf3',
  textMuted: '#8b949e',
  accent: '#58a6ff',
  easy: '#3fb950',
  medium: '#d29922',
  hard: '#f85149',
  unknown: '#6e7681',
  meter: '#a371f7',
  good: '#3fb950',
};

function walkDir(dir: string): string[] {
  const out: string[] = [];
  if (!existsSync(dir)) return out;
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    const st = statSync(full);
    if (st.isDirectory()) out.push(...walkDir(full));
    else if (entry.endsWith('.ts')) out.push(full);
  }
  return out;
}

function loadMeta(): MetaFile {
  const path = join(ROOT, 'data', 'problems-meta.json');
  return JSON.parse(readFileSync(path, 'utf8'));
}

function loadPractice(): PracticeEntry[] {
  const path = join(ROOT, 'data', 'practice.json');
  if (!existsSync(path)) return [];
  const parsed = JSON.parse(readFileSync(path, 'utf8'));
  return parsed.entries ?? [];
}

function toPosixPath(p: string): string {
  return p.split(sep).join(posix.sep);
}

function detectPortal(relPath: string): Portal | null {
  const top = relPath.split(posix.sep)[0];
  return (PORTALS as readonly string[]).includes(top) ? (top as Portal) : null;
}

function gitFirstCommitDate(file: string): string | null {
  try {
    const out = execSync(`git log --diff-filter=A --follow --format=%aI -- "${file}"`, {
      cwd: ROOT,
      stdio: ['ignore', 'pipe', 'ignore'],
    })
      .toString()
      .trim()
      .split('\n')
      .filter(Boolean);
    return out[out.length - 1] ?? null;
  } catch {
    return null;
  }
}

function solveDaysLast14(): number {
  // Only count days where a NEW problem file was added under a portal dir.
  // Filters out metadata-only commits, README tweaks, etc.
  try {
    const since = new Date(Date.now() - 14 * 24 * 3600 * 1000).toISOString();
    const portalArgs = PORTALS.map((p) => `-- ${p}/`).join(' ');
    const out = execSync(
      `git log --since="${since}" --diff-filter=A --name-only --format='%aI' ${portalArgs}`,
      { cwd: ROOT, stdio: ['ignore', 'pipe', 'ignore'] },
    )
      .toString()
      .trim();
    if (!out) return 0;
    const days = new Set<string>();
    let currentDate: string | null = null;
    for (const line of out.split('\n')) {
      const trimmed = line.trim();
      if (!trimmed) continue;
      if (/^\d{4}-\d{2}-\d{2}T/.test(trimmed)) {
        currentDate = trimmed.slice(0, 10);
      } else if (currentDate && trimmed.endsWith('.ts')) {
        days.add(currentDate);
      }
    }
    return days.size;
  } catch {
    return 0;
  }
}

function daysAgo(iso: string): number {
  const t = new Date(iso).getTime();
  if (Number.isNaN(t)) return Infinity;
  return (Date.now() - t) / (24 * 3600 * 1000);
}

function gatherProblems(meta: MetaFile, practice: PracticeEntry[]): ProblemRecord[] {
  const records: ProblemRecord[] = [];
  const practiceByFile = new Map<string, PracticeEntry[]>();
  for (const e of practice) {
    if (!practiceByFile.has(e.file)) practiceByFile.set(e.file, []);
    practiceByFile.get(e.file)!.push(e);
  }

  for (const portal of PORTALS) {
    const dir = join(ROOT, portal);
    const files = walkDir(dir);
    for (const full of files) {
      const rel = toPosixPath(relative(ROOT, full));
      const m = meta.problems[rel];
      const fallback: ProblemMeta = {
        title: rel.split('/').pop()!.replace(/\.ts$/, ''),
        difficulty: 'Unknown',
        category: rel.split('/').slice(1, -1).join('/') || 'Uncategorized',
        patterns: [],
        companies: [],
      };
      const data = m ?? fallback;
      const entries = practiceByFile.get(rel) ?? [];
      records.push({
        ...data,
        file: rel,
        portal,
        practiceCount: entries.length,
        practiceLast30Days: entries.filter((e) => daysAgo(e.date) <= 30).length,
      });
    }
  }
  return records;
}

interface Stats {
  total: number;
  byPortal: Record<Portal, number>;
  byDifficulty: Record<Difficulty, number>;
  byCategory: Record<string, number>;
  byPattern: Record<string, number>;
  totalPractices: number;
  problemsPracticedLast30Days: number;
  unknownMetadata: number;
}

function computeStats(records: ProblemRecord[]): Stats {
  const byPortal = Object.fromEntries(PORTALS.map((p) => [p, 0])) as Record<Portal, number>;
  const byDifficulty: Record<Difficulty, number> = { Easy: 0, Medium: 0, Hard: 0, Unknown: 0 };
  const byCategory: Record<string, number> = {};
  const byPattern: Record<string, number> = {};
  let totalPractices = 0;
  let practicedLast30 = 0;
  let unknown = 0;

  for (const r of records) {
    byPortal[r.portal]++;
    byDifficulty[r.difficulty]++;
    byCategory[r.category] = (byCategory[r.category] ?? 0) + 1;
    for (const pat of r.patterns) byPattern[pat] = (byPattern[pat] ?? 0) + 1;
    totalPractices += r.practiceCount;
    if (r.practiceLast30Days > 0) practicedLast30++;
    if (r.difficulty === 'Unknown') unknown++;
  }

  return {
    total: records.length,
    byPortal,
    byDifficulty,
    byCategory,
    byPattern,
    totalPractices,
    problemsPracticedLast30Days: practicedLast30,
    unknownMetadata: unknown,
  };
}

interface MaangMeter {
  score: number;
  coverage: number;
  volume: number;
  retention: number;
  hardRatio: number;
  consistency: number;
  patternsHit: number;
  patternsTotal: number;
  volumePoints: number;
  caps: string[];
}

function computeMaangMeter(stats: Stats, records: ProblemRecord[], corePatterns: string[]): MaangMeter {
  // Coverage: per-pattern mastery weight = min(count/3, 1). Need 3+ problems per pattern to fully count.
  const coverageSum = corePatterns.reduce((acc, p) => acc + Math.min((stats.byPattern[p] ?? 0) / 3, 1), 0);
  const coverage = coverageSum / corePatterns.length;
  const patternsHit = corePatterns.filter((p) => (stats.byPattern[p] ?? 0) > 0).length;

  // Volume: weighted points, cap at 1500 (MAANG-ready bar ~ 300M + 50H = 1150).
  const volumePoints =
    stats.byDifficulty.Easy * 1 + stats.byDifficulty.Medium * 3 + stats.byDifficulty.Hard * 5;
  const volume = Math.min(volumePoints / 1500, 1);

  const retention = stats.total > 0 ? stats.problemsPracticedLast30Days / stats.total : 0;

  const totalKnown = stats.byDifficulty.Easy + stats.byDifficulty.Medium + stats.byDifficulty.Hard;
  const hardFraction = totalKnown > 0 ? stats.byDifficulty.Hard / totalKnown : 0;
  const hardRatio = Math.min(hardFraction / 0.3, 1);

  // Consistency: distinct days with a NEW problem solved in last 14 days.
  const consistency = Math.min(solveDaysLast14() / 14, 1);

  let score =
    0.25 * coverage + 0.3 * volume + 0.15 * retention + 0.15 * hardRatio + 0.15 * consistency;

  // Honest caps — MAANG bar requires breadth, depth, AND hards.
  // Only record a cap as "applied" if it actively reduced the score.
  const caps: string[] = [];
  if (stats.byDifficulty.Hard === 0 && score > 0.3) {
    score = 0.3;
    caps.push('Hard count = 0 (cap 30%)');
  }
  if (stats.total < 50 && score > 0.25) {
    score = 0.25;
    caps.push('Total < 50 problems (cap 25%)');
  }

  return {
    score,
    coverage,
    volume,
    retention,
    hardRatio,
    consistency,
    patternsHit,
    patternsTotal: corePatterns.length,
    volumePoints,
    caps,
  };
}

function escapeXml(s: string): string {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

function bar(x: number, y: number, w: number, h: number, color: string, opacity = 1): string {
  return `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="3" fill="${color}" opacity="${opacity}"/>`;
}

function text(x: number, y: number, s: string, opts: { size?: number; color?: string; weight?: number; anchor?: string } = {}): string {
  const { size = 12, color = COLORS.text, weight = 400, anchor = 'start' } = opts;
  return `<text x="${x}" y="${y}" font-family="ui-monospace, SFMono-Regular, Menlo, Consolas, monospace" font-size="${size}" font-weight="${weight}" fill="${color}" text-anchor="${anchor}">${escapeXml(s)}</text>`;
}

function renderSvg(stats: Stats, records: ProblemRecord[], meter: MaangMeter, generatedAt: string): string {
  const W = 900;
  const H = 760;
  const parts: string[] = [];

  parts.push(`<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">`);
  parts.push(`<rect width="${W}" height="${H}" fill="${COLORS.bg}"/>`);
  parts.push(`<rect x="1" y="1" width="${W - 2}" height="${H - 2}" fill="none" stroke="${COLORS.border}" rx="8"/>`);

  // Header
  parts.push(text(24, 36, 'DSA Practice Stats', { size: 22, weight: 700 }));
  parts.push(text(24, 56, `Updated ${generatedAt} • ${stats.total} problems, ${stats.totalPractices} practice sessions`, { size: 11, color: COLORS.textMuted }));

  // KPI row
  const kpiY = 80;
  const kpis: Array<[string, string, string]> = [
    [String(stats.total), 'Problems Solved', COLORS.accent],
    [String(stats.totalPractices), 'Practice Sessions', COLORS.good],
    [String(meter.patternsHit) + '/' + meter.patternsTotal, 'Patterns Covered', COLORS.medium],
    [(meter.score * 100).toFixed(0) + '%', 'MAANG Meter', COLORS.meter],
  ];
  const kpiW = (W - 48 - 24) / 4;
  kpis.forEach(([val, label, color], i) => {
    const x = 24 + i * (kpiW + 8);
    parts.push(`<rect x="${x}" y="${kpiY}" width="${kpiW}" height="74" rx="6" fill="${COLORS.panel}" stroke="${COLORS.border}"/>`);
    parts.push(text(x + 14, kpiY + 36, val, { size: 26, weight: 700, color }));
    parts.push(text(x + 14, kpiY + 58, label, { size: 11, color: COLORS.textMuted }));
  });

  // Section: Portals
  let y = kpiY + 74 + 28;
  parts.push(text(24, y, 'BY PORTAL', { size: 11, weight: 700, color: COLORS.textMuted }));
  y += 16;
  const maxPortal = Math.max(1, ...Object.values(stats.byPortal));
  for (const portal of PORTALS) {
    const count = stats.byPortal[portal];
    const barW = ((W - 240) * count) / maxPortal;
    parts.push(text(24, y + 12, portal, { size: 12 }));
    parts.push(bar(140, y, W - 240, 16, COLORS.panel));
    if (count > 0) parts.push(bar(140, y, barW, 16, COLORS.accent));
    parts.push(text(W - 24, y + 12, String(count), { size: 12, anchor: 'end', color: COLORS.text }));
    y += 22;
  }

  // Section: Difficulty
  y += 12;
  parts.push(text(24, y, 'BY DIFFICULTY', { size: 11, weight: 700, color: COLORS.textMuted }));
  y += 16;
  const diffOrder: Difficulty[] = ['Easy', 'Medium', 'Hard', 'Unknown'];
  const diffColor: Record<Difficulty, string> = {
    Easy: COLORS.easy,
    Medium: COLORS.medium,
    Hard: COLORS.hard,
    Unknown: COLORS.unknown,
  };
  // Single stacked bar
  const stackX = 24;
  const stackW = W - 48;
  const stackH = 18;
  let cursor = stackX;
  parts.push(bar(stackX, y, stackW, stackH, COLORS.panel));
  for (const d of diffOrder) {
    const c = stats.byDifficulty[d];
    if (c === 0) continue;
    const w = (stackW * c) / Math.max(1, stats.total);
    parts.push(bar(cursor, y, w, stackH, diffColor[d]));
    cursor += w;
  }
  y += stackH + 18;
  // Legend (below bar, with proper offset)
  let lx = 24;
  for (const d of diffOrder) {
    const c = stats.byDifficulty[d];
    parts.push(`<rect x="${lx}" y="${y - 10}" width="10" height="10" rx="2" fill="${diffColor[d]}"/>`);
    parts.push(text(lx + 16, y, `${d} ${c}`, { size: 11, color: COLORS.textMuted }));
    lx += 100;
  }
  y += 12;

  // Section: Top categories (left) + Top patterns (right)
  y += 14;
  const colW = (W - 48 - 16) / 2;
  parts.push(text(24, y, 'TOP CATEGORIES', { size: 11, weight: 700, color: COLORS.textMuted }));
  parts.push(text(24 + colW + 16, y, 'TOP PATTERNS', { size: 11, weight: 700, color: COLORS.textMuted }));
  y += 16;

  const catEntries = Object.entries(stats.byCategory).sort((a, b) => b[1] - a[1]).slice(0, 5);
  const patEntries = Object.entries(stats.byPattern).sort((a, b) => b[1] - a[1]).slice(0, 5);
  const maxCat = catEntries.length ? catEntries[0][1] : 1;
  const maxPat = patEntries.length ? patEntries[0][1] : 1;

  const labelW = 140; // wider so "Bit Manipulation" fits
  const rowsToDraw = Math.max(catEntries.length, patEntries.length, 1);
  for (let i = 0; i < rowsToDraw; i++) {
    const ry = y + i * 22;
    if (catEntries[i]) {
      const [name, count] = catEntries[i];
      const innerW = colW - labelW - 30;
      parts.push(text(24, ry + 12, name, { size: 11 }));
      parts.push(bar(24 + labelW, ry, innerW, 14, COLORS.panel));
      parts.push(bar(24 + labelW, ry, (innerW * count) / maxCat, 14, COLORS.accent));
      parts.push(text(24 + colW - 4, ry + 12, String(count), { size: 11, anchor: 'end' }));
    }
    if (patEntries[i]) {
      const [name, count] = patEntries[i];
      const baseX = 24 + colW + 16;
      const innerW = colW - labelW - 30;
      parts.push(text(baseX, ry + 12, name, { size: 11 }));
      parts.push(bar(baseX + labelW, ry, innerW, 14, COLORS.panel));
      parts.push(bar(baseX + labelW, ry, (innerW * count) / maxPat, 14, COLORS.meter));
      parts.push(text(baseX + colW - 4, ry + 12, String(count), { size: 11, anchor: 'end' }));
    }
  }
  y += rowsToDraw * 22 + 14;

  // Section: MAANG Meter
  y += 4;
  parts.push(text(24, y, 'MAANG INTERVIEW READINESS', { size: 11, weight: 700, color: COLORS.textMuted }));
  y += 16;

  const meterX = 24;
  const meterW = W - 48;
  const meterH = 22;
  parts.push(bar(meterX, y, meterW, meterH, COLORS.panel));
  parts.push(bar(meterX, y, meterW * meter.score, meterH, COLORS.meter));
  parts.push(text(meterX + 8, y + 15, `${(meter.score * 100).toFixed(1)}%`, { size: 12, weight: 700 }));
  const verdict =
    meter.score >= 0.8 ? 'MAANG-ready' :
    meter.score >= 0.6 ? 'Strong candidate' :
    meter.score >= 0.4 ? 'Building momentum' :
    meter.score >= 0.2 ? 'Early stage' : 'Just getting started';
  parts.push(text(meterX + meterW - 8, y + 15, verdict, { size: 11, anchor: 'end', color: COLORS.textMuted }));
  y += meterH + 12;

  const subs: Array<[string, number, string]> = [
    [`Coverage (${meter.patternsHit}/${meter.patternsTotal} patterns)`, meter.coverage, '25%'],
    [`Volume (${meter.volumePoints} pts / 500)`, meter.volume, '30%'],
    [`Retention (last 30d practice)`, meter.retention, '15%'],
    [`Hard ratio (target 30%)`, meter.hardRatio, '15%'],
    [`Consistency (last 14d activity)`, meter.consistency, '15%'],
  ];
  for (const [label, value, weight] of subs) {
    parts.push(text(24, y + 11, label, { size: 11 }));
    parts.push(text(24 + 290, y + 11, weight, { size: 10, color: COLORS.textMuted }));
    const subW = W - 24 - (24 + 340);
    parts.push(bar(24 + 340, y + 1, subW, 12, COLORS.panel));
    parts.push(bar(24 + 340, y + 1, subW * value, 12, COLORS.meter, 0.85));
    parts.push(text(W - 24, y + 11, `${(value * 100).toFixed(0)}%`, { size: 11, anchor: 'end' }));
    y += 18;
  }

  if (meter.caps.length > 0) {
    y += 4;
    parts.push(text(24, y + 10, `Caps applied: ${meter.caps.join(' • ')}`, { size: 10, color: COLORS.hard }));
  }

  parts.push(`</svg>`);
  return parts.join('\n');
}

function fmtDate(d: Date): string {
  return d.toISOString().slice(0, 16).replace('T', ' ') + ' UTC';
}

function main(): void {
  const meta = loadMeta();
  const practice = loadPractice();
  const records = gatherProblems(meta, practice);
  const stats = computeStats(records);
  const meter = computeMaangMeter(stats, records, meta.corePatterns);
  const svg = renderSvg(stats, records, meter, fmtDate(new Date()));
  writeFileSync(join(ROOT, 'stats.svg'), svg);

  console.log(`stats.svg written. ${stats.total} problems, ${stats.totalPractices} practice sessions, MAANG ${(meter.score * 100).toFixed(1)}%.`);
  if (stats.unknownMetadata > 0) {
    const missing = records.filter((r) => r.difficulty === 'Unknown').map((r) => r.file);
    console.warn(`\n${stats.unknownMetadata} problems missing metadata in data/problems-meta.json:`);
    for (const f of missing) console.warn(`  - ${f}`);
  }
}

main();
