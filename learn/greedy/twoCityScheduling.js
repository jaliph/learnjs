/**
 * https://leetcode.com/problems/two-city-scheduling/
 * @param {number[][]} costs
 * @return {number}
 */
const twoCitySchedCost = function (costs) {
  for (const c of costs) {
    c.push(c[1] - c[0])
  }
  costs.sort((a, b) => a[2] - b[2])
  const half = (costs.length / 2)
  let totalCost = 0
  for (let i = 0; i < costs.length; i++) {
    if (i < half) {
      totalCost += costs[i][1]
    } else {
      totalCost += costs[i][0]
    }
  }

  return totalCost
}
