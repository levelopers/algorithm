
class MonoQueue {
  constructor(comparator=(a,b)=>a-b){
    this.queue=[]
    this.comparator=comparator
  }
  enqueue(item){
    let rear=this.queue[this.size()-1]
    while(rear && this.comparator(rear,item)>0){
      this.queue.pop()
      rear=this.queue[this.size()-1]
    }
    this.queue.push(item)
  }
  dequeue(item){
    if(this.peek()==item){
      this.queue.shift()
    }
  }
  peek(){
    return this.queue[0]
  }
  toArray(){
    return this.queue
  }
  size(){
    return this.queue.length
  }
}

module.exports={
  MonoQueue
}
