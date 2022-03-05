const {Vertex} = require('./Vertex')
const {Edge} = require('./Edge')

const root = new Vertex(1)
const left = new Vertex(2)
const right = new Vertex(3)
const root_left = new Edge(root,left)
const root_right = new Edge(root,right)
const left_right = new Edge(left,right)
root.addEdge(root_left)
root.addEdge(root_right)
console.log(root.neighbors.map(neighbor=>neighbor.getKey()));
left.addEdge(left_right)
left.addEdge(root_left)
console.log(left.neighbors.map(neighbor=>neighbor.getKey()));
