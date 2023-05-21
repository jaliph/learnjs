

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
}


const shortestCycle = (edges) => {
  
  const g = new Graph()
  for (let e of edges) {
    g.addEdge(e[0], e[1])
  }

  // console.log(g)

  let ans = Infinity
  
  let visited
  let depth
  const cycleLength = (curr, parent) => {
    visited[curr] = 1
    console.log('visiting ', curr)
    depth[curr] = (depth[parent] == undefined ? -1 : depth[parent] ) + 1
    for (let n of g.vertices[curr]) {
      if (!visited[n]) {
        cycleLength(n, curr)
      } else if (n != parent && visited[n] == 1) {
        console.log('backedge', n, curr)
        console.log('loop cycle here is ', depth[curr] + depth[n] + 1)
        ans = Math.min(ans, Math.abs(depth[curr] - depth[n]) + 1)
      }
    }
    visited[curr] = 2
  }


  // for (let i in g.vertices) {
    visited = {}
    depth = Array(Object.keys(g.vertices).length + 1).fill(0)
    cycleLength(3, -1)
  // }
  console.log(depth)
  return ans
}

const main = () => {
  // let edges = [[0,1],[1,2],[2,0],[3,4],[4,5],[5,6],[6,3]]

  // console.log('the shortest cycle is ', shortestCycle(edges))


  // edges = [[1,2],[0,1],[3,2],[1,3]]
  // console.log('the shortest cycle is ', shortestCycle(edges))

  // edges = [[0,1],[1,2],[2,3],[3,4],[4,5],[0,7],[0,6],[5,7],[5,6]]
  // console.log('the shortest cycle is ', shortestCycle(edges))

  edges = [[4,5],[1,6],[6,4],[5,3],[3,6],[0,2],[5,8],[0,6],[3,0],[6,8],[2,8],[1,2]]
  console.log('the shortest cycle is ', shortestCycle(edges))
}

main()