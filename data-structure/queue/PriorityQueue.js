const { Heap } = require('../heap/Heap')

class PriorityQueueByArray {
	constructor(comparator = (a, b) => a - b) {
		this.comparator = comparator
		this.array = []
	}
	/**
	 * time complexity: O(n log n)
	 * @param {*} value 
	 */
	add(value) {
		this.array.push(value)
		this.array.sort(this.comparator)
	}
	/**
	 * time complexity: O(1)
	 */
	remove() {
		if (!this.size()) return
		return this.array.shift()
	}
	size() {
		return this.array.length
	}
	toArray() {
		return this.array
	}
}

class PriorityQueueByHeap {
	constructor(comparator = (a, b) => a - b) {
		this.comparator = comparator
		this.heap = new Heap(this.comparator)
	}
	/**
	 * O(logn)
	 * @param {*} item 
	 * @returns 
	 */
	add(item) {
		this.heap.add(item)
		return this
	}
	/**
	 * O(logn)
	 * @param {*} startIndex 
	 * @returns 
	 */
	remove(startIndex = 0) {
		return this.heap.remove(startIndex)
	}
	/**
	 * O(1)
	 * @returns 
	 */
	peek() {
		return this.heap.peek()
	}
	size() {
		return this.heap.size()
	}
	toArray() {
		return this.heap.toArray()
	}
}

module.exports = {
	PriorityQueueByArray,
	PriorityQueueByHeap
}

