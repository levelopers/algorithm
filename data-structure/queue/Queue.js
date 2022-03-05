
// queue
const { LinkedList } = require('../linkedList/LinkedList')
/**
 * FIFO
 */
class Queue {
  constructor() {
    this.linkedList = new LinkedList()
  }
  // append to the end
  enqueue(val) {
    return this.linkedList.addLast(val)
  }
  //  shift from the front
  dequeue() {
    const head = this.linkedList.pollFirst()
    return head ? head.value : null
  }
  // return the front
  peek() {
    if (this.isEmpty()) {
      return null
    }
    return this.linkedList.head.value
  }

  isEmpty() {
    return !this.linkedList.head
  }

  toArray() {
    return this.linkedList.toArray().map(linkedListNode => linkedListNode.value)
  }
}

module.exports = {
  Queue
}
