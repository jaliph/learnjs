// https://leetcode.com/problems/climbing-stairs

/**
 * @param {number} n
 * @return {number}
 */
const climbStairs = function (n) {
  let prev1 = 0
  let prev2 = 1

  let sum = 0
  for (let i = 0; i <= n; i++) {
    sum = prev1 + prev2
    prev2 = prev1
    prev1 = sum
  }

  return sum
}
