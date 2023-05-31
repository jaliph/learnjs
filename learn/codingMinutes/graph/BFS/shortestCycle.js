// https://leetcode.com/problems/shortest-cycle-in-a-graph/

// /**
//  * @param {number} n
//  * @param {number[][]} edges
//  * @return {number}
//  */
var findShortestCycle = function(n, edges) {
  let g = Array(n).fill().map(() => Array().fill([]))

  let visited = []
  let parent = []

  for (let e of edges) {
    g[e[0]].push(e[1])
    g[e[1]].push(e[0])
  }

  let ans = Infinity

  let findCycle = (source, par) => {
    let distance = []
    let q = []
    q.push(source)
    visited[source] = 1
    distance[source] = 0
    parent[source] = par

    while (q.length > 0) {
      let curr = q.shift()
      for (let n of g[curr]) {
        if (!visited[n]) {
          distance[n] = distance[curr] + 1
          visited[n] = 1
          parent[n] = curr
          q.push(n)
        } else if (n != parent[curr] && curr != parent[n]) {
          ans = Math.min(ans, distance[n] + distance[curr] + 1)
        }
      }
    }
    // console.log(ans)
  }

  for (let i in g) {
    visited = []
    findCycle(Number(i), -1)
  }

  return ans == Infinity ? -1 : ans
};



const main = () => {
  n = 7, edges = [[0,1],[1,2],[2,0],[3,4],[4,5],[5,6],[6,3]]
  console.log('is shortest cycle ', findShortestCycle(n, edges))

  n = 4, edges = [[0,1],[0,2]]
  console.log('is shortest cycle ', findShortestCycle(n, edges))

  n = 8, edges = [[1,3],[3,5],[5,7],[7,1],[0,2],[2,4],[4,0],[6,0],[6,1]]
  console.log('is shortest cycle ', findShortestCycle(n, edges))

  n = 4, edges = [[1,2],[0,1],[3,2],[1,3]]
  console.log('is shortest cycle ', findShortestCycle(n, edges))
}

main()
