// https://leetcode.com/problems/min-cost-climbing-stairs/


/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
  const dp = Array(cost.length).fill(0)
  dp[0] = cost[0]
  dp[1] = cost[1]
  for (let i = 2; i < cost.length; i++) {
    dp[i] = cost[i] + Math.min(dp[i - 1], dp[i - 2])
  }
  console.log(dp)
  return Math.min(dp[cost.length - 1], dp[cost.length - 2])
};

const main = () => {
  cost = [1,100,1,1,1,100,1,1,100,1]
  console.log('min cost to reach the top is ..', minCostClimbingStairs(cost))

  cost = [10,15,20]
  console.log('min cost to reach the top is ..', minCostClimbingStairs(cost))
}

main()