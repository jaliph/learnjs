
const findLCSLength = function (s1, s2) {
  const findLCSRecur = (s1, s2, i, j, count) => {
    if (i >= s1.length || j >= s2.length) {
      return count
    }
    if (s1[i] == s2[j]) {
      return findLCSRecur(s1, s2, i + 1, j + 1, count + 1)
    }
    const c1 = findLCSRecur(s1, s2, i + 1, j, count)
    const c2 = findLCSRecur(s1, s2, i, j + 1, count)
    return Math.max(c1, c2)
  }
  return findLCSRecur(s1, s2, 0, 0, 0)
}

console.log(`Length of Longest Common Subsequence: ---> ${findLCSLength('abdca', 'cbda')}`)
console.log(`Length of Longest Common Subsequence: ---> ${findLCSLength('passport', 'ppsspt')}`)

const findLCSLengthDP = (s1, s2) => {
  const dp = Array(s1.length + 1).fill(0).map(() => Array(s2.length + 1).fill(0))

  for (let i = 1; i <= s1.length; i++) {
    for (let j = 1; j <= s2.length; j++) {
      if (s1[i - 1] == s2[j - 1]) {
        dp[i][j] = 1 + dp[i - 1][j - 1]
      } else {
        const c1 = dp[i - 1][j]
        const c2 = dp[i][j - 1]
        dp[i][j] = Math.max(c1, c2)
      }
    }
  }
  return dp[s1.length][s2.length]
}

console.log(`Length of Longest Common Subsequence: ---> ${findLCSLengthDP('abdca', 'cbda')}`)
console.log(`Length of Longest Common Subsequence: ---> ${findLCSLengthDP('passport', 'ppsspt')}`)
