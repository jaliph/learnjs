// https://leetcode.com/problems/longest-palindromic-subsequence/
// Approach 1: LCS with reverse of string itself
/**
 * @param {string} s
 * @return {number}
 */
var longestPalindromeSubseq = function(s) {
  let s2 = [...s].reverse().join('')
  let prev = Array(s2.length + 1).fill(0)
  let dp
  for (let i = 0; i < s.length; i++) {
    dp = Array(s2.length + 1).fill(0)
    for (let j = 0; j < s2.length; j++) {
      if (s[i] === s2[j]) {
        dp[j + 1] = 1 + prev[j]
      } else {
        dp[j + 1] = Math.max(dp[j], prev[j + 1])
      }
    }
    prev = dp
  }

  return dp[s2.length]
};

/**
 * @param {string} s
 * @return {number}
 */
var longestPalindromeSubseqBrute = function(s) {
  const cache = new Map()
  const palindromeLengthFinder = (i, j) => {
    if (i < 0 || j >= s.length) {
      return 0
    }
    let key = i + ':' + j
    if (cache.has(key)) {
      return cache.get(key)
    }
    
    let length = 0
    if (s[i] === s[j]) {
      if (i === j) {
        length = 1
      } else {
        length = 2
      }
      length += palindromeLengthFinder(i - 1, j + 1)
    } else {
      length = Math.max(palindromeLengthFinder(i - 1, j), palindromeLengthFinder(i, j + 1))
    }
    cache.set(key, length)
    return cache.get(key)
  }

  for (let i = 0; i < s.length; i++) {
    palindromeLengthFinder(i, i)
    palindromeLengthFinder(i, i + 1)
  }

  return Math.max(...cache.values())
};


/**
 * @param {string} s
 * @return {number}
 */
var longestPalindromeSubseq = function(s) {
  const dp = Array(s.length + 1).fill().map(() => Array(s.length + 1).fill(0))
  let result = 0
  for (let i = 0; i < s.length; i++) {
    for (let j = s.length - 1; j >= i; j--) {
      if (s[i] === s[j]) {
        if (i === j) {
          dp[i][j] = 1
        } else {
          dp[i][j] = 2
        }
        if (i > 0) {
          dp[i][j] += dp[i - 1][j + 1]
        }
      } else {
        dp[i][j] = dp[i][j + 1]
        if (i > 0) {
          dp[i][j] = Math.max(dp[i][j], dp[i - 1][j])
        }
      }
      result = Math.max(result, dp[i][j])
    }
  }

  return result
};


const main = () => {
  s = "bbbab"
  console.log('length of the longest palindromic subsequence is ... ', longestPalindromeSubseqBrute(s))
}

main()
