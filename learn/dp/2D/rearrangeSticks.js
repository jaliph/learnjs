/**
 * https://leetcode.com/problems/number-of-ways-to-rearrange-sticks-with-k-sticks-visible
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var rearrangeSticks = function(n, k) {
  const dp = new Map()
  const findWays = (n, k) => {
    if (n === k) {
      return 1
    }

    if (n === 0 || k === 0) {
      return 0
    }

    let key = `${n}#${k}`

    if (dp.has(key)) {
      return dp.get(key)
    }

    dp.set(key, (findWays(n - 1, k - 1) + ((n - 1) * findWays(n - 1, k))) % (10 ** 9 + 7))
    return dp.get(key)
  }

  return findWays(n, k) % (10 ** 9 + 7)
};


var rearrangeSticks = function(n, k) {
  const dp = new Map()
  const MOD = 10**9 + 7

  dp.set('1#1', 1)

  for (let i = 2; i <= n; i++) {
    for (let j = 1; j <= k; j++) {
      let key = `${i}#${j}`
      dp.set(key, (dp.get(`${i - 1}#${k - 1}`) || 0) + 
          ((n - 1) *  (dp.get(`${i - 1}#${k}`) || 0))
        )
    }
  }

  return dp.get(`${n}#${k}`)
};


/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var rearrangeSticks = function(n, k) {
  const dp = Array(n + 1).fill().map(() => Array(k + 1).fill(0))
  const MOD = 10**9 + 7
  dp[1][1] = 1

  for (let N = 2; N <= n; N++) {
    for (let K = 1; K <= k; K++) {
      dp[N][K] = (
        // picking the tallest candle
        (dp[N - 1][K - 1] % MOD) +
        // picking among smaller candles
        (((N - 1) * dp[N - 1][K]) % MOD)
      ) % MOD
    }
  }

  return dp[n][k] % MOD
};