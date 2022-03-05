
/**
 * graph edge: connection between vertex
 */
class Edge {
  constructor(startVertex,endVertex,weight=0){
    this.startVertex = startVertex
    this.endVertex = endVertex
    this.weight = weight
  }

  getKey(){
    return `${this.startVertex.getKey()}_${this.endVertex.getKey()}`
  }
}

module.exports = {
  Edge
}