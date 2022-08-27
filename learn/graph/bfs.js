const Graph = require('./Graph.js');

g=new Graph([0, 1, 2, 3, 4, 5]);
g.addEdge(0, 1);
g.addEdge(1, 2);
g.addEdge(3, 4);
g.addEdge(4, 5);
g.addEdge(5, 3);

g.printGraph()

const BFS = (g, vertex) => {
  let queue = []
  let visited = Array(g.vertices.length).fill(false)

  visited[vertex] = true

  queue.push(vertex)

  while (queue.length > 0) {
    let currV = queue.shift()
    process.stdout.write(' ---> ' + currV  + ' ')      
    let adjacent = g.list[currV].getHead()
    while (adjacent != null) {
      if(!visited[adjacent.data]) {
        visited[adjacent.data] = true
        queue.push(adjacent.data)
      }
      adjacent = adjacent.next
    }
  }
}

BFS(g, 3, [])
console.log('')