// https://leetcode.com/problems/word-break/

/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */

var wordBreak = function(s, wordDict) {
  let dp = Array(s.length + 1).fill(false)
  // if you reach end.. it should be true
  dp[s.length] = true

  for (let i = s.length - 1; i >= 0; i--) {
    for (let w of wordDict) {
      if (i + w.length <= s.length && s.slice(i, i + w.length) == w) {
        dp[i] = dp[i + w.length]
      }
      if (dp[i]) {
        break
      }
    }
  }
  return dp[0]
}

const main = () => {
  s = "abcd", wordDict = ["a","abc","b","cd"]
  console.log('Word break result ', wordBreak(s, wordDict))

  // s = "leetcode", wordDict = ["leet","code"]
  // console.log('Word break result ', wordBreak(s, wordDict))

  // s = "applepenapple", wordDict = ["apple","pen"]
  // console.log('Word break result ', wordBreak(s, wordDict))

  // s = "catsandog", wordDict = ["cats","dog","sand","and","cat"]
  // console.log('Word break result ', wordBreak(s, wordDict))
}

main()