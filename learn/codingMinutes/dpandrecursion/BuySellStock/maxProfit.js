// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  const dp = Array(prices.length).fill().map(() => Array(2).fill(0))
  dp[0][0] = 0
  dp[0][1] = -prices[0]

  for (let i = 1; i < prices.length; i++) {
    dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] + prices[i])
    dp[i][1] = Math.max(dp[i - 1][1], - prices[i])
  }

  return dp[prices.length - 1][0]
};


var maxProfit2 = function(prices) {
  let dp00 = 0
  let dp01 = -Infinity

  for (let i = 0; i < prices.length; i++) {
    dp00 = Math.max(dp00, dp01 + prices[i])
    dp01 = Math.max(dp01, -prices[i])
  }

  return dp00
}

const main = () => {
  prices = [7,1,5,3,6,4]
  console.log('the max profit that can be made is ', maxProfit(prices))
  console.log('the max profit that can be made is ', maxProfit2(prices))

  prices = [7,6,4,3,1]
  console.log('the max profit that can be made is ', maxProfit(prices))
  console.log('the max profit that can be made is ', maxProfit2(prices))
}

main()

