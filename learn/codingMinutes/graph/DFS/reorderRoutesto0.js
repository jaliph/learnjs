// https://leetcode.com/problems/reorder-routes-to-make-all-paths-lead-to-the-city-zero/

/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number}
 */
var minReorder = function(n, connections) {
  const g = Array(n).fill().map(() => Array().fill())


  for (let e of connections) {
    g[e[0]].push([e[1], true]) // count for forwared edge from 0 to outwards
    g[e[1]].push([e[0], false])
  }

  let visited = []
  let reorder = 0
  const DFS_Helper = (curr) => {
    visited[curr] = true
    for (let n of g[curr]) {
      let [neigh, direction] = n
      if (!visited[neigh]) {
        if (direction) {
          console.log(curr, ' --> ', neigh)
          reorder++
        }
        DFS_Helper(neigh)
      }
    }
  }

  DFS_Helper(0) // start from 0 and try to reach all the verticies
  return reorder
};


const main = () => {
  n = 6, connections = [[0,1],[1,3],[2,3],[4,0],[4,5]]
  console.log('minimum road swaps are', minReorder(n, connections))

  n = 5, connections = [[1,0],[1,2],[3,2],[3,4]]
  console.log('minimum road swaps are', minReorder(n, connections))
}

main()