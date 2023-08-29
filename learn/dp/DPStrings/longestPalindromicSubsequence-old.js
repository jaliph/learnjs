
const longestPalindromicSubsequence = (str) => {
  const dp = Array(str.length).fill(0).map(() => Array(str.length).fill(0))

  for (let i = 0; i < str.length; i++) {
    dp[i][i] = 1
  }

  for (let i = str.length; i >= 0; i--) {
    for (let j = i + 1; j < str.length; j++) {
      console.log(i, j)
      if (str[i] == str[j]) {
        dp[i][j] = 2 + dp[i + 1][j - 1]
      } else {
        dp[i][j] = Math.max(dp[i + 1][j], dp[i][j - 1])
      }
    }
  }
  // console.log(dp)
  return dp[0][str.length - 1]
}

// Driver code
const main = function () {
  const strings = ['racecar']// ['cddpd', 'abdbca','racecar','pqr'];

  // You can uncomment the lines below and check how this recursive solution causes a time-out

  // strings.push('aeqirradarqwruifdfgdtrrrraaadddaqweraarrr')

  for (let i = 0; i < strings.length; i++) {
    console.log(
          `${i + 1}. The length of the longest palindromic subsequence in '${
              strings[i]
          }' is: `,
          longestPalindromicSubsequence(strings[i])
    )
    console.log('-'.repeat(100))
  }
}

main()
