
class Graph {
  constructor ({ isDirected }) {
    this.vertices = {}
    this.isDirected = isDirected
  }

  size () {
    return Object.keys(this.vertices).length
  }

  addEdge (i, j) {
    if (this.isDirected) {
      this.vertices[i] = this.vertices[i] || []
      this.vertices[i].push(j)
    } else {
      this.vertices[i] = this.vertices[i] || []
      this.vertices[i].push(j)
      this.vertices[j] = this.vertices[j] || []
      this.vertices[j].push(i)
    }
  }
}

const findBackedge = (g) => {
  const visited = Array(g.size() + 1).fill(0)
  // 0 is not visited
  // 1 is visited and is in ancestore [in the stack]
  // 2 is visited but not in ancestors
  const DFS = (curr, par) => {
    visited[curr] = 1

    for (const child of g.vertices[curr]) {
      // not visited - parent is already visited
      if (visited[child] === 0) {
        DFS(child, curr)
      } else if (child != par && visited[child] == 1) {
        console.log(curr, ' --> ', child, ' is a backedge')
        // also denotes a cycle in a graph
      }
    }
    visited[curr] = 2
  }

  DFS(1, 0)
}

const main = () => {
  const g = new Graph({})
  g.addEdge(1, 2)
  g.addEdge(1, 3)
  g.addEdge(2, 3)
  g.addEdge(2, 4)
  g.addEdge(4, 5)
  g.addEdge(5, 6)
  g.addEdge(6, 7)
  g.addEdge(7, 4)

  console.log('All the backedges are ', findBackedge(g))
}

main()
