# My DSA Practice Sync

This github repo consists of my raw human codes. No ai is involved here. Well that's lie. I'm using ai to suggest me codes to solve. But all the solutions are written by me as a DSA practice and to enjoy the craft of coding again when these are useless anyways because AI can one shot these problems.

## Stats

![DSA Stats](stats.svg)

`stats.svg` regenerates automatically before every commit (via the `hooks/pre-commit` git hook).

## Setup (one-time, after fresh clone)

```bash
npm install
npm run setup    # points git at the hooks/ directory and chmods the hook
```

## Daily flow

- **Solve a new problem:** add the file under `leetcode/`, `geeksforgeeks/`, `hackerrank/`, or `interviewbit/`, then add a metadata entry in `data/problems-meta.json` (difficulty, category, patterns, companies). Commit — the hook regenerates `stats.svg`.
- **Re-practice an already-solved problem:**
  ```bash
  npm run practice -- leetcode/88_merge_sorted_array.ts --notes="3rd solve, 5min"
  ```
  This appends to `data/practice.json`. Commit to refresh the SVG.
- **Manual regen (no commit):** `npm run stats`

## Data files

| File | Purpose |
|------|---------|
| `data/problems-meta.json` | Per-problem metadata: difficulty, category, patterns, companies. Edit when adding a problem. |
| `data/practice.json` | Append-only log of revisit/practice sessions. Driven by `npm run practice`. |
| `stats.svg` | Generated. Do not edit by hand. |

## MAANG Meter

The MAANG readiness score is a weighted blend of five signals:

| Signal | Weight | What it measures |
|--------|--------|------------------|
| Coverage | 25% | Per-pattern mastery weight `min(count / 3, 1)` averaged over 18 core patterns (Two Pointers, Sliding Window, Hash Table, Sorting, Binary Search, Recursion, DP, Backtracking, Greedy, Stack, Queue, Linked List, Tree DFS/BFS, Graph DFS/BFS, Heap, Trie, Bit Manipulation, Math). Need 3+ problems in a pattern to fully count it. |
| Volume | 30% | Weighted problem count (Easy=1, Medium=3, Hard=5), capped at 1500 points (MAANG bar ≈ 1150). |
| Retention | 15% | Share of solved problems re-practiced in the last 30 days. |
| Hard ratio | 15% | Hard / total, target 30%. |
| Consistency | 15% | Distinct days in the last 14 where a NEW problem was added under a portal folder. Metadata-only commits don't count. |

**Honest caps** (applied as ceilings on the final score):
- If Hard count = 0 → meter capped at 30%
- If total problems < 50 → meter capped at 25%

Verdict bands: ≥80% MAANG-ready • ≥60% Strong candidate • ≥40% Building momentum • ≥20% Early stage • <20% Just getting started.
