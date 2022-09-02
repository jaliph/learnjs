
const longestPalinDromicSubstring = (s) => {
  const LPSRecur = (s, start, end) => {
    if (start > end) {
      return 0
    }
    if (start == end) {
      return 1
    }

    if (s[start] == s[end]) { 
      let remlen = end - start - 1
      if (remlen == LPSRecur(s, start + 1, end - 1)) {
        return remlen + 2
      }
    }
    let c1 = LPSRecur(s, start + 1, end)
    let c2 = LPSRecur(s, start, end - 1)
    return Math.max(c1, c2)
  }
  return LPSRecur(s, 0, s.length - 1)
}

// console.log(longestPalinDromicSubstring("cbbd"))


const longestPalinDromicSubstringDP = (s) => {
  const dp = Array(s.length).fill(false)
    .map(() => Array(s.length).fill(false))

  for (let i = 0; i < s.length; i++) {
    dp[i][i] = true
  }
  
  let minStart, maxEnd
  let maxLength  = 1
  for (let start = s.length - 1; start >= 0; start--) {
    for (let end = start + 1; end < s.length; end++) {
      if (s[start] == s[end]) {
        if (end - start == 1 || dp[start + 1][end - 1]) {
          dp[start][end] = true
          if (maxLength < (end - start + 1)) {  
            maxLength = end - start + 1
          }
        }
      }
    } 
  }
  return maxLength
}

console.log(longestPalinDromicSubstringDP("cbbd"))