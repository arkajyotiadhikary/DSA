---
name: suggest-problem
description: Suggest my next DSA problem to solve from LeetCode Top Interview 150, GFG 160, HackerRank Interview Preparation Kit, or InterviewBit Programming track. Walks the full ordered curriculum, checks my GitHub repo for solved problems, and picks the first unsolved one. Use when I want to know what to practice next.
disable-model-invocation: true
argument-hint: [lc|gfg|hr|ib] (optional: filter by platform)
---

Suggest my next DSA problem to solve from the LeetCode Top Interview 150, GFG 160, HackerRank Interview Preparation Kit, or InterviewBit Programming track study plans.

## Step 1 — Fetch my solved problems from GitHub

Use WebFetch to load https://github.com/arkajyotiadhikary/DSA

Then check each subfolder/file by fetching:
- https://github.com/arkajyotiadhikary/DSA/tree/main/leetcode
- https://github.com/arkajyotiadhikary/DSA/tree/main/geeksforgeeks
- https://github.com/arkajyotiadhikary/DSA/tree/main/hackerrank
- https://github.com/arkajyotiadhikary/DSA/tree/main/interviewbit

Build a list of every problem I've already solved (by filename, LeetCode number, or problem name). These are TypeScript files. Do NOT suggest any problem already in this list.

If $ARGUMENTS is "lc", only suggest from LeetCode. If "gfg", only from GFG. If "hr", only from HackerRank. If "ib", only from InterviewBit. Otherwise alternate in round-robin order: LC → GFG → HR → IB → LC → …

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

### HackerRank Interview Preparation Kit — Ordered Curriculum

Base URL: https://www.hackerrank.com/interview/interview-preparation-kit

**Topic 1 — Warm-up Challenges**
1. Sock Merchant
2. Counting Valleys
3. Jumping on the Clouds
4. Repeated String

**Topic 2 — Arrays**
1. Arrays: Left Rotation
2. New Year Chaos
3. 2D Array - DS
4. Minimum Swaps 2
5. Array Manipulation

**Topic 3 — Dictionaries and Hashmaps**
1. Hash Tables: Ransom Note
2. Two Strings
3. Sherlock and Anagrams
4. Count Triplets
5. Frequency Queries

**Topic 4 — Sorting**
1. Sorting: Bubble Sort
2. Mark and Toys
3. Sorting: Comparator
4. Fraudulent Activity Notifications
5. Merge Sort: Counting Inversions

**Topic 5 — String Manipulation**
1. Strings: Making Anagrams
2. Alternating Characters
3. Sherlock and the Valid String
4. Special String Again
5. Common Child

**Topic 6 — Greedy Algorithms**
1. Luck Balance
2. Minimum Absolute Difference in an Array
3. Greedy Florist
4. Max Min
5. Reverse Shuffle Merge

**Topic 7 — Search**
1. Hash Tables: Ice Cream Parlor
2. Swap Nodes [Algo]
3. Pairs
4. Triple Sum
5. Minimum Time Required
6. Maximum Subarray Sum
7. Making Candies

**Topic 8 — Dynamic Programming**
1. Max Array Sum
2. Candies
3. Abbreviation
4. Decibinary Numbers

**Topic 9 — Stacks and Queues**
1. Balanced Brackets
2. Queues: A Tale of Two Stacks
3. Largest Rectangle
4. Min Max Riddle
5. Castle on the Grid
6. Poisonous Plants

**Topic 10 — Graphs**
1. Roads and Libraries
2. Find the nearest clone
3. BFS: Shortest Reach in a Graph
4. DFS: Connected Cell in a Grid
5. Matrix

**Topic 11 — Trees**
1. Tree: Height of a Binary Tree
2. Tree: Huffman Decoding
3. Binary Search Tree: Lowest Common Ancestor
4. Is This a Binary Search Tree?
5. Balanced Forest

**Topic 12 — Linked Lists**
1. Insert a node at a specific position in a linked list
2. Inserting a Node Into a Sorted Doubly Linked List
3. Reverse a doubly linked list
4. Find Merge Point of Two Lists
5. Linked Lists: Detect a Cycle

**Topic 13 — Recursion and Backtracking**
1. Recursion: Fibonacci Numbers
2. Recursion: Davis' Staircase
3. Recursion: Crossword Puzzle
4. Recursive Digit Sum

**Topic 14 — Miscellaneous**
1. Flipping bits
2. Time Complexity: Primality
3. Friend Circle Queries
4. Maximum Xor

---

### InterviewBit Programming Track — Curated Curriculum

Base URL: https://www.interviewbit.com/courses/programming/

Curated canonical interview problems drawn from the official InterviewBit Programming track — picked to keep scope comparable to the other study plans (LC Top 150, GFG 160). Problem names match InterviewBit's titles exactly.

**Topic 1 — Arrays**
1. Spiral Order Matrix I
2. Max Sum Contiguous Subarray
3. Max Non Negative SubArray
4. Largest Number
5. Kth Row of Pascal's Triangle
6. Rotate Matrix
7. Set Matrix Zeros
8. First Missing Integer
9. Next Permutation
10. Merge Intervals
11. Merge Overlapping Intervals
12. Max Distance
13. Maximum Absolute Difference

**Topic 2 — Math**
1. All Factors
2. Prime Sum
3. Excel Column Number
4. Excel Column Title
5. Grid Unique Paths
6. Reverse Integer
7. Palindrome Integer
8. Power Of Two Integers
9. Trailing Zeros in Factorial
10. Sorted Permutation Rank
11. FizzBuzz

**Topic 3 — Binary Search**
1. Sorted Insert Position
2. Search For a Range
3. Matrix Median
4. Matrix Search
5. Square Root of Integer
6. Painter's Partition Problem
7. Allocate Books
8. Median of Array
9. Rotated Sorted Array Search
10. Implement Power Function

**Topic 4 — Strings**
1. Palindrome String
2. Longest Common Prefix
3. Count And Say
4. Longest Palindromic Substring
5. Integer To Roman
6. Roman To Integer
7. Atoi
8. ZigZag String
9. Add Binary Strings
10. Multiply Strings
11. Compare Version Numbers
12. Justified Text
13. Valid IP Addresses

**Topic 5 — Bit Manipulation**
1. Number of 1 Bits
2. Reverse Bits
3. Single Number
4. Single Number II
5. Divide Integers
6. Different Bits Sum Pairwise
7. Min XOR value

**Topic 6 — Two Pointers**
1. Merge Two Sorted Lists II
2. Remove Duplicates from Sorted Array
3. Remove Element from Array
4. Sort by Color
5. 3 Sum
6. 3 Sum Zero
7. Container With Most Water
8. Diffk
9. Intersection Of Sorted Arrays

**Topic 7 — Linked Lists**
1. Intersection of Linked Lists
2. Reverse Linked List
3. Palindrome List
4. Remove Duplicates from Sorted List
5. Remove Duplicates from Sorted List II
6. Merge Two Sorted Lists
7. Remove Nth Node from List End
8. Rotate List
9. Reverse Link List II
10. Reorder List
11. Add Two Numbers as Lists
12. List Cycle
13. Partition List
14. Swap List Nodes in Pairs
15. K Reverse Linked List
16. Sort List

**Topic 8 — Stacks and Queues**
1. Generate all Parentheses
2. Reverse String
3. Nearest Smaller Element
4. Largest Rectangle in Histogram
5. Sliding Window Maximum
6. Min Stack
7. Evaluate Expression
8. Rain Water Trapped
9. Redundant Braces
10. Simplify Directory Path

**Topic 9 — Backtracking**
1. Combinations
2. Combination Sum
3. Combination Sum II
4. Letter Phone
5. Subset
6. Subsets II
7. Palindrome Partitioning
8. Generate all Parentheses II
9. Permutations
10. Gray Code
11. NQueens
12. Sudoku
13. Kth Permutation Sequence

**Topic 10 — Hashing**
1. Colorful Number
2. 2 Sum
3. 4 Sum
4. Valid Sudoku
5. Diffk II
6. Anagrams
7. Equal
8. Copy List
9. Longest Substring Without Repeat
10. Substring Concatenation
11. Fraction
12. Points on the Straight Line
13. Largest Continuous Sequence Zero Sum
14. Window String

**Topic 11 — Heaps and Maps**
1. N max pair combinations
2. Magician and Chocolates
3. Merge K Sorted Lists
4. Distinct Numbers in Window
5. LRU Cache
6. Ways to form Max Heap

**Topic 12 — Trees**
1. Vertical Order traversal of Binary Tree
2. Inorder Traversal
3. Preorder Traversal
4. Postorder Traversal
5. Max Depth of Binary Tree
6. Min Depth of Binary Tree
7. Balanced Binary Tree
8. Identical Binary Trees
9. Symmetric Binary Tree
10. Invert the Binary Tree
11. ZigZag Level Order Traversal BT
12. Populate Next Right Pointers Tree
13. Sorted Array To Balanced BST
14. Least Common Ancestor
15. Valid Binary Search Tree
16. Kth Smallest Element in Tree
17. BST Iterator
18. Recover Binary Search Tree
19. Path Sum
20. Root to Leaf Paths With Sum
21. Sum Root to Leaf Numbers
22. Flatten Binary Tree to Linked List
23. Construct Binary Tree From Inorder And Preorder
24. 2-Sum Binary Tree

**Topic 13 — Dynamic Programming**
1. Longest Common Subsequence
2. Longest Palindromic Subsequence
3. Edit Distance
4. Repeating Subsequence
5. Distinct Subsequences
6. Scramble String
7. Regular Expression Match
8. Word Break
9. Word Break II
10. Longest Valid Parenthesis
11. Palindrome Partitioning II
12. Coin Sum Infinite
13. Max Product Subarray
14. Longest Increasing Subsequence
15. Jump Game Array
16. Min Jumps Array
17. Min Sum Path in Matrix
18. Min Sum Path in Triangle
19. Dungeon Princess
20. Unique Paths in a Grid
21. Best Time to Buy and Sell Stocks I
22. Best Time to Buy and Sell Stocks II
23. Best Time to Buy and Sell Stocks III
24. Rod Cutting
25. Max Sum Without Adjacent Elements
26. 0-1 Knapsack
27. Equal Average Partition
28. Max Rectangle in Binary Matrix

**Topic 14 — Greedy**
1. Highest Product
2. Bulbs
3. Distribute Candy
4. Gas Station
5. Majority Element
6. Assign Mice to Holes
7. Seats
8. Disjoint Intervals

**Topic 15 — Graphs**
1. Valid Path
2. Region in Binary Matrix
3. Level Order
4. Smallest Multiple With 0 and 1
5. Snake Ladder Problem
6. Min Cost Path
7. Capture Regions on Board
8. Word Search Board
9. Word Ladder I
10. Word Ladder II
11. Black Shapes
12. Clone Graph
13. Stepping Numbers
14. Commutable Islands
15. Possibility of Finishing All Courses
16. Cycle in Directed Graph
17. Cycle in Undirected Graph
18. Largest Distance between Nodes of a Tree
19. Sum of Fibonacci Numbers
20. Knight On Chess Board
21. Smallest Sequence With Given Primes

---

## Step 3 — Present the recommendation

Walk all four ordered lists, find the first unsolved problem in each, then pick whichever comes next in the natural round-robin progression: LC → GFG → HR → IB → LC → …

If $ARGUMENTS filters to one platform, only walk that list.

Format your response as:

---
**Problem:** [Full problem name]
**Source:** [LeetCode #XXX | GFG Day XX | HackerRank <topic> | InterviewBit <topic>] — [direct link to problem]
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
