// https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iii/

/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = function (prices) {
  let d10 = 0
  let d11 = -Infinity
  let d20 = 0
  let d21 = -Infinity

  for (let i = 0; i < prices.length; i++) {
    d10 = Math.max(d10, d01 + prices[i])
    d11 = Math.max(d11, -prices[i])
    d20 = Math.max(d20, d21 + prices[i])
    d21 = Math.max(d21, d10 - prices[i])
  }

  return d20
}

const main = () => {
  prices = [7, 1, 5, 3, 6, 4]
  console.log('the max profit that can be made is ', maxProfit(prices))
  // console.log('the max profit that can be made is ', maxProfit2(prices))

  prices = [7, 6, 4, 3, 1]
  console.log('the max profit that can be made is ', maxProfit(prices))
  // console.log('the max profit that can be made is ', maxProfit2(prices))
}

main()
