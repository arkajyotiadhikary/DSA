---
name: review-problem
description: Pick a problem from my already-solved DSA problems and present it fresh for review practice. Use when I want to re-solve something I've done before to strengthen the pattern.
disable-model-invocation: true
argument-hint: [topic|problem-number] (optional: filter by topic or specific problem)
---

Pick a problem from my already-solved DSA problems for me to review and practice again from scratch.

## Step 1 — Fetch my solved problems

Use WebFetch to load https://github.com/arkajyotiadhikary/DSA

Check subfolders:
- https://github.com/arkajyotiadhikary/DSA/tree/main/leetcode
- https://github.com/arkajyotiadhikary/DSA/tree/main/geeksforgeeks
- https://github.com/arkajyotiadhikary/DSA/tree/main/hackerrank
- https://github.com/arkajyotiadhikary/DSA/tree/main/interviewbit

Build a list of every solved problem (by filename, LeetCode number, or problem name). These are TypeScript files.

## Step 2 — Pick one problem to review

- If $ARGUMENTS is empty: pick one at random from all solved problems. Vary the pick — don't always pick the same one.
- If $ARGUMENTS is a topic name (e.g. "strings", "sorting"): pick a solved problem from that topic.
- If $ARGUMENTS is a problem number or name (e.g. "88" or "anagram"): use that specific problem.

## Step 3 — Present the problem as if I'm solving it fresh

Do NOT show my previous solution. Do NOT reveal the approach. Present it like a fresh interview question.

Format:

---
**Problem:** [Full problem name]
**Source:** [LeetCode #XXX or GFG — with link]
**Difficulty:** [Easy / Medium / Hard]
**Topic:** [Category]

**Problem Statement:**
[Full clear description]

**Examples:**

Example 1:
Input: [input]
Output: [output]
Explanation: [brief]

Example 2:
Input: [input]
Output: [output]

**Constraints:**
[All constraints]
---

After presenting, say:
> Take your time. Type `hint` for a nudge, or share your solution when ready and I'll review it.

## Step 4 — Be ready to assist

**If I type `hint`:** Give a progressive hint. First hint = vague (just name the pattern: "think two pointers"). Only get more specific if I ask again.

**If I share a solution:** Review it for:
1. Correctness — does it handle all cases?
2. Time and space complexity
3. Edge cases missed
4. How it compares to the optimal approach (describe the optimal, don't write it out unless I ask)

$ARGUMENTS
