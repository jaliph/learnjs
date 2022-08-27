
const Graph = require('./Graph.js');

let g = new Graph([0, 1, 2])
g.addEdge(0, 1)
g.addEdge(1, 2)
g.addEdge(2, 0)



const detectCycle = (g) => {
  
  let visited = Array(g.vertices.length).fill(false)
  let recorded = Array(g.vertices.length).fill(false)

  
  let detectCycleRecur = (g, i, vis, rec) => {
    if (vis[i] == false) {
      vis[i] = true
      rec[i] = true


      let curr = g.list[i].getHead()

      while (curr != null) {
        index = curr.data
        if ( !(vis[index]) && detectCycleRecur(g, index, vis, rec)) {
          return true
        } else if (rec[index]) {
          return true
        }
        curr = curr.next
      }
    }
    rec[i] = false
    return false
  }

  for (let i in g.list) {
    if (detectCycleRecur (g, i, visited, recorded)) {
      return true
    }
  }
      
  return false; 
}

const detectCycle_1 = (g, vertex, visited, parent) => {
  visited[vertex] = true
  
  let adjacent = g.list[vertex].getHead()
  while (adjacent != null) {
    let adj = adjacent.data
    if (!visited[adj]) {
      if (detectCycle_1(g, adj, visited, vertex)) {
        return true
      }
    } else if (adj != parent) {
      return true
    }
    adjacent = adjacent.next
  }
  return false
}

console.log(detectCycle(g))
console.log(detectCycle_1(g, g.vertices[0], [], -1))


g=new Graph([0, 1, 2, 3, 4, 5]);
g.addEdge(0, 1);
g.addEdge(1, 2);
g.addEdge(3, 4);
g.addEdge(4, 5);

g.printGraph()

console.log(detectCycle(g));
g.addEdge(5, 3);
console.log(detectCycle(g));