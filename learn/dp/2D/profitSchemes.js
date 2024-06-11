// https://leetcode.com/problems/profitable-schemes/

/**
 * @param {number} n
 * @param {number} minProfit
 * @param {number[]} group
 * @param {number[]} profit
 * @return {number}
 */
var profitableSchemes = function (n, minProfit, group, profit) {
  const dp = Array(n + 1).fill().map(() => Array(group.length + 1).fill().map(() => Array(minProfit + 1).fill(-1)))
  const MOD = 10 ** 9 + 7
  const calPRecur = (n, i, p) => {
    if (i == group.length) {
      if (p >= minProfit) {
        return 1
      } else {
        return 0
      }
    }
    if (dp[n][i][p] != -1) {
      return dp[n][i][p]
    }

    // skip the ith group
    dp[n][i][p] = calPRecur(n, i + 1, p)

    // choose the ith group
    if (group[i] <= n) {
      dp[n][i][p] = (dp[n][i][p] % MOD + calPRecur(n - group[i], i + 1, Math.min(p + profit[i], minProfit)) % MOD) % MOD
    }

    return dp[n][i][p]
  }

  return calPRecur(n, 0, 0)
}

const Print2D = arr => arr.forEach(o => console.log(...o))
const main = () => {
  n = 5, minProfit = 3, group = [2, 2], profit = [2, 3]
  console.log('Total Ways to get the profit is ', profitableSchemes(n, minProfit, group, profit))
}

main()

/**
 * @param {number} n
 * @param {number} minProfit
 * @param {number[]} group
 * @param {number[]} profit
 * @return {number}
 */
var profitableSchemes = function (n, minProfit, group, profit) {
  const MOD = 10 ** 9 + 7
  const dp = Array(group.length + 1).fill().map(() => Array(n + 1).fill().map(() => Array(minProfit + 1).fill(0)))

  for (let N = 0; N <= n; N++) {
    dp[group.length][N][minProfit] = 1
  }

  for (let i = group.length - 1; i >= 0; i--) {
    for (let N = 0; N <= n; N++) {
      for (let p = 0; p <= minProfit; p++) {
        dp[i][N][p] = dp[i + 1][N][p]
        if (N + group[i] <= n) {
          dp[i][N][p] = dp[i][N][p] % MOD + dp[i + 1][N + group[i]][Math.min(p + profit[i], minProfit)] % MOD
        }
        dp[i][N][p] = dp[i][N][p] % MOD
      }
    }
  }

  return dp[0][0][0]
}
