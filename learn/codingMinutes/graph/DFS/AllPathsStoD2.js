
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

const findWays = (n, edges, source, dest) => {
  const g = new Graph(true)

  for (const e of edges) {
    g.addEdge(e[0], e[1])
  }

  const result = []
  const visited = {}
  const DFS_Solver = (curr, path) => {
    if (curr == dest) {
      result.push([...path])
      return
    }
    for (const n of g.vertices[curr] || []) {
      if (!visited[n]) {
        // push in the path
        visited[n] = true
        path.push(n)
        DFS_Solver(n, path)

        // remove from the path
        visited[n] = false
        path.pop()
      }
    }
  }

  visited[source] = true
  const path = []
  path.push(source)
  DFS_Solver(source, path)

  return result
}

const main = () => {
  let edges = [[1, 2], [1, 3], [2, 3], [1, 4], [4, 5]]

  console.log('number of ways to reach the goal is ', findWays(5, edges, 1, 5))

  edges = [['JFK', 'SFO'], ['JFK', 'ATL'], ['SFO', 'ATL'], ['ATL', 'JFK'], ['ATL', 'SFO']]
  console.log('number of ways to reach the goal is ', findWays(3, edges, 'JFK', 'SFO'))
}

main()
