
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

const DFS_1 = (g) => {
  const size = Object.keys(g.vertices).length

  const visited = Array(size + 1).fill(false)

  const v = Object.keys(g.vertices)[0]

  const q = []
  visited[v] = true
  q.push(v)

  while (q.length > 0) {
    const curr = q.pop()
    console.log('visiting ', curr)
    for (const n of g.vertices[curr]) {
      if (!visited[n]) {
        visited[n] = true
        q.push(n)
      }
    }
  }
}

const DFS_2 = (g) => {
  const size = Object.keys(g.vertices).length

  const visited = Array(size + 1).fill(false)

  const v = Object.keys(g.vertices)[0]

  const DFS_Helper = (curr, visited) => {
    visited[curr] = true
    console.log('traversing ', curr)
    for (const n of g.vertices[curr]) {
      if (!visited[n]) {
        visited[n] = true
        DFS_Helper(n, visited)
      }
    }
  }

  DFS_Helper(v, visited)
}

const main = () => {
  let g = new Graph()

  const edges = [[1, 2], [2, 3], [3, 4], [0, 4], [1, 0], [3, 5], [4, 5], [5, 6]]
  g = new Graph()
  for (const e of edges) {
    g.addEdge(e[0], e[1])
  }

  DFS_1(g)

  DFS_2(g)
}

main()
