
// https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iv/

/**
 * @param {number} k
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = function (k, prices) {
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
  const dp = Array(prices.length + 1).fill(0).map(() => Array(2).fill(0).map(() => [...new Array(k + 1)].fill(-1)))
  return maxProfitRecur(0, 1, k, prices, dp)
}

const main = () => {
  const prices = [2, 4, 1]
  const k = 2
  console.log('The max profits, that can be made is ', maxProfit(k, prices))
  console.log('The max profits, that can be made is ', maxProfit(2, [1, 2, 4]))
}

main()
