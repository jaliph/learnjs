// https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-transaction-fee/

/**
 * @param {number[]} prices
 * @param {number} fee
 * @return {number}
 */
var maxProfit = function(prices, fee) {
  const dp = Array(prices.length).fill().map(() => Array(2).fill(0))
  dp[0][0] = 0
  dp[0][1] = -prices[0] - fee

  for (let i = 1; i < prices.length; i++) {
    dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] + prices[i])
    dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][0] - prices[i] - fee)  // check here   $(0 . 0)$
  }

  return dp[prices.length - 1][0]
}

var maxProfit2 = function(prices, fee) {
  let d00 = 0
  let d01 = -Infinity

  for (let i = 0; i < prices.length; i++) {
    d00 = Math.max(d00, d01 + prices[i])
    d01 = Math.max(d01, d00 - prices[i] - fee)  // check here   $(0 . 0)$
  }

  return d00
}


const main = () => {
  prices = [1,3,2,8,4,9], fee = 2
  console.log('the max profit that can be made is ', maxProfit(prices, fee))
  console.log('the max profit that can be made is ', maxProfit2(prices, fee))

  prices = [1,3,7,5,10,3], fee = 3
  console.log('the max profit that can be made is ', maxProfit(prices, fee))
  console.log('the max profit that can be made is ', maxProfit2(prices, fee))
}


main()