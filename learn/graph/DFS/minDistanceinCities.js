// https://leetcode.com/problems/minimum-score-of-a-path-between-two-cities/

/**
 * @param {number} n
 * @param {number[][]} roads
 * @return {number}
 */
const minScore = function (n, roads) {
  const g = Array(n + 1).fill().map(() => Array().fill())

  for (const e of roads) {
    g[e[0]].push([e[1], e[2]])
    g[e[1]].push([e[0], e[2]])
  }

  console.log(g)

  let ans = Infinity
  const visited = []
  const DFS_Helper = (curr) => {
    visited[curr] = true
    for (const neigh of g[curr]) {
      const [n, w] = neigh
      ans = Math.min(ans, w)
      if (!visited[n]) {
        DFS_Helper(n)
      }
    }
  }

  DFS_Helper(1)
  return ans
}

const main = () => {
  n = 4, roads = [[1, 2, 9], [2, 3, 6], [2, 4, 5], [1, 4, 7]]
  console.log('The min distance is ', minScore(n, roads))

  n = 4, roads = [[1, 2, 2], [1, 3, 4], [3, 4, 7]]
  console.log('The min distance is ', minScore(n, roads))
}

main()
