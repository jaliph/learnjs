// https://leetcode.com/problems/count-ways-to-build-good-strings/


/**
 * @param {number} low
 * @param {number} high
 * @param {number} zero
 * @param {number} one
 * @return {number}
 */
var countGoodStrings = function(low, high, zero, one) {
  const dp = Array(high + 1).fill(0)
  const MOD = 10**9 + 7 // must be a prime
  dp[0] = 1

  for (let i = 1; i <= high; i++) {
    dp[i] = ((dp[i - one] || 0) + (dp[i - zero] || 0)) % MOD
  }

  let sum = 0
  for (let i = low; i <= high; i++) {
    sum += dp[i]
    sum = sum % MOD
  }

  return sum
};

/**
 * @param {number} low
 * @param {number} high
 * @param {number} zero
 * @param {number} one
 * @return {number}
 */
var countGoodStringsBrute = function(low, high, zero, one) {
  const dp = {}
  let count = 0

  const MOD = 10**9 + 7 // must be a prime

  const addModulo = (a, b) => {
    return ((a % MOD) + (b % MOD)) % MOD
  }
  const makeString = (n) => {
    if (n > high) {
      return 0
    }

    if (dp[n]) {
      return dp[n]
    }

    let count = 0
    if (n >= low && n <= high) {
      count = addModulo(count, 1)
    }

    count = addModulo(count, makeString(n + zero))
    count = addModulo(count, makeString(n + one))
    return dp[n] = count
  }

  
  return makeString(0)
};

const main = () => {
  low = 3, high = 3, zero = 1, one = 1
  console.log('Count of max possible strings', countGoodStrings(low, high, zero, one))

  low = 2, high = 3, zero = 1, one = 2
  console.log('Count of max possible strings', countGoodStrings(low, high, zero, one))
}

main()