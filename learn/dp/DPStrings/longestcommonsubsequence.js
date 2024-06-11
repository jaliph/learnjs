// https://leetcode.com/problems/longest-common-subsequence/
/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
const longestCommonSubsequenceBrute = function (text1, text2) {
  const cache = new Map()
  const matchCharsRecur = (i, j) => {
    if (i >= text1.length || j >= text2.length) {
      return 0
    }
    const key = i + ':' + j
    if (cache.has(key)) {
      return cache.get(key)
    }

    if (text1[i] === text2[j]) {
      cache.set(key, 1 + matchCharsRecur(i + 1, j + 1))
    } else {
      cache.set(key, Math.max(matchCharsRecur(i + 1, j), matchCharsRecur(i, j + 1)))
    }
    console.log(cache)
    return cache.get(key)
  }

  return matchCharsRecur(0, 0)
}

/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
const longestCommonSubsequence = function (text1, text2) {
  let prev = Array(text2.length + 1).fill(0)
  let dp
  for (let i = 0; i < text1.length; i++) {
    dp = Array(text2.length + 1).fill(0)
    for (let j = 0; j < text2.length; j++) {
      if (text1[i] === text2[j]) {
        dp[j + 1] = 1 + prev[j]
      } else {
        dp[j + 1] = Math.max(dp[j], prev[j + 1])
      }
    }
    prev = dp
  }

  return dp[text2.length]
}

const main = () => {
  text1 = 'abcde', text2 = 'ace'
  console.log('LCS is ', longestCommonSubsequenceBrute(text1, text2))
}

main()
