const {Vertex} = require('./Vertex')
const {Edge} = require('./Edge')

/**
 *       1
 *    //   \
 *   2  --> 3
 *         /  \
 *        4    5
 */
console.log('--- graph test start ---');
const v_root = new Vertex(1)
const v_left = new Vertex(2)
const v_right = new Vertex(3)
const v_right_left = new Vertex(4)
const v_right_right = new Vertex(5)
const e_root_left = new Edge(v_root,v_left)
const e_root_right = new Edge(v_root,v_right)
const e_left_right = new Edge(v_left,v_right)
const e_left_root = new Edge(v_left,v_root)
const e_right_right_left = new Edge(v_right,v_right_left)
const e_right_right_right = new Edge(v_right,v_right_right)
v_root.addEdge(e_root_left)
v_root.addEdge(e_root_right)
console.log(v_root.neighbors.map(neighbor=>neighbor.getKey()));
v_left.addEdge(e_left_right)
v_left.addEdge(e_left_root)
console.log(v_left.neighbors.map(neighbor=>neighbor.getKey()));
v_right.addEdge(e_right_right_left)
v_right.addEdge(e_right_right_right)
console.log(v_right.neighbors.map(neighbor=>neighbor.getKey()));
console.log('--- graph test end ---');

module.exports = {
  root:v_root
}