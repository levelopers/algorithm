const {Queue} = require('./Queue')


const queue = new Queue()
queue.enqueue(1)
queue.enqueue(2)
queue.enqueue(3)
console.log(queue.toArray());
queue.dequeue()
console.log(queue.toArray());