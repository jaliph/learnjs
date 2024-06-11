// https://leetcode.com/problems/find-greatest-common-divisor-of-array/

/**
 * @param {number[]} nums
 * @return {number}
 */
const findGCD = function (nums) {
  const gcd = (a, b) => {
    if (b == 0) {
      return a
    }
    return gcd(b, a % b)
  }

  let min = Infinity
  let max = -Infinity
  for (const n of nums) {
    min = Math.min(n, min)
    max = Math.max(n, max)
  }

  return gcd(min, max)
}
