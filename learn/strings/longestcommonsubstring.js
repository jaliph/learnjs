///
const findLCSLength = function (s1, s2) {
  const findLCSLengthRecur = (s1, s2, i, j, count) => {
    if (i >= s1.length || j >= s2.length) {
      return count
    }
    if (s1[i] == s2[j]) {
      count = findLCSLengthRecur(s1, s2, i + 1, j + 1, count + 1)
    }
    const c2 = findLCSLengthRecur(s1, s2, i + 1, j, 0)
    const c3 = findLCSLengthRecur(s1, s2, i, j + 1, 0)
    return Math.max(count, Math.max(c2, c3))
  }
  return findLCSLengthRecur(s1, s2, 0, 0, 0)
}

console.log(`Length of Longest Common Substring: ---> ${findLCSLength('abdca', 'cbda')}`)
console.log(`Length of Longest Common Substring: ---> ${findLCSLength('passport', 'ppsspt')}`)

const findLCSLenghtDP = function (s1, s2) {
  const dp = Array(s1.length + 1).fill(0).map(() => Array(s2.length + 1).fill(0))

  let maxLength = 0
  for (let i = 1; i <= s1.length; i++) {
    for (let j = 1; j <= s2.length; j++) {
      if (s1[i - 1] == s2[j - 1]) {
        dp[i][j] = 1 + dp[i - 1][j - 1]
        maxLength = Math.max(maxLength, dp[i][j])
      }
    }
  }
  return maxLength
}

console.log(`Length of Longest Common Substring: ---> ${findLCSLenghtDP('abdca', 'cbda')}`)
