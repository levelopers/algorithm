const {LinkedList} = require('./LinkedList')


const linkedList = new LinkedList()
linkedList.addFirst(3)
linkedList.addFirst(2)
linkedList.addFirst(1)
console.log('addFirst 3,2,1: ',linkedList.toArray().map(node=>node.value));
linkedList.addLast(4)
console.log('addLast 4: ',linkedList.toArray().map(node=>node.value));
console.log('remove 4: ',linkedList.remove(4));
console.log('after remove 4: ',linkedList.toArray().map(node=>node.value));
linkedList.pollFirst()
console.log('pollFirst: ',linkedList.toArray().map(node=>node.value));
linkedList.pollLast()
console.log('pollLast: ',linkedList.toArray().map(node=>node.value));

