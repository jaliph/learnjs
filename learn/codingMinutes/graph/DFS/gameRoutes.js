/*
Game Routes

A game has n levels numbered 1 to n, connected by some teleporters. Your task is to get from level 1 to level n.

You are given an array teleporters  where teleporters[i]= [ui, vi]  is a directed edge from level ui to level  vi .

The game has been designed so that there are no directed cycles in the underlying graph.

Return in how many ways you can complete the game. Since, the result may be large, print it modulo 10^9 + 7 .

Constraints:

    1<= n <= 10^5

    1<= teleporters.length <= 10^5

    1<= ui, vi <= n

    Input : n = 5, teleporters = {{1,  2}, {1, 3}, {2, 3}, {1,  4}, {4, 5}}
    Output : 1


Expected Time Complexity: O(n+ E), where E represents number of edges.
*/



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

const findWays = (n, edges, source, dest) => {
  const g = new Graph(true)

  for (let e of edges) {
    g.addEdge(e[0], e[1])
  }

  let ways = 0
  const visited = {}
  const DFS_Solver = (curr) => {
    if (curr == dest) {
      ways++
    }
    // console.log('Visiting', curr)
    for (let n of g.vertices[curr] || []) {
      if (!visited[n]) {
        visited[n] = true
        DFS_Solver(n)
        visited[n] = false
      }
    }
  }

  visited[source] = true
  DFS_Solver(source)

  return ways
}

const main = () => {
  let edges = [[1,  2], [1, 3], [2, 3], [1, 4], [4, 5]]

  console.log('number of ways to reach the goal is ', findWays(5, edges, 1, 5))

  edges = [["JFK","SFO"],["JFK","ATL"],["SFO","ATL"],["ATL","JFK"],["ATL","SFO"]]
  console.log('number of ways to reach the goal is ', findWays(3, edges, "JFK", "SFO"))
}

main()