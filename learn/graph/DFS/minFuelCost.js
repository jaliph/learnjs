// https://leetcode.com/problems/minimum-fuel-cost-to-report-to-the-capital/
/**
 * @param {number[][]} roads
 * @param {number} seats
 * @return {number}
 */
const minimumFuelCost = function (roads, seats) {
  const v = roads.length + 1
  const g = Array(v).fill().map(() => Array().fill([]))

  for (const r of roads) {
    g[r[0]].push(r[1])
    g[r[1]].push(r[0])
  }

  const dp = Array(v).fill(1)
  dp[0] = 0
  let fuel = 0
  const DFS_Helper = (curr, par) => {
    for (const n of g[curr]) {
      if (n != par) {
        DFS_Helper(n, curr)
        // console.log(curr, n)
        dp[curr] += dp[n]
      }
    }
    if (curr != 0) {
      // dp[curr] = Math.ceil(dp[curr] / seats)
      fuel += Math.ceil(dp[curr] / seats)
      // console.log(curr, dp[curr], fuel)
    }
  }

  DFS_Helper(0, -1)
  // console.log(dp)
  return fuel
}

const main = () => {
  roads = [[3, 1], [3, 2], [1, 0], [0, 4], [0, 5], [4, 6]], seats = 2
  console.log('min fuel cost to reach to 0 is ', minimumFuelCost(roads, seats))

  // roads = [[0,1],[0,2],[0,3]], seats = 5
  // console.log('min fuel cost to reach to 0 is ', minimumFuelCost(roads, seats))

  // roads = [[0, 1], [0, 2], [0, 3], [2, 4], [2, 5]], seats = 2
  // console.log('min fuel cost to reach to 0 is ', minimumFuelCost(roads, seats))
}

main()
