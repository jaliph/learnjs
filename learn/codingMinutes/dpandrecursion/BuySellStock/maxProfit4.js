// https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iv/
/**
 * @param {number} k
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = function (k, prices) {
  if (k > (prices.length / 2)) {
    // i can consider k as infinity ..
    let dp00 = 0
    let dp01 = -Infinity

    for (let i = 0; i < prices.length; i++) {
      dp00 = Math.max(dp00, dp01 + prices[i])
      dp01 = Math.max(dp01, dp00 - prices[i])
    }
    return dp00
  } else {
    const dp = Array(prices.length).fill().map(() => Array(k + 1).fill().map(() => Array(2).fill(0)))

    // console.dir(dp)
    // dp[-1][k][0] = 0         dp[i][0][0] = 0
    // dp[-1][k][1] = -Inf      dp[i][0][1] = -Inf

    for (let i = 0; i < prices.length; i++) {
      for (let j = 0; j <= k; j++) {
        if (i - 1 == -1 || j - 1 == -1) {
          dp[i][j][0] = 0
          dp[i][j][1] = -prices[i]
          continue
        }
        dp[i][j][0] = Math.max(dp[i - 1][j][0], dp[i - 1][j][1] + prices[i])
        dp[i][j][1] = Math.max(dp[i - 1][j][1], dp[i - 1][j - 1][0] - prices[i])
      }
    }

    return dp[prices.length - 1][k][0]
  }
}

const main = () => {
  k = 2, prices = [3, 2, 6, 5, 0, 3]
  console.log('Max Profit is ', maxProfit(k, prices))

  k = 2, prices = [2, 4, 1]
  console.log('Max Profit is ', maxProfit(k, prices))

  k = 2, prices = [3, 3, 5, 0, 0, 3, 1, 4]
  console.log('Max Profit is ', maxProfit(k, prices))
}

main()
