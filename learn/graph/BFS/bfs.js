class Graph {
  constructor () {
    this.vertices = {}
    this.maxDegreeIndex = 0
  }

  addEdge (i, j, isDirected) {
    if (isDirected) {
      this.vertices[i] = this.vertices[i] || []
      this.vertices[i].push(j)
    } else {
      this.vertices[i] = this.vertices[i] || []
      this.vertices[j] = this.vertices[j] || []
      this.vertices[i].push(j)
      this.vertices[j].push(i)
    }
  }
}

const bfs = (g) => {
  const size = Object.keys(g.vertices).length
  const visited = {}

  const BFS = (v) => {
    const q = []
    visited[v] = true
    q.push(v)
    const s = []
    console.log('-------')
    while (q.length > 0) {
      const curr = q.shift()
      s.push(curr)
      for (const n of g.vertices[curr]) {
        if (!visited[n]) {
          visited[n] = true
          q.push(n)
        }
      }
    }
    console.log(s.join('->'))
    console.log('-------')
  }

  for (const v in g.vertices) {
    if (!visited[v]) {
      console.log('Start at ', v)
      BFS(v)
    }
  }
}

const main = () => {
  let g

  let edges = [[0, 1], [0, 3], [1, 2], [1, 3], [2, 3], [2, 4]]
  g = new Graph()
  for (const e of edges) {
    g.addEdge(e[0], e[1])
  }

  bfs(g)

  edges = [[0, 1], [1, 2], [2, 3], [2, 4], [5, 6], [5, 7]]
  g = new Graph()
  for (const e of edges) {
    g.addEdge(e[0], e[1])
  }

  bfs(g)

  edges = [[1, 2], [2, 3], [3, 4], [1, 0], [0, 4], [3, 5], [4, 5], [5, 6]]
  g = new Graph()
  for (const e of edges) {
    g.addEdge(e[0], e[1])
  }

  bfs(g)
}

main()
