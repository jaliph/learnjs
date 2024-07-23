/**
 * https://leetcode.com/problems/distinct-subsequences/
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
const numDistinct = function (s, t) {
  const dp = Array(s.length + 1).fill(0).map(() => Array(t.length + 1).fill(BigInt(0)))

  for (let i = 0; i <= s.length; i++) {
    dp[i][t.length] = BigInt(1)
  }

  for (let i = s.length - 1; i >= 0; i--) {
    for (let j = t.length - 1; j >= 0; j--) {
      if (s[i] === t[j]) {
        dp[i][j] += dp[i + 1][j + 1] + dp[i + 1][j]
      } else {
        dp[i][j] += dp[i + 1][j]
      }
    }
  }

  return dp[0][0]
}

/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
const numDistinct2 = function (s, t) {
  const dp = new Map()
  const MOD = 10 ** 9 + 7
  const addModulo = (a, b) => {
    return ((a % MOD) + (b % MOD)) % MOD
  }
  const countDistinct = (i, j) => {
    if (j === t.length) {
      return 1
    }
    if (i === s.length) {
      return 0
    }
    const key = `${i}#${j}`
    if (dp.has(key)) {
      return dp.get(key)
    }
    let result = 0
    if (s[i] === t[j]) {
      result = addModulo(result, countDistinct(i + 1, j + 1))
      result = addModulo(result, countDistinct(i + 1, j))
    } else {
      result = addModulo(result, countDistinct(i + 1, j))
    }
    dp.set(key, result)
    return result
  }

  return countDistinct(0, 0)
}
