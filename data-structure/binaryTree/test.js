
const {BinaryTreeNode} = require('./BinaryTreeNode')

const root = new BinaryTreeNode(1)
const left  =new BinaryTreeNode(2)
const right  =new BinaryTreeNode(3)
const left_right  =new BinaryTreeNode(4)
const left_right_left = new BinaryTreeNode(5)
const right_left  =new BinaryTreeNode(6)
root.setLeft(left)
left.setRight(left_right)
left_right.setLeft(left_right_left)
root.setRight(right)
right.setLeft(right_left)

console.log(root.traverseInOrder());

console.log('left_right parent: ',left_right.parent.value);
console.log('left parent: ',left.parent.value);

console.log('left height: ',root.left.height);
console.log('right height: ',root.right.height);
console.log('root height: ',root.height);