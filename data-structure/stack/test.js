const {Stack} = require('./Stack')

const stack = new Stack()
stack.push(1)
stack.push(2)
stack.push(3)
console.log(stack.toArray());
stack.pop()
console.log(stack.toArray());
