/**
 * https://leetcode.com/problems/gas-station/
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
const canCompleteCircuit = function (gas, cost) {
  const totalGas = gas.reduce((prev, curr) => curr + prev, 0)
  const totalCost = cost.reduce((prev, curr) => curr + prev, 0)

  if (totalGas < totalCost) {
    return -1
  }

  let start = 0
  let total = 0
  for (let i = 0; i < gas.length; i++) {
    total = total + (gas[i] - cost[i])
    if (total < 0) {
      total = 0
      start = i + 1
    }
  }

  return start
}
