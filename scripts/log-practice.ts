import { readFileSync, writeFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';

const ROOT = process.cwd();
const PRACTICE = join(ROOT, 'data', 'practice.json');
const META = join(ROOT, 'data', 'problems-meta.json');

interface PracticeEntry {
  file: string;
  date: string;
  notes?: string;
}

function usage(): never {
  console.error('Usage: npm run practice -- <file> [--notes="..."]');
  console.error('Example: npm run practice -- leetcode/88_merge_sorted_array.ts --notes="2nd solve, 8min"');
  process.exit(1);
}

function main(): void {
  const args = process.argv.slice(2);
  if (args.length === 0) usage();

  const file = args[0];
  const notesArg = args.find((a) => a.startsWith('--notes='));
  const notes = notesArg ? notesArg.slice('--notes='.length).replace(/^"|"$/g, '') : undefined;

  if (!existsSync(join(ROOT, file))) {
    console.error(`File not found: ${file}`);
    process.exit(1);
  }

  const meta = JSON.parse(readFileSync(META, 'utf8'));
  if (!meta.problems[file]) {
    console.warn(`Warning: ${file} has no entry in problems-meta.json. Add metadata for accurate stats.`);
  }

  const data = existsSync(PRACTICE)
    ? JSON.parse(readFileSync(PRACTICE, 'utf8'))
    : { entries: [] as PracticeEntry[] };

  const entry: PracticeEntry = {
    file,
    date: new Date().toISOString(),
    ...(notes ? { notes } : {}),
  };
  data.entries.push(entry);
  writeFileSync(PRACTICE, JSON.stringify(data, null, 2) + '\n');
  console.log(`Logged practice: ${file} @ ${entry.date}${notes ? ` (${notes})` : ''}`);
}

main();
