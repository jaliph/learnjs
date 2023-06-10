
class Graph {
  constructor (isDirected) {
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

  size () {
    return Object.keys(this.vertices).length
  }
}

const topologicalApproach = (edges) => {
  const g = new Graph(true)

  for (const e of edges) {
    g.addEdge(e[0], e[1])
  }

  const inDegrees = Array(g.size() + 1).fill(0)

  for (const i in g.vertices) {
    for (const n of g.vertices[i]) {
      inDegrees[n]++
    }
  }

  const order = []
  const q = []

  for (const i in inDegrees) {
    if (inDegrees[i] == 0) {
      q.push(Number(i))
    }
  }

  // start BFS
  while (q.length > 0) {
    const curr = q.shift()
    order.push(curr)

    for (const n of g.vertices[curr] || []) {
      inDegrees[n]--

      if (inDegrees[n] == 0) {
        q.push(n)
      }
    }
  }

  return order
}

const main = () => {
  const edges = [[0, 2], [2, 3], [1, 4], [4, 5], [3, 5], [1, 2]]
  console.log('The topological ordering is ', topologicalApproach(edges))
}

main()
