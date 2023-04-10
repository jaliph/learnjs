
/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
var change = function(amount, coins) {
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
              let c1 = dp[i - 1][j]
              let c2 = dp[i][j - coins[i]]
              dp[i][j] = c1 + c2
          }
      }
  }

  return dp[coins.length - 1][amount]
};

console.log('Coin Change ans', change(5, [1,2,5]))
console.assert(change(5, [1,2,5]) === 4)