const { Queue } = require('./Queue')
const {MonoQueue} = require('./MonoQueue')
const { PriorityQueueByArray, PriorityQueueByHeap } = require('./PriorityQueue')

// queue by linkedList
const queue = new Queue()
queue.enqueue(1)
queue.enqueue(2)
queue.enqueue(3)
console.log(queue.toArray());
queue.dequeue()
console.log(queue.toArray());

// priority queue by array
const priorityQueueByArray = new PriorityQueueByArray()
priorityQueueByArray.add(3)
console.log(priorityQueueByArray.toArray());
priorityQueueByArray.add(2)
console.log(priorityQueueByArray.toArray());
priorityQueueByArray.add(4)
console.log(priorityQueueByArray.toArray());
priorityQueueByArray.remove()
console.log(priorityQueueByArray.toArray());

// priority queue by heap
const priorityQueueByHeap = new PriorityQueueByHeap()
priorityQueueByHeap.add(3)
console.log(priorityQueueByHeap.toArray());
priorityQueueByHeap.add(2)
console.log(priorityQueueByHeap.toArray());
priorityQueueByHeap.add(4)
console.log(priorityQueueByHeap.toArray());
priorityQueueByHeap.remove()
console.log(priorityQueueByHeap.toArray());

// monoQueue: queue in-order
console.log('monoQueue');
const monoQueue= new MonoQueue()
monoQueue.enqueue(2)
console.log(monoQueue.toArray());
monoQueue.enqueue(5)
console.log(monoQueue.toArray());
monoQueue.enqueue(10)
console.log(monoQueue.toArray());
monoQueue.enqueue(3)
console.log(monoQueue.toArray());