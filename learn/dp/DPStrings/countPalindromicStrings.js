// https://leetcode.com/problems/longest-palindromic-substring/

/**
 * @param {string} s
 * @return {string}
 */
let countSubstrings = (s) => {
  const dp = Array(s.length).fill().map(() => Array(s.length).fill(false))

  let count = 0
  for (let i = 0; i < s.length; i++) {
    dp[i][i] = true // 1 char is always the dp
    count++
  }

  for (let i = s.length - 1; i >= 0 ; i--) {
    for (let j = i + 1; j < s.length; j++) {
      if (s[i] == s[j]) {
        if (j - i + 1 == 2 || dp[i + 1][j - 1]) {
          dp[i][j] = true
          count++
        }
      }
    }
  }

  return count
};


const main = () => {
  s = "babad"
  console.log('Count of all palindromic Substring are ', countSubstrings(s))
}

main()