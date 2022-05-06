class DoublyLinkedListNode {
  constructor(val, pre, next) {
    this.value = val
    this.previous = pre
    this.next = next
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null
    this.tail = null
    this.size = 0
  }
  /**
   * insert to front
   * tc: O(1)
   */
  addFirst(val) {
    let node = new DoublyLinkedListNode(val)
    if(!this.head){
      this.head=node
      this.tail=node
    }else{
      node.next = this.head
      this.head.previous = node
      this.head=node
    }
    this.size++
    return this
  }
  /**
   * insert to rear
   * tc: O(1)
   */
  addLast(val) {
    let node = new DoublyLinkedListNode(val)
    if (!this.head) {
      this.head = node
      this.tail = node
    } else {
      node.previous = this.tail
      this.tail.next = node
      this.tail = node
    }
    this.size++
    return this
  }
  toArray() {
    let res = []
    let head = this.head
    while (head) {
      res.push(head.value)
      head = head.next
    }
    return res
  }
}

module.exports={
  DoublyLinkedList,
  DoublyLinkedListNode
}