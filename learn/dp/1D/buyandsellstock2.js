// https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/

/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = function (prices) {
  const dp = Array(prices.length).fill().map(() => Array(2).fill(-1))
  const maxProfitRecur = (i, buyFlag) => {
    // base
    if (i == prices.length) {
      return 0
    }

    // memoise
    if (dp[i][buyFlag] !== -1) {
      return dp[i][buyFlag]
    }

    // recur
    let ans = maxProfitRecur(i + 1, buyFlag)

    ans = Math.max(ans, -prices[i] + maxProfitRecur(i + 1, 1))
    if (buyFlag == 1) {
      ans = Math.max(ans, prices[i] + maxProfitRecur(i + 1, 0))
    }

    return dp[i][buyFlag] = ans
  }

  return maxProfitRecur(0, 0)
}

const maxProfit2 = function (prices) {
  const localMaxima = -Infinity
  const localMinima = Infinity

  let profit = 0
  let i = 0
  while (i < prices.length - 1) {
    while (i < prices.length - 1 && prices[i + 1] <= prices[i]) {
      i++
    }
    if (i == prices.length - 1) {
      break
    }
    profit -= prices[i++]

    while (i < prices.length && prices[i] >= prices[i - 1]) {
      i++
    }
    profit += prices[i - 1]
  }
  return profit
}

const main = () => {
  prices = [7, 1, 5, 3, 6, 4]
  console.log('The max profit generated is ', maxProfit(prices))
  console.log('The max profit generated is ', maxProfit2(prices))

  prices = [1, 2, 3, 4, 5]
  console.log('The max profit generated is ', maxProfit(prices))
  console.log('The max profit generated is ', maxProfit2(prices))
}

main()
