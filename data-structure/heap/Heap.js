class Heap {
  constructor(comparator = (a, b) => a - b) {
    this.array = []
    this.comparator = comparator
  }
  /**
   * O(logn)
   * @param {*} item 
   * @returns 
   */
  add(item) {
    this.array.push(item)
    this.heapifyUp()
    return this
  }
  /**
   * O(logn)
   */
  remove(index = 0) {
    if (!this.size()) return null
    this.swap(index,this.array.length-1)
    const value = this.array.pop()
    this.heapifyDown(index)
    return value
  }
  /**
   * O(1)
   * @returns item
   */
  peek() {
    if (!this.size()) return null
    return this.array[0]
  }
  getLeftChildIndex(parentIndex) {
    return (2 * parentIndex) + 1
  }
  getRightChildIndex(parentIndex) {
    return (2 * parentIndex) + 2
  }
  getParentIndex(childIndex) {
    return Math.floor((childIndex - 1) / 2)
  }
  leftChild(parentIndex) {
    return this.array[this.getLeftChildIndex(parentIndex)]
  }
  rightChild(parentIndex) {
    return this.array[this.getRightChildIndex(parentIndex)]
  }
  parent(childIndex) {
    return this.array[this.getParentIndex(childIndex)]
  }
  heapifyUp() {
    let currentIndex = this.array.length - 1
    while (this.getParentIndex(currentIndex) >= 0
      && this.compareByIndex(this.getParentIndex(currentIndex), currentIndex) > 0) {
      this.swap(this.getParentIndex(currentIndex), currentIndex)
      currentIndex = this.getParentIndex(currentIndex)
    }
  }
  heapifyDown(startIndex) {
    let curr = startIndex;
    let nextIndex
    while (this.getLeftChildIndex(curr) < this.size()) {
      // find top node
      if (this.getRightChildIndex(curr) < this.size()
        && this.compareByIndex(this.getLeftChildIndex(curr), this.getRightChildIndex(curr)) > 0) {
        nextIndex = this.getRightChildIndex(curr)
      } else {
        nextIndex = this.getLeftChildIndex(curr)
      }
      // compare top node with current
      if (this.compareByIndex(nextIndex, curr) > 0) {
        break;
      }
      this.swap(curr, nextIndex)
      curr = nextIndex
    }
  }
  compareByIndex(indexOne, indexTwo) {
    return this.comparator(this.array[indexOne], this.array[indexTwo])
  }
  swap(indexOne, indexTwo) {
    const temp = this.array[indexOne]
    this.array[indexOne] = this.array[indexTwo]
    this.array[indexTwo] = temp
  }
  size() {
    return this.array.length
  }
  toArray() {
    return this.array
  }
}

module.exports = {
  Heap
}