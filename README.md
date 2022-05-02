# common algorithm & data structures

## data structures

list
- linked list

queue

stack

tree
- binary tree
- trie

graph



## algorithm

sorting
- bubbleSort
- selectionSort
- insertionSort
- quickSort
- mergeSort

searching
- binarySearch
- BFS
- DFS

array manipulations
- two pointers
- sliding window

linked list manipulations
- two pointers
- fast slow pointers



## algorithm categories (types)

1. Recursive Algorithm: it’s an Algorithm that calls itself repeatedly until the problem is solved.
    - fibonacci

2. Divide and Conquer Algorithm: A divide-and-conquer algorithm recursively breaks down a problem into two or more sub-problems of the same or related type, until these become simple enough to be solved directly. 
    - merge sort

3. Dynamic Programming Algorithm: a dynamic programming algorithm solves complex problems by breaking them into multiple simple subproblems and then it solves each of them once and then stores them for future use.
    - climb stairs (fibonacci)

4. Greedy Algorithm: These algorithms are used for solving optimization problems. In this algorithm, we find a locally optimum solution (without any regard for any consequence in future) and hope to find the optimal solution at the global level.
    - Kruskal's algorithm
5. Brute Force Algorithm: This is one of the simplest algorithms in the concept. A brute force algorithm blindly iterates all possible solutions to search one or more than one solution that may solve a function.

6. Backtracking Algorithm: It solves problems recursively and tries to solve a problem by solving one piece of the problem at a time. If one of the solutions fail, we remove it and backtrack to find another solution.
    - N Queens problem



## leetcode question cheat sheet

```
If input array is sorted then
    - Binary search
    - Two pointers

If asked for all permutations/subsets then
    - Backtracking

If given a tree then
    - DFS
    - BFS

If given a graph then
    - DFS
    - BFS

If given a linked list then
    - Two pointers

If recursion is banned then
    - Stack

If must solve in-place then
    - Swap corresponding values
    - Store one or more different values in the same pointer

If asked for maximum/minimum subarray/subset/options then
    - Dynamic programming

If asked for top/least K items then
    - Heap

If asked for common strings then
    - Map
    - Trie

Else
    - Map/Set for O(1) time & O(n) space
    - Sort input for O(nlogn) time and O(1) space
```

## 回溯(backtracking)

```
void backtracking(参数) {
    if (终止条件) {
        存放结果;
        return;
    }

    for (选择：本层集合中元素（树中节点孩子的数量就是集合的大小）) {
        处理节点;
        backtracking(路径，选择列表); // 递归
        回溯，撤销处理结果
    }
}
```

## leetcode patterns


| question | question link | category | description |
| --- | --- | --- | --- |
| 268. 丢失的数字 | https://leetcode-cn.com/problems/missing-number/ | Array | sort array, if(nums[i]!==i) return i |
|136. 只出现一次的数字|https://leetcode-cn.com/problems/single-number/|Array| sort array, step in 2, if adjacent values are in pair |
|70. 爬楼梯|https://leetcode-cn.com/problems/climbing-stairs/| dynamic programming| f(n) = f(n-1) + f(n-2), memo store f(n) value
|121. 买卖股票的最佳时机|https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock/| greedy | tracking and compare minPrice and maxProfit in one iteration|
|53. 最大子数组和|https://leetcode-cn.com/problems/maximum-subarray/|dynamic programming| max sum of subArray end with nums[i], clear sum when sum < 0
|141. 环形链表|https://leetcode-cn.com/problems/linked-list-cycle/| hashTable / slow&fast pointer | track head and comparing of exsistence / slow pointer will meet fast pointer if there is a loop (fast two steps, slow one step, break loop when fast || fast.next == null)
|203. 移除链表元素|https://leetcode-cn.com/problems/remove-linked-list-elements/| slow&fast pointer| dummy.next = head, iterate if node.next.val = val -> node.next = node.next.next
|100. 相同的树|https://leetcode-cn.com/problems/same-tree/|DFS| two stack dfs two trees compare each node
|53. 最大子数组和|https://leetcode-cn.com/problems/maximum-subarray/|dynamic programming| dp[i]=max{nums[i],dp[i−1]+nums[i]}|
