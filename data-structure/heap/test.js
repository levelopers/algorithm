const {Heap}=require('./Heap')

const heap=new Heap((a,b)=>b-a)
heap.add(5)
console.log(heap);
heap.add(3)
console.log(heap);
heap.add(10)
console.log(heap);
heap.add(11)
console.log(heap);
heap.add(1)
console.log(heap);
heap.remove()
console.log(heap);
heap.remove()
console.log(heap);
heap.remove()
console.log(heap);
heap.remove()
console.log(heap);
heap.remove()
console.log(heap);
heap.remove()
console.log(heap);
