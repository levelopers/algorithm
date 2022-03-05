
const { LinkedList } = require('../linkedList/LinkedList')

/**
 * Vertex: graph nodes connected with edges
 */
class Vertex {

  constructor(value) {
    this.value = value
    this.edges = new LinkedList()
  }

  addEdge(edge) {
    this.edges.addLast(edge)
    return this
  }

  removeEdge(edge) {
    this.edges.remove(edge)
    return this
  }

  get neighbors() {
    const edges = this.edges.toArray()
    return edges.map(node => node.value.startVertex === this ? node.value.endVertex : node.value.startVertex)
  }

  getKey() {
    return this.value
  }
}

module.exports = {
  Vertex
}