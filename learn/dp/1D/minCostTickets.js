// https://leetcode.com/problems/minimum-cost-for-tickets/

/**
 * @param {number[]} days
 * @param {number[]} costs
 * @return {number}
 */
var mincostTickets = function(days, costs) {
  
  const tickets = [[1, costs[0]], [7, costs[1]], [30, costs[2]]]
  const dp = Array(days.length + 1).fill(-1)
  dp[days.length] = 0

  const costCalculator = (i) => {
    if (dp[i] != -1) {
      return dp[i]
    }

    dp[i] = Infinity
    for (let j = 0; j < tickets.length; j++) {
      let [daysValid , cost] = tickets[j]
      let k = i
      while (k < days.length && (days[k] < days[i] + daysValid)) {
        k++
      }
      dp[i] = Math.min(dp[i], cost + costCalculator(k))
    }

    return dp[i]
  }

  return costCalculator(0)
};

const main = () => {
  days = [1,4,6,7,8,20], costs = [2,7,15]
  console.log('Min cost to plan for all the days are ', mincostTickets(days, costs))
}

main()