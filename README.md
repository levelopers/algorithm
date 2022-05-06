# common algorithm & data structures

## data structures
---

[list](./data-structure/linkedList)
- [linked list](./data-structure/linkedList/LinkedList.js)
- [doubley linked list](./data-structure/linkedList/DoublyLinkedList.js)

[queue](./data-structure/queue/Queue.js)
- [priority queue](./data-structure/queue/PriorityQueue.js)
- [mono queue](./data-structure/queue/MonoQueue.js)

[stack](./data-structure/stack/Stack.js)

[heap](./data-structure/heap/Heap.js)

[tree](./data-structure/tree)
- [binary tree](./data-structure/tree/binaryTree/BinaryTreeNode.js)
- [trie](./data-structure/tree/trie)

[graph](./data-structure/graph)



## algorithm
---

### sorting
| type | average time complexity | worst case time complexity | best case time complexity | space complexity |
| --- | --- | --- | --- | --- |
| bubbleSort | O(n^2) | O(n^2) | O(n) | O(1) |
| selectionSort | O(n^2) | O(n^2) | O(n^2) | O(1) |
| insertionSort | O(n^2) | O(n^2) | O(n) | O(1) |
| quickSort | O(nlogn) | O(n^2) | O(nlogn) | O(nlogn) |
| mergeSort | O(nlogn) | O(nlogn) | O(nlogn) | O(n) |

### searching
| type | average time complexity | worst case time complexity | best case time complexity | space complexity |
| --- | --- | --- | --- | --- |
| binarySearch | O(logn) | O(logn) | O(1) | O(1) |

### array 
- two pointers
- sliding window
- binary search

### string
- rotate
- kmp

### linked list 
- two pointers
- fast slow pointers

### tree
- binary search

## common algorithm problems

### array
- [remove element（移除元素）](#27)
- [binary search（二分查找）](#704)
- [squares of a sorted array（有序数组的平方）](#977)
- [minimum size subarray sum（长度最小子数组）](#209)

### linked list
- [implement linked list（实现链表及操作）](./data-structure/linkedList/LinkedList.js)
- [reverse linked list（反转链表）](#206)
- [remove nth from end（删除倒数第n个节点）](#19)
- [cycle list（环形链表）](#142)
  
### string
- [reverse string（反转字符串）](#344)
- [replace space（替换空格）](#tihuankongge)
- [reverse words（反转字符串里的单词）](#151)
- [rotate string（左旋字符串）](#zuoxuanzifuchuan)
- [kmp](#28)

### two pointer
- [3sum（三数之和）](#15)

### queue
- [implement stack using queues（用队列实现栈）](#225)
- [sliding window maximum(滑动窗口最大值)](#239)
- [top k frequent elements(前 K 个高频元素)](#347)


### stack
- [implement queue using stacks（用栈实现队列）](#232)
- [valid parentheses(有效的括号)](#20)
- [evaluate reverse polish notation(逆波兰表达式求值)](#150)

### tree
- [traverse in-order, pre-order, post-order(前，中，后序遍历)](./data-structure/tree/binaryTree/BinaryTreeNode.js)
- [BFS, DFS（广度，深度搜索）](./algorithm/searching/search.js)
- [invert binary tree(翻转二叉树)](#226)

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
|<span id="704">704. 二分查找</span>|https://leetcode-cn.com/problems/binary-search/|binary search| binary search sorted array|
|<span id="27">27. 移除元素</span>|https://leetcode-cn.com/problems/remove-element/|two pointer| remove and shift others upwards|
|<span id="977">977. 有序数组的平方</span>|https://leetcode-cn.com/problems/squares-of-a-sorted-array/|two pointer| two pointers from first and last then compare|
|<span id="209">209. 长度最小的子数组</span>|https://leetcode-cn.com/problems/minimum-size-subarray-sum/|sliding window| window on sub-array|
|<span id="203">203. 移除链表元素</span>|https://leetcode-cn.com/problems/remove-linked-list-elements/|linkedlist| loop node.next and compare node.next.val==target|
|<span id="206">206. 反转链表</span>|https://leetcode-cn.com/problems/reverse-linked-list/|linkedlist|  let temp = cur.next；cur.next = pre；pre = cur；cur = temp|
|<span id="19">19. 删除链表的倒数第 N 个结点</span>|https://leetcode-cn.com/problems/remove-nth-node-from-end-of-list/|fast&slow pointer| fast n steps forward slow pointer,return slow when fast reach the end|
|<span id="142">142. 环形链表 II</span>|https://leetcode-cn.com/problems/linked-list-cycle-ii/|fast&slow pointer| fast 2 steps, slow 1 step|
|<span id="344">344. 反转字符串</span>|https://leetcode-cn.com/problems/reverse-string/|two pointers| point to first and last element|
|<span id="tihuankongge">剑指 Offer 05. 替换空格</span>|https://leetcode-cn.com/problems/ti-huan-kong-ge-lcof/|two pointers| increase size to result, move two pinters|
|<span id="151">151. 颠倒字符串中的单词</span>|https://leetcode-cn.com/problems/reverse-words-in-a-string/|two pointers| remove trailing space, reverse string, reverse each word|
|<span id="zuoxuanzifuchuan">剑指 Offer 58 - II. 左旋转字符串</span>|https://leetcode-cn.com/problems/zuo-xuan-zhuan-zi-fu-chuan-lcof/|array | reverse first k, reverse rest, reverse whole string|
|<span id="28">28. 实现 strStr()</span>|https://leetcode-cn.com/problems/implement-strstr/|string kmp | kmp|
|<span id="15">15. 三数之和</span>|https://leetcode-cn.com/problems/3sum/|two pointers | for loop, sum=nums[i]+nums[left]+nums[right] |
|<span id="232">232. 用栈实现队列</span>|https://leetcode-cn.com/problems/implement-queue-using-stacks/|stack | use two stacks |
|<span id="225">225. 用队列实现栈</span>|https://leetcode-cn.com/problems/implement-stack-using-queues/|queue | use two queue, leave 1 element in main queue1  |
|<span id="20">20. 有效的括号</span>|https://leetcode-cn.com/problems/valid-parentheses/|stack | push open brackets to stack, return stack.length  |
|<span id="150">150. 逆波兰表达式求值</span>|https://leetcode-cn.com/problems/evaluate-reverse-polish-notation/|stack | push numbers to stack, calculate when math operations, push result to stack  |
|<span id="239">239. 滑动窗口最大值</span>|https://leetcode-cn.com/problems/sliding-window-maximum/| queue | [mono queue](./data-structure/queue/MonoQueue.js)  |
|<span id="347">347. 前 K 个高频元素</span>|https://leetcode-cn.com/problems/top-k-frequent-elements/| queue | [priority queue](./data-structure/queue/PriorityQueue.js)  |
|<span id="226">226. 翻转二叉树</span>|https://leetcode-cn.com/problems/invert-binary-tree/| recursive | swap node.left, node.right |