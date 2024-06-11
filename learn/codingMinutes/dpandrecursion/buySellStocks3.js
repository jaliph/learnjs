// https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iii/

/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = function (prices) {
  const maxProfitRecur = (i, buyFlag, k, prices, dp) => {
    // base case
    if (i === prices.length) return 0

    if (dp[i][buyFlag][k] !== -1) {
      return dp[i][buyFlag][k]
    }

    // recur
    // if i is nt chosen
    let ans = maxProfitRecur(i + 1, buyFlag, k, prices, dp)

    // k transaction are over, can't buy anymore
    if (k <= 0) return 0
    // - prices because we are buying
    if (buyFlag === 1) {
      // buying
      ans = Math.max(ans, -prices[i] + maxProfitRecur(i + 1, 0, k, prices, dp))
      // k can be reduced only when selling is done which completes 1 transaction
    } else {
      // selling
      ans = Math.max(ans, prices[i] + maxProfitRecur(i + 1, 1, k - 1, prices, dp))
    }
    dp[i][buyFlag][k] = ans
    return dp[i][buyFlag][k]
  }
  const dp = Array(prices.length + 1).fill(0).map(() => Array(2).fill(0).map(() => [...new Array(2 + 1)].fill(-1)))
  return maxProfitRecur(0, 1, 2, prices, dp)
}

const main = () => {
  prices = [3, 3, 5, 0, 0, 3, 1, 4]
  console.log('max profit from the prices are', maxProfit(prices))
}

main()
