// https://leetcode.com/problems/longest-palindromic-substring/

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  const dp = Array(s.length).fill().map(() => Array(s.length).fill(0))

  for (let i = 0; i < s.length; i++) {
    dp[i][i] = 1 // 1 char is always the dp
  }

  let maxLength = 0, min = 0, max = 0
  for (let i = s.length - 1; i >= 0 ; i--) {
    for (let j = i + 1; j < s.length; j++) {
      if (s[i] == s[j]) {
        if (j - i + 1 == 2 || (j - i + 1) == 2 + dp[i + 1][j - 1]) {
          dp[i][j] = 2 + dp[i + 1][j - 1]
          if (maxLength < (j - i + 1)) {
            min = i
            max = j
            maxLength = (j - i + 1)
          }
        } else {
          dp[i][j] = Math.max(dp[i + 1][j], dp[i][j - 1])
        }
      } else {
        dp[i][j] = Math.max(dp[i + 1][j], dp[i][j - 1])
      }
    }
  }

  return s.slice(min, max + 1)
};


const main = () => {
  s = "babad"
  console.log('Longest palindromin Substring is ', longestPalindrome(s))
}

main()