// https://leetcode.com/problems/best-team-with-no-conflicts/

/**
 * @param {number[]} scores
* @param {number[]} ages
* @return {number}
*/
const bestTeamScore = function (scores, ages) {
  const pairs = scores.map((s, i) => {
    return [s, ages[i]]
  })

  pairs.sort((a, b) => {
    if (a[0] == b[0]) {
      return a[1] - b[1]
    }
    return a[0] - b[0]
  })

  const dp = pairs.map((p) => p[0])

  for (let i = 1; i < pairs.length; i++) {
    const [maxScore, maxAge] = pairs[i]
    for (let j = 0; j < i; j++) {
      const [score, age] = pairs[j]
      if (age <= maxAge) {
        dp[i] = Math.max(dp[i], maxScore + dp[j])
      }
    }
  }

  return Math.max(...dp)
}
