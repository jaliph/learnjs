class Graph {
  constructor (vertices) {
    this.noOfVertices = vertices
    this.edges = new Map()
  }

  addVertex (v) {
    this.edges.set(v, [])
  }

  addEdge (v, w) {
    this.edges.get(v).push(w)
    // this.edges.get(w).push(v)
  }

  printGraph () {
    for (const i of this.edges.keys()) {
      console.log(i, ' -> ', this.edges.get(i))
    }
  }

  bfs (startingNode) {
    const q = []
    q.push(startingNode)
    const visitMap = {}
    visitMap[startingNode] = true
    while (q.length !== 0) {
      const currentVertex = q.shift()
      console.log('BFS Visiting -> ', currentVertex)
      for (const i of this.edges.get(currentVertex)) {
        if (!visitMap[i]) {
          visitMap[i] = true
          q.push(i)
        }
      }
    }
  }

  dfs (startingNode) {
    const visitMap = []
    this.DFSutil(startingNode, visitMap)
  }

  DFSutil (currentVertex, map) {
    map[currentVertex] = true
    for (const i of this.edges.get(currentVertex)) {
      if (!map[i]) {
        map[i] = true
        this.DFSutil(i, map)
      }
    }
  }

  FindMother () {
    let visited = {}
    let v
    for (const i of this.edges.keys()) {
      if (!visited[i]) {
        this.DFSutil(i, visited)
        v = i
      }
    }
    visited = {}
    this.DFSutil(v, visited)
    console.dir(Object.keys(visited) === this.noOfVertices) // Check this
  }
}

const g = new Graph(6)
const vertices = ['0', '1', '2', '3', '4', '5', '6']

for (let i = 0; i < vertices.length; i++) {
  g.addVertex(vertices[i])
}

g.addEdge('0', '1')
g.addEdge('0', '2')
g.addEdge('1', '3')
g.addEdge('4', '1')
g.addEdge('6', '4')
g.addEdge('5', '6')
g.addEdge('5', '2')
g.addEdge('6', '0')

// g.addEdge('A', 'B')
// g.addEdge('A', 'D')
// g.addEdge('A', 'E')
// g.addEdge('B', 'C')
// g.addEdge('D', 'E')
// g.addEdge('E', 'F')
// g.addEdge('E', 'C')
// g.addEdge('C', 'F')

g.printGraph()

// g.bfs('A')
g.FindMother()
