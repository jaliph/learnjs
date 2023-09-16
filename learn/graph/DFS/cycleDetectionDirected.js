
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

  detectCycle () {
    const visited = new Map()

    const DFS_Helper = (curr, parent) => {
      visited.set(curr, 1)
      for (const n of this.vertices[curr] || []) {
        if (!visited.has(n)) {
          const subProb = DFS_Helper(n, curr)
          if (subProb) {
            return true
          }
        } else if (n != parent && visited.get(n) == 1) {
          // backedge
          return true
        }
      }
      visited[curr] = 2
      return false
    }

    return DFS_Helper(1, -1)
  }
}

const isCycle = (edges) => {
  const g = new Graph(true)

  for (const e of edges) {
    g.addEdge(e[0], e[1])
  }

  return g.detectCycle()
}

const main = () => {
  const edges = [[1, 2], [1, 3], [2, 3], [1, 4], [4, 5]]

  console.log(isCycle(edges))
}

main()
