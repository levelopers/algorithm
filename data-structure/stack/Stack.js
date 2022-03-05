// stack

const { LinkedList } = require('../linkedList/LinkedList')
/**
 * LIFO
 */
class Stack {
  constructor() {
    this.linkedList = new LinkedList()
  }
  // add to front
  push(value) {
    return this.linkedList.addFirst(value)
  }

  // remove from front
  pop() {
    const head = this.linkedList.pollFirst()
    return head ? head.value : null
  }

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
  Stack
}