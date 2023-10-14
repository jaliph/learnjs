//https://leetcode.com/problems/coin-change-ii/
/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
var change = function(amount, coins) {
  const dp = new Map()
  const findSum = (i, sum) => {
    if (sum === 0) {
      return 1
    }
    if (sum < 0 || i == coins.length) {
      return 0
    }

    let key = i + ":" + sum

    if (dp.has(key)) {
      return dp.get(key)
    }

    let c1 = 0, c2 = 0
    if (coins[i] <= sum) {
      c2 = findSum(i,  sum - coins[i])
    }
    
    c1 = findSum(i + 1,  sum)
    dp.set(key, c1 + c2)
    return dp.get(key)
  }

  return findSum(0, amount)
};


const change = function (amount, coins) {
  const dp = Array(coins.length).fill(0).map(() => Array(amount + 1).fill(0))

  for (let i = 0; i < coins.length; i++) {
    dp[i][0] = 1
  }

  for (let j = 1; j <= amount; j++) {
    dp[0][j] = coins[0] <= j ? dp[0][j - coins[0]] : 0
  }

  for (let i = 0; i <= coins.length; i++) {
    for (let j = 1; j <= amount; j++) {
      if (coins[i] > j) {
        dp[i][j] = dp[i - 1][j]
      } else {
        const c1 = dp[i - 1][j]
        const c2 = dp[i][j - coins[i]]
        dp[i][j] = c1 + c2
      }
    }
  }

  return dp[coins.length - 1][amount]
}

console.log('Coin Change ans', change(5, [1, 2, 5]))
console.assert(change(5, [1, 2, 5]) === 4)
