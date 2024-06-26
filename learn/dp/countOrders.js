/**
 * https://leetcode.com/problems/count-all-valid-pickup-and-delivery-options
 * @param {number} n
 * @return {number}
 */
const countOrders = function (n) {
  const MOD = 10 ** 9 + 7
  let count = 1
  for (let i = 2; i <= n; i++) {
    count = count * ((2 * i - 1) * i) % MOD
  }

  return count
}
