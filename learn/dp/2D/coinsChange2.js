// https://leetcode.com/problems/coin-change-ii

/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
var change = function (amount, coins) {
  const dp = new Map()
  const findSum = (i, sum) => {
    if (sum === 0) {
      return 1
    }
    if (sum < 0 || i == coins.length) {
      return 0
    }

    const key = i + ':' + sum

    if (dp.has(key)) {
      return dp.get(key)
    }

    let c1 = 0; let c2 = 0
    if (coins[i] <= sum) {
      c2 = findSum(i, sum - coins[i])
    }

    c1 = findSum(i + 1, sum)
    dp.set(key, c1 + c2)
    return dp.get(key)
  }

  return findSum(0, amount)
}

/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
var change = function (amount, coins) {
  const dp = Array(coins.length + 1).fill().map(() => Array(amount + 1).fill(0))

  for (let i = 0; i <= coins.length; i++) {
    dp[i][0] = 1
  }

  for (let i = coins.length - 1; i >= 0; i--) {
    for (let j = 1; j <= amount; j++) {
      dp[i][j] = dp[i + 1][j]
      if (coins[i] <= j) {
        dp[i][j] += dp[i][j - coins[i]]
      }
    }
  }

  return dp[0][amount]
}

/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
var change = function (amount, coins) {
  let prev = Array(amount + 1).fill(0)
  prev[0] = 1

  let dp
  for (let i = coins.length - 1; i >= 0; i--) {
    dp = Array(amount + 1).fill(0)
    dp[0] = 1
    for (let j = 1; j <= amount; j++) {
      dp[j] = prev[j]
      if (coins[i] <= j) {
        dp[j] += dp[j - coins[i]]
      }
    }
    prev = dp
  }

  return prev[amount]
}
