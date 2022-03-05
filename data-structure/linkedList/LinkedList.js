
// linkedlist
// queue
// stack
// hashTable
// tree
// graph

/**
 * good: easy to add and remove
 * bad: slow on accessing
 */
class LinkedListNode {
  constructor(value, next) {
    this.value = value
    this.next = next
  }
}

class LinkedList {
  constructor() {
    this.head = null
    this.tail = null
    this.size = 0
  }
  // prepend to head
  addFirst(value) {
    const newNode = new LinkedListNode(value, this.head)
    this.head = newNode
    if (!this.tail) {
      this.tail = newNode
    }
    this.size++
    return this
  }

  // append to tail
  addLast(value) {
    const newNode = new LinkedListNode(value, null)
    if (!this.head) {
      this.head = newNode
      this.tail = newNode
      this.size++
      return this
    }
    // append node to tail
    this.tail.next = newNode
    // move tail cursor to the end
    this.tail = this.tail.next
    this.size++
    return this
  }

  // remove head
  pollFirst() {
    const head = this.head
    if (this.head) {
      this.head = this.head.next
      this.size--
    } else {
      this.head = null
      this.tail = null
    }
    return head
  }

  // remove tail
  pollLast() {
    if (this.tail === null) {
      return null
    }
    const tail = this.tail
    // if there is only one node in the list
    if (this.head === this.tail) {
      this.head = null
      this.tail = null
      this.size--
      return tail
    }
    // if there are many node in the list
    let current = this.head
    while (current) {
      if (current.next.next === null) { // node before last node
        this.tail = current // position tail cursor
        current.next = null // remove tail
        this.size--
        return tail
      }
      current = current.next
    }
  }

  remove(value) {
    // if remove head
    if (!this.head || (this.head && (value === this.head.value))) {
      this.head = null
      this.tail = null
      return this.head
    }
    let current = this.head
    let deleteNode = null
    while (current.next) {
      if (current.next.value === value) {
        deleteNode = current.next
        // connect node to next next
        current.next = current.next.next
      } else {
        current = current.next
      }
    }
    return deleteNode
  }

  size() {
    return this.size
  }

  toArray() {
    let nodes = []
    let current = this.head
    while (current) {
      nodes.push(current)
      current = current.next
    }
    return nodes
  }
}
module.exports = {
  LinkedListNode,
  LinkedList
}

