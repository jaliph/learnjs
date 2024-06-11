
const vertexCover = (n, edges) => {
  const g = Array(n + 1).fill().map(() => Array().fill([]))

  for (const e of edges) {
    g[e[0]].push(e[1])
    g[e[1]].push(e[0])
  }

  const dp = Array(n + 1).fill().map(() => Array(2).fill(0))

  const DFS_Solver = (curr, par) => {
    dp[curr][0] = 0
    dp[curr][1] = 1
    for (const n of g[curr]) {
      if (n != par) {
        DFS_Solver(n, curr)
        dp[curr][0] += dp[n][1]
        dp[curr][1] += Math.min(dp[n][0], dp[n][1])
      }
    }
  }
  DFS_Solver(2, 0)
  return Math.min(dp[2][0], dp[2][1])
}

const main = () => {
  n = 7
  edges = [
    [1, 2],
    [1, 3],
    [1, 4],
    [2, 5],
    [3, 6],
    [4, 7]
  ]

  console.log('Vertex cover is ', vertexCover(n, edges))
}

main()
