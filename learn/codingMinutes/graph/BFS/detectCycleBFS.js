// https://leetcode.com/problems/shortest-cycle-in-a-graph/

// /**
//  * @param {number} n
//  * @param {number[][]} edges
//  * @return {number}
//  */
var findCycleBFS = function(n, edges) {
  let g = Array(n).fill().map(() => Array().fill([]))

  let visited = []
  let parent = []

  for (let e of edges) {
    g[e[0]].push(e[1])
    g[e[1]].push(e[0])
  }

  let findCycle = (source, par) => {
    let q = []
    q.push(source)
    visited[source] = 1
    parent[source] = par

    while (q.length > 0) {
      let curr = q.shift()
      for (let n of g[curr]) {
        if (!visited[n]) {
          visited[n] = 1
          parent[n] = curr
          q.push(n)
        } else if (n != parent[curr]) {
          return true
        }
      }
    }
    return false
  }

  for (let i in g) {
    if (!visited[i]) {
      if (findCycle(Number(i), -1)) {
        return true
      }
    }
  }

  return false
};



const main = () => {
  n = 7, edges = [[0,1],[1,2],[2,0],[3,4],[4,5],[5,6],[6,3]]
  console.log('has cycle ', findCycleBFS(n, edges))

  n = 4, edges = [[0,1],[0,2]]
  console.log('has cycle ', findCycleBFS(n, edges))
}

main()
