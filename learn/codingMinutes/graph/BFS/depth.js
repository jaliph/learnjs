

class Graph {
  constructor() {
    this.vertices = {}
    this.maxDegreeIndex = 0
  }

  addEdge(i, j, isDirected) {
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
  let visited = {}
  const depth = Array(size + 1).fill(0)
  const parent = Array(size + 1).fill(-1)

  const BFS = (source, dest) => {
    let q = []
    visited[source] = true
    depth[source] = 0
    parent[source] = source
    q.push(source)
    let s = []
    while (q.length > 0) {
      let curr = q.shift()
      s.push(curr)
      for (let n of g.vertices[curr]) {
        if (!visited[n]) {
          visited[n] = true
          q.push(n)
          depth[n] = depth[curr] + 1
          parent[n] = curr
        }
      }
    }
    console.log(s.join('->'))
    console.log(depth)


    // Path to source to destination
    let temp = dest
    let path = []
    while (temp != source) {
      path.unshift(temp)
      temp = parent[temp]
    }
    path.unshift(source)

    console.log(path.join('->'))
  }

  BFS(1, 6)

  // for (let v in g.vertices) {
  //   if (!visited[v]) {
  //     console.log('Start at ', v)
  //     BFS(v)
  //   }
  // }
}



const main = () => {
  let g

  edges = [[1, 2], [2, 3], [3, 4], [1, 0], [0, 4], [3, 5], [4, 5], [5, 6]]
  g = new Graph()
  for (let e of edges) {
    g.addEdge(e[0], e[1])
  }

  bfs(g)
}

main()