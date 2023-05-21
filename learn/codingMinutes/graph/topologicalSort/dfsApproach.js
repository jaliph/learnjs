
class Graph{
  constructor(isDirected) {
    this.vertices = {}
    this.isDirected = isDirected
  }

  addEdge (i, j) {
    if (this.vertices[i]) {
      this.vertices[i].push(j)
    } else {
      this.vertices[i] = [j]
    }

    if (!this.isDirected) {
      if (this.vertices[j]) {
        this.vertices[j].push(i)
      } else {
        this.vertices[j] = [i]
      }
    }
  }
  
  size() {
    return Object.keys(this.vertices).length
  }
}

const topologicalApproach = (edges) => {
  let g = new Graph(true)

  for (let e of edges) {
    g.addEdge(e[0], e[1])
  }

  const visited = {}
  const ordering = []

  const DFS_Explorer = (curr) => {
    visited[curr] = 1

    for (let n of g.vertices[curr] || []) {
      if (!visited[n]) {
        DFS_Explorer(n)
      }
    }
    ordering.push(curr)
  }

  for (let i in g.vertices) {
    i = Number(i)
    if (!visited[i]) {
      DFS_Explorer(i)
    }
  }

  return ordering.reverse()
}

const main = () => {
  const edges = [[0, 2], [2, 3], [1, 4], [4, 5], [3, 5], [1, 2]]
  console.log('The topological ordering is ', topologicalApproach(edges))
}

main()