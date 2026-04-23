---
name: suggest-problem
description: Suggest my next DSA problem to solve from LeetCode Top Interview 150 or GFG 160. Walks the full ordered curriculum, checks my GitHub repo for solved problems, and picks the first unsolved one. Use when I want to know what to practice next.
disable-model-invocation: true
argument-hint: [lc|gfg] (optional: filter by platform)
---

Suggest my next DSA problem to solve from the LeetCode Top Interview 150 or GFG 160 study plans.

## Step 1 — Fetch my solved problems from GitHub

Use WebFetch to load https://github.com/arkajyotiadhikary/DSA

Then check each subfolder/file by fetching:
- https://github.com/arkajyotiadhikary/DSA/tree/main/leetcode
- https://github.com/arkajyotiadhikary/DSA/tree/main/geeksforgeeks

Build a list of every problem I've already solved (by filename, LeetCode number, or problem name). These are TypeScript files. Do NOT suggest any problem already in this list.

If $ARGUMENTS is "lc", only suggest from LeetCode. If "gfg", only from GFG. Otherwise alternate.

## Step 2 — Find the next unsolved problem

Use the ordered curriculum below. Go through each topic in order. Within a topic, go through problems in order. Find the FIRST problem I have NOT yet solved and suggest that one.

Do not pick randomly. Walk the list in order and pick the first gap.

### LeetCode Top 150 — Ordered Curriculum

**Topic 1 — Array / String**
1. Merge Sorted Array (#88)
2. Remove Element (#27)
3. Remove Duplicates from Sorted Array (#26)
4. Remove Duplicates from Sorted Array II (#80)
5. Majority Element (#169)
6. Rotate Array (#189)
7. Best Time to Buy and Sell Stock (#121)
8. Best Time to Buy and Sell Stock II (#122)
9. Jump Game (#55)
10. Jump Game II (#45)
11. H-Index (#274)
12. Insert Delete GetRandom O(1) (#380)
13. Product of Array Except Self (#238)
14. Gas Station (#134)
15. Candy (#135)
16. Trapping Rain Water (#42)
17. Roman to Integer (#13)
18. Integer to Roman (#12)
19. Length of Last Word (#58)
20. Longest Common Prefix (#14)
21. Reverse Words in a String (#151)
22. Zigzag Conversion (#6)
23. Find the Index of the First Occurrence in a String (#28)
24. Text Justification (#68)

**Topic 2 — Two Pointers**
1. Valid Palindrome (#125)
2. Is Subsequence (#392)
3. Two Sum II - Input Array Is Sorted (#167)
4. Container With Most Water (#11)
5. 3Sum (#15)

**Topic 3 — Sliding Window**
1. Minimum Size Subarray Sum (#209)
2. Longest Substring Without Repeating Characters (#3)
3. Substring with Concatenation of All Words (#30)
4. Minimum Window Substring (#76)

**Topic 4 — Matrix**
1. Valid Sudoku (#36)
2. Spiral Matrix (#54)
3. Rotate Image (#48)
4. Set Matrix Zeroes (#73)
5. Game of Life (#289)

**Topic 5 — Hashmap**
1. Ransom Note (#383)
2. Isomorphic Strings (#205)
3. Word Pattern (#290)
4. Valid Anagram (#242)
5. Group Anagrams (#49)
6. Two Sum (#1)
7. Happy Number (#202)
8. Contains Duplicate II (#219)
9. Longest Consecutive Sequence (#128)

**Topic 6 — Intervals**
1. Summary Ranges (#228)
2. Merge Intervals (#56)
3. Insert Interval (#57)
4. Minimum Number of Arrows to Burst Balloons (#452)

**Topic 7 — Stack**
1. Valid Parentheses (#20)
2. Simplify Path (#71)
3. Min Stack (#155)
4. Evaluate Reverse Polish Notation (#150)
5. Basic Calculator (#224)

**Topic 8 — Linked List**
1. Linked List Cycle (#141)
2. Add Two Numbers (#2)
3. Merge Two Sorted Lists (#21)
4. Copy List with Random Pointer (#138)
5. Reverse Linked List II (#92)
6. Reverse Nodes in k-Group (#25)
7. Remove Nth Node From End of List (#19)
8. Remove Duplicates from Sorted List II (#82)
9. Rotate List (#61)
10. Partition List (#86)
11. LRU Cache (#146)

**Topic 9 — Binary Tree: General**
1. Maximum Depth of Binary Tree (#104)
2. Same Tree (#100)
3. Invert Binary Tree (#226)
4. Symmetric Tree (#101)
5. Construct Binary Tree from Preorder and Inorder Traversal (#105)
6. Construct Binary Tree from Inorder and Postorder Traversal (#106)
7. Populating Next Right Pointers in Each Node II (#117)
8. Flatten Binary Tree to Linked List (#114)
9. Path Sum (#112)
10. Sum Root to Leaf Numbers (#129)
11. Binary Tree Maximum Path Sum (#124)
12. Binary Search Tree Iterator (#173)
13. Count Complete Tree Nodes (#222)
14. Lowest Common Ancestor of a Binary Tree (#236)

**Topic 10 — Binary Tree: BFS**
1. Binary Tree Right Side View (#199)
2. Average of Levels in Binary Tree (#637)
3. Binary Tree Level Order Traversal (#102)
4. Binary Tree Zigzag Level Order Traversal (#103)

**Topic 11 — Binary Search Tree**
1. Minimum Absolute Difference in BST (#530)
2. Kth Smallest Element in a BST (#230)
3. Validate Binary Search Tree (#98)

**Topic 12 — Graph: General**
1. Number of Islands (#200)
2. Surrounded Regions (#130)
3. Clone Graph (#133)
4. Evaluate Division (#399)
5. Course Schedule (#207)
6. Course Schedule II (#210)

**Topic 13 — Graph: BFS**
1. Snakes and Ladders (#909)
2. Minimum Genetic Mutation (#433)
3. Word Ladder (#127)

**Topic 14 — Trie**
1. Implement Trie (Prefix Tree) (#208)
2. Design Add and Search Words Data Structure (#211)
3. Word Search II (#212)

**Topic 15 — Backtracking**
1. Letter Combinations of a Phone Number (#17)
2. Combinations (#77)
3. Permutations (#46)
4. Combination Sum (#39)
5. N-Queens II (#52)
6. Generate Parentheses (#22)
7. Word Search (#79)

**Topic 16 — Divide & Conquer**
1. Convert Sorted Array to Binary Search Tree (#108)
2. Sort List (#148)
3. Construct Quad Tree (#427)
4. Merge k Sorted Lists (#23)

**Topic 17 — Kadane's Algorithm**
1. Maximum Subarray (#53)
2. Maximum Sum Circular Subarray (#918)

**Topic 18 — Binary Search**
1. Search Insert Position (#35)
2. Search a 2D Matrix (#74)
3. Find Peak Element (#162)
4. Search in Rotated Sorted Array (#33)
5. Find First and Last Position of Element in Sorted Array (#34)
6. Find Minimum in Rotated Sorted Array (#153)
7. Median of Two Sorted Arrays (#4)

**Topic 19 — Heap**
1. Kth Largest Element in an Array (#215)
2. IPO (#502)
3. Find K Pairs with Smallest Sums (#373)
4. Find Median from Data Stream (#295)

**Topic 20 — Bit Manipulation**
1. Add Binary (#67)
2. Reverse Bits (#190)
3. Number of 1 Bits (#191)
4. Single Number (#136)
5. Single Number II (#137)
6. Bitwise AND of Numbers Range (#201)

**Topic 21 — Math**
1. Palindrome Number (#9)
2. Plus One (#66)
3. Factorial Trailing Zeroes (#172)
4. Sqrt(x) (#69)
5. Pow(x, n) (#50)
6. Max Points on a Line (#149)

**Topic 22 — 1D Dynamic Programming**
1. Climbing Stairs (#70)
2. House Robber (#198)
3. Word Break (#139)
4. Coin Change (#322)
5. Longest Increasing Subsequence (#300)

**Topic 23 — Multidimensional DP**
1. Triangle (#120)
2. Minimum Path Sum (#64)
3. Unique Paths II (#63)
4. Longest Palindromic Substring (#5)
5. Interleaving String (#97)
6. Edit Distance (#72)
7. Best Time to Buy and Sell Stock III (#123)
8. Best Time to Buy and Sell Stock IV (#188)
9. Maximal Square (#221)

---

### GFG 160 — Ordered Curriculum

**Topic 1 — Arrays (Days 1–13)**
1. Second Largest Element in an Array
2. Move All Zeroes to End
3. Reverse an Array
4. Rotate Array
5. Next Permutation
6. Majority Element II
7. Stock Buy and Sell – Multiple Transaction Allowed
8. Stock Buy and Sell – Max One Transaction Allowed
9. Minimize the Heights II
10. Kadane's Algorithm
11. Maximum Product Subarray
12. Max Circular Subarray Sum
13. Smallest Positive Missing Number

**Topic 2 — Strings (Days 14–20)**
1. Implement Atoi
2. Add Binary Strings
3. Anagram
4. Non Repeating Character
5. Search Pattern (KMP Algorithm)
6. Min Chars to Add for Palindrome
7. Strings Rotations of Each Other

**Topic 3 — Sorting (Days 21–27)**
1. Sort 0s, 1s and 2s
2. Find H-Index
3. Count Inversions
4. Overlapping Intervals
5. Insert Interval
6. Non-overlapping Intervals
7. Merge Without Extra Space

**Topic 4 — Searching (Days 28–35)**
1. Number of Occurrence
2. Sorted and Rotated Minimum
3. Search in Rotated Sorted Array
4. Peak Element
5. Kth Element of Two Arrays
6. Aggressive Cows
7. Allocate Minimum Pages
8. Kth Missing Positive Number

**Topic 5 — Matrix (Days 36–41)**
1. Spirally Traversing a Matrix
2. Rotate by 90 Degree
3. Search in a Row-Column Sorted Matrix
4. Search in a Row-wise Sorted Matrix
5. Search in a Sorted Matrix
6. Set Matrix Zeroes

**Topic 6 — Hashing (Days 42–50)**
1. Two Sum — Pair with Given Sum
2. Count Pairs with Given Sum
3. Find All Triplets with Zero Sum
4. Intersection of Two Arrays with Duplicate Elements
5. Union of Two Arrays with Duplicate Elements
6. Longest Consecutive Subsequence
7. Print Anagrams Together
8. Subarrays with Sum K
9. Count Subarrays with Given XOR

**Topic 7 — Two Pointer Technique (Days 51–60)**
1. Count the number of possible triangles
2. Count Pairs whose sum is less than target
3. Sum Pair closest to target
4. Pair with given sum in sorted array
5. Count all triplets with given sum in sorted array
6. Indexes of Subarray Sum
7. Count distinct elements in every window
8. Longest substring with distinct characters
9. Trapping Rain Water
10. Container With Most Water

**Topic 8 — Prefix Sum (Days 61–64)**
1. Equilibrium Point
2. Longest Subarray with Sum K
3. Largest Subarray of 0s and 1s
4. Product Array Puzzle

**Topic 9 — Linked List (Days 65–74)**
1. Reverse a Linked List
2. Rotate a Linked List
3. Merge Two Sorted Linked Lists
4. Reverse a Linked List in Groups of Given Size
5. Add Number Linked Lists
6. Clone List with Next and Random Pointer
7. Detect Loop in Linked List
8. Find the First Node of Loop in Linked List
9. Remove Loop in Linked List
10. LRU Cache

**Topic 10 — Recursion & Backtracking (Days 75–79)**
1. Permutations of a String
2. Implement Pow
3. N-Queen Problem
4. Solve the Sudoku
5. Word Search

**Topic 11 — Tree (Days 80–94)**
1. Level Order Traversal
2. Height of Binary Tree
3. Diameter of a Binary Tree
4. Mirror Tree
5. Construct Binary Tree from Parent Array
6. Tree Traversal
7. Boundary Traversal of Binary Tree
8. Maximum Path Sum from Any Node
9. K Sum Paths
10. Check for BST
11. Kth Smallest in BST
12. Pair Sum in BST
13. Fix Two Nodes of a BST
14. Lowest Common Ancestor in a BST
15. Construct Tree from Inorder and Preorder

**Topic 12 — Heap (Days 95–98)**
1. K Largest Elements
2. Merge K Sorted Arrays
3. K Closest Points to Origin
4. Find Median in a Stream

**Topic 13 — Stack (Days 99–107)**
1. Next Greater Element
2. Next Greater Element in Circular Array
3. Stock Span Problem
4. Histogram Maximum Rectangular Area
5. Maximum of Minimum for Every Window Size
6. The Celebrity Problem
7. Evaluation of Postfix Expression
8. Longest Valid Parentheses
9. Implement Two Stacks in an Array

**Topic 14 — Queue & Deque (Days 108–109)**
1. Sliding Window Maximum
2. First Circular Tour to Complete Full Journey

**Topic 15 — Dynamic Programming (Days 110–132)**
1. Nth Fibonacci Number
2. Climbing Stairs
3. Min Cost Climbing Stairs
4. 0-1 Knapsack Problem
5. Partition Equal Subset Sum
6. Coin Change (Count Ways)
7. Coin Change (Minimum Coins)
8. Rod Cutting
9. Egg Drop Problem
10. Word Break
11. Longest Common Subsequence
12. Longest Increasing Subsequence
13. Longest Palindromic Subsequence
14. Edit Distance
15. Wildcard Pattern Matching
16. Matrix Chain Multiplication
17. Palindrome Partitioning II
18. Word Wrap Problem
19. Maximum Profit in Job Scheduling
20. Minimum Number of Jumps
21. Maximum Difference of Zeros and Ones in Binary String
22. Minimum Cost to Fill Given Weight in a Bag
23. Optimal Binary Search Tree

**Topic 16 — Greedy (Days 133–137)**
1. Activity Selection
2. Job Sequencing Problem
3. Huffman Encoding
4. Fractional Knapsack
5. Minimum Platforms

**Topic 17 — Graphs (Days 138–152)**
1. BFS of Graph
2. DFS of Graph
3. Transitive Closure of a Graph
4. Detect Cycle in Undirected Graph
5. Detect Cycle in Directed Graph
6. Topological Sorting
7. Shortest Path in Undirected Graph with Unit Weights
8. Shortest Path in Directed Acyclic Graph
9. Dijkstra's Algorithm
10. Bellman-Ford Algorithm
11. Floyd Warshall Algorithm
12. Prim's Minimum Spanning Tree
13. Kruskal's Minimum Spanning Tree
14. Bridge Edge in Graph
15. Strongly Connected Components (Kosaraju's Algorithm)

**Topic 18 — Tries (Days 153–155)**
1. Insert and Search in a Trie
2. Implement Trie
3. Phone Directory

**Topic 19 — Bit Manipulation (Days 156–160)**
1. Power of 2
2. Longest Consecutive 1s
3. Count Set Bits
4. Missing Number in Array
5. Find Two Non-Repeating Numbers

---

## Step 3 — Present the recommendation

Walk both ordered lists, find the first unsolved problem in each, then pick whichever comes next in the natural alternating LC → GFG → LC → GFG progression.

Format your response as:

---
**Problem:** [Full problem name]
**Source:** [LeetCode #XXX or GFG Day XX] — [direct link to problem]
**Difficulty:** [Easy / Medium / Hard]
**Topic:** [Category]
**Progress:** [e.g. "2/24 Array problems done on LC" or "First problem in this topic"]
**Why now:** [1 sentence on how this fits the progression]

**Problem Statement:**
[Clear description — 3-5 sentences, include input/output format]

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

Do NOT give hints, approach, or solution unless I explicitly ask.

$ARGUMENTS
