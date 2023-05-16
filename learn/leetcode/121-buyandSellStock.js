// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/

/**
* @param {number[]} prices
* @return {number}
*/
const maxProfit = function (prices) {
  let minPrice = Infinity
  let profit = 0
  for (const price of prices) {
    minPrice = Math.min(minPrice, price)
    profit = Math.max(profit, price - minPrice)
  }
}
