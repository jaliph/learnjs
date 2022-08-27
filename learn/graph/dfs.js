const Graph = require('./Graph.js');

g=new Graph([0, 1, 2, 3, 4, 5]);
g.addEdge(0, 1);
g.addEdge(1, 2);
g.addEdge(3, 4);
g.addEdge(4, 5);
g.addEdge(5, 3);

g.printGraph()




const DFS = (g, vertex, visited) => {
  visited[vertex] = true
  process.stdout.write(' ---> ' + vertex  + ' ')      
  let adjacent = g.list[vertex].getHead()
  while (adjacent != null) {
    if (!visited[adjacent.data]) {
      DFS(g, adjacent.data, visited)
    }
    adjacent = adjacent.next
  }
}

const DFS_1 = (g, vertex) => {
  let stack = []
  let visited = Array(g.vertices.length).fill(false)

  visited[vertex] = true

  stack.push(vertex)

  while (stack.length > 0) {
    let currV = stack.pop()
    process.stdout.write(' ---> ' + currV  + ' ')      
    let adjacent = g.list[currV].getHead()
    while (adjacent != null) {
      if(!visited[adjacent.data]) {
        visited[adjacent.data] = true
        stack.push(adjacent.data)
      }
      adjacent = adjacent.next
    }
  }
}

DFS(g, 3, [])
console.log('')
DFS_1(g, 3)

// g = new Graph([0, 1, 2])
// g.addEdge(0, 1)
// g.addEdge(1, 2)
// g.addEdge(2, 0)

// DFS(g, 1, [])
// console.log('')
// DFS_1(g, 1)