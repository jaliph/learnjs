/**
 * https://leetcode.com/problems/minimum-cost-to-cut-a-stick/
 * @param {number} n
 * @param {number[]} cuts
 * @return {number}
 */
const minCost = function (n, cuts) {
  const dp = new Map()
  const costRecur = (l, r) => {
    if (r - l == 1) {
      return 0
    }

    const key = `${l}%${r}`
    if (dp.has(key)) {
      return dp.get(key)
    }

    let cost = Infinity
    for (const c of cuts) {
      if (l < c && c < r) {
        cost = Math.min(cost, (r - l) + costRecur(l, c) + costRecur(c, r))
      }
    }
    dp.set(key, cost == Infinity ? 0 : cost)
    return dp.get(key)
  }

  return costRecur(0, n)
}
