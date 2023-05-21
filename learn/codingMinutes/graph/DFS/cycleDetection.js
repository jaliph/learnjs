
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

  detectCycle () {
    let visited = new Map()

    const DFS_Helper = (curr, parent) => {
      visited.set(curr, true)
      for (let n of this.vertices[curr]) {
        if (!visited.has(n)) {
          let subProb = DFS_Helper(n, curr)
          if (subProb) {
            return true
          }
        } else if (n != parent) {
          return true
        }
      }
      return false
    }

    return DFS_Helper(1, -1)
  }

  detectCycle2 () {
    let visited = new Map()

    const DFS_Helper = (curr, parent) => {
      visited.set(curr, 1)
      for (let n of this.vertices[curr]) {
        if (!visited.has(n)) {
          let subProb = DFS_Helper(n, curr)
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
  const g = new Graph()

  for (let e of edges) {
    g.addEdge(e[0], e[1])
  }

  console.log(g.detectCycle2())
  return g.detectCycle()
}




const main = () => {
  let edges = [[1,  2], [1, 3], [2, 3], [1,  4], [4, 5]]

  console.log(isCycle(edges))
}

main()