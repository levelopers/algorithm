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

  get leftHeight(){
    if(!this.left){
      return 0
    }
    return this.left.height+1
  }

  get rightHeight(){
    if(!this.right){
      return 0
    }
    return this.right.height+1
  }

  get height(){
    return Math.max(this.leftHeight,this.rightHeight)
  }

  traverseInOrder(){
    let traverse=[]
    if(this.left){
      traverse = traverse.concat(this.left.traverseInOrder())
    }
    traverse.push(this.value)
    if(this.right){
      traverse = traverse.concat(this.right.traverseInOrder())
    }
    return traverse
  }
}

module.exports = {
  BinaryTreeNode
}