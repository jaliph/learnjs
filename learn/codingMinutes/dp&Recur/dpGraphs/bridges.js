
// find articulation and bridges

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
  let time = 1
  const discoveryTime = Array(g.size() + 1).fill(0)
  const lowestTime = Array(g.size() + 1).fill(0)
  const bridges = []
  const articulationPoints = new Set()
  const DFS = (curr, par) => {
    visited[curr] = 1
    discoveryTime[curr] = lowestTime[curr] = time++

    for (const child of g.vertices[curr]) {
      if (visited[child] == 0) {
        DFS(child, curr)
        lowestTime[curr] = Math.min(lowestTime[curr], lowestTime[child])

        // bridges
        if (lowestTime[child] > discoveryTime[curr]) {
          bridges.push(curr + ' -- ' + child)
        }

        // articulation Points
        if (par != 0 && lowestTime[child] >= discoveryTime[curr]) {
          articulationPoints.add(curr)
        }
      } else if (child != par && visited[child] == 1) {
        // backedge
        lowestTime[curr] = Math.min(lowestTime[curr], discoveryTime[child])
      }
    }
    visited[curr] = 2
  }

  DFS(1, 0)

  console.log('Articulation Points -> ', articulationPoints)
  console.log('Bridges -> ', bridges)
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

  findBackedge(g)
}

main()
