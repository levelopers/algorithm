// binary tree

/**
 * nodes have two children and one parent
 */
class BinaryTreeNode {
  constructor(value = null) {
    this.value = value
    this.left = null
    this.right = null
    this.parent = null
  }

  setLeft(node) {
    // detach left leaf
    if (this.left) {
      this.left = null
    }
    this.left = node
    // set current as left leaf parent
    if (this.left) {
      this.left.parent = this
    }
    return this
  }

  setRight(node) {
    // detach right leaf
    if (this.right) {
      this.right = null
    }
    this.right = node
    // set current as right leaf parent
    if (this.right) {
      this.right.parent = this
    }
    return this
  }

  get leftHeight() {
    if (!this.left) {
      return 0
    }
    return this.left.height + 1
  }

  get rightHeight() {
    if (!this.right) {
      return 0
    }
    return this.right.height + 1
  }

  get height() {
    return Math.max(this.leftHeight, this.rightHeight)
  }

  traverseInOrder() {
    let traverse = []
    if (this.left) {
      traverse = traverse.concat(this.left.traverseInOrder())
    }
    traverse.push(this.value)
    if (this.right) {
      traverse = traverse.concat(this.right.traverseInOrder())
    }
    return traverse
  }
  traversePreOrder() {
    let traverse = []
    traverse.push(this.value)
    if (this.left) {
      traverse = traverse.concat(this.left.traverseInOrder())
    }
    if (this.right) {
      traverse = traverse.concat(this.right.traverseInOrder())
    }
    return traverse
  }
  traversePostOrder() {
    let traverse = []
    if (this.left) {
      traverse = traverse.concat(this.left.traverseInOrder())
    }
    if (this.right) {
      traverse = traverse.concat(this.right.traverseInOrder())
    }
    traverse.push(this.value)
    return traverse
  }
  // bfs level order
  static generateTreeFromArray(arr) {
    return helper(arr, 0)
    function helper(arr, index) {
      if (index >= arr.length) return
      // remove branch if val is null
      if (!arr[index]) return null
      let cur = new Node(arr[index])
      cur.left = helper(arr, 2 * index + 1)
      cur.right = helper(arr, 2 * index + 2)
      return cur
    }
  }
}

module.exports = {
  BinaryTreeNode
}