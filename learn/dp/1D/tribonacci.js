// https://leetcode.com/problems/n-th-tribonacci-number/

/**
 * @param {number} n
 * @return {number}
 */
const tribonacci = function (n) {
  if (n <= 1) {
    return n
  }

  if (n == 2) {
    return 1
  }

  let prev3 = 0; let prev2 = 1; let prev1 = 1
  let temp
  for (let i = 3; i <= n; i++) {
    temp = prev1 + prev2 + prev3
    prev3 = prev2
    prev2 = prev1
    prev1 = temp
  }
  return prev1
}
