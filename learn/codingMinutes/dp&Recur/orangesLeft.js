// https://leetcode.com/problems/minimum-number-of-days-to-eat-n-oranges/

/**
 * @param {number} n
 * @return {number}
 */
const minDaysDP = function (n) {
  if (n <= 2) return n

  const dp = Array(n + 1).fill(Infinity)
  dp[0] = 0
  dp[1] = 1
  dp[2] = 2

  for (let i = 3; i <= n; i++) {
    if (i % 2 == 0 && i % 3 == 0) {
      const a = i - (2 * (i / 3))
      const b = (i / 2)
      // add 1 day for each iteration
      dp[i] = 1 + Math.min(dp[i - 1], dp[a], dp[b])
    } else if (i % 3 == 0) {
      const a = i - (2 * (i / 3))
      dp[i] = 1 + Math.min(dp[i - 1], dp[a])
    } else if (i % 2 == 0) {
      const b = (i / 2)
      dp[i] = 1 + Math.min(dp[i - 1], dp[b])
    }
    // nthing matches i can have 1 orange
    dp[i] = Math.min(dp[i], 1 + dp[i - 1])
  }

  return dp[n]
}

const minDays = function (n) {
  const map = {}

  const minDaysRecur = (n) => {
    if (n <= 2) {
      return n
    }
    if (map[n]) return map[n]

    const ans = Math.min(
      1 + (n % 2) + minDaysRecur(Math.floor(n / 2)),
      1 + (n % 3) + minDaysRecur(Math.floor(n / 3))
    )

    map[n] = ans
    return map[n]
  }

  return minDaysRecur(n)
}

const main = () => {
  let n = 10
  console.log(' the min muum days to eat 10 oranges is ', minDays(n))

  n = 61455274
  console.log(' the min muum days to eat 10 oranges is ', minDays(n))
}

main()
