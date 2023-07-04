// https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-cooldown/

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  const dp = Array(prices.length).fill().map(() => Array(2).fill(0))

  dp[0][0] = 0
  dp[0][1] = -prices[0]
  let prev = 0  // dp[i - 2][1] .. prev to prev day stock in hand

  for (let i = 1; i < prices.length; i++) {
    let old = dp[i - 1][0]
    dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] + prices[i])
    dp[i][1] = Math.max(dp[i - 1][1], prev - prices[i])
    prev = old
  }
  
  return dp[prices.length - 1][0]
};


const main = () => {
   prices = [1,2,3,0,2]
  console.log('the max profit that can be made is ', maxProfit(prices))
  // console.log('the max profit that can be made is ', maxProfit2(prices))

  prices = [1]
  console.log('the max profit that can be made is ', maxProfit(prices))
  // console.log('the max profit that can be made is ', maxProfit2(prices))
}

main()