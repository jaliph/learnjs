
const subTreeSum = (n, edges) => {
  const g = Array(n + 1).fill().map(() => Array().fill())

  for (const e of edges) {
    g[e[0]].push(e[1])
    g[e[1]].push(e[0])
  }
  const sub = []
  const dp = []

  const DFS_Helper = (curr, par) => {
    sub[curr] = 1
    dp[curr] = 0
    for (const n of g[curr]) {
      if (n != par) {
        DFS_Helper(n, curr)
        dp[curr] += dp[n]
        sub[curr] += sub[n]
      }
    }
    dp[curr] += sub[curr]
  }

  let ans = 0
  const DFS_Adv = (curr, par) => {
    console.log(curr, ' has ', dp[curr])
    ans = Math.max(ans, dp[curr])

    for (const n of g[curr]) {
      if (n != par) {
        // remove n from curr
        dp[curr] -= dp[n]
        dp[curr] -= sub[n]
        sub[curr] -= sub[n]

        // add to n
        sub[n] += sub[curr]
        dp[n] += dp[curr]
        dp[n] += sub[curr]

        DFS_Adv(n, curr)

        dp[n] -= sub[curr]
        dp[n] -= dp[curr]
        sub[n] -= sub[curr]

        sub[curr] += sub[n]
        dp[curr] += sub[n]
        dp[curr] += dp[n]
      }
    }
  }

  DFS_Helper(1, 0)
  DFS_Adv(1, 0)
  return ans
}

const main = () => {
  n = 9

  edges = [
    [1, 2],
    [1, 3],
    [3, 4],
    [3, 5],
    [5, 6],
    [5, 9],
    [6, 7],
    [7, 8]
  ]

  console.log('subtree sum ', subTreeSum(n, edges))
}

main()
