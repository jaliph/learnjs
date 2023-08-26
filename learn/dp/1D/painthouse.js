// https://www.lintcode.com/problem/515/
// https://leetcode.com/problems/paint-house/

export class Solution {
  /**
   * @param costs: n x 3 cost matrix
   * @return: An integer, the minimum cost to paint all houses
   */
  minCost(costs) {
    let dp = [0, 0, 0]
    let dp1, dp2, dp3
    for (let i = 0; i < costs.length; i++) {
      dp1 = costs[i][0] + Math.min(dp[1], dp[2])
      dp2 = costs[i][1] + Math.min(dp[0], dp[2])
      dp3 = costs[i][2] + Math.min(dp[0], dp[1])
      dp = [dp1, dp2, dp3]
    }
    return Math.min(...dp)
  }
}
