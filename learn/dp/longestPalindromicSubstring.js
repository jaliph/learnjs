
const findLpsLengthBrute = (str) => {
  const findLpsLengthRecur = (str, i, j) => {
    if (i > j) {
      return 0
    }

    if (i == j) {
      return 1
    }

    if (str[i] == str[j]) {
      let count = 2 + findLpsLengthRecur(str, i + 1, j - 1)
      if (count = j - i + 1) {
        return count
      }
    }

    return Math.max(findLpsLengthRecur(str, i + 1, j), findLpsLengthRecur(str, i, j - 1))
  }
  return findLpsLengthRecur(str, 0, str.length - 1)
}

const findLpsLength = (str) => {
  const dp = Array(str.length).fill(0).map(() => Array(str.length).fill(0))

  for (let i = 0; i < str.length; i++) {
    dp[i][i] = 1
  }
  for (let i = str.length - 1; i >= 0; i--) {
    for (let j = i + 1; j < str.length; j++) {
      if (str[i] == str[j]) {
        if (j - i + 1 == 2 + dp[i + 1][j - 1] || j - i + 1 == 2) {
          dp[i][j] = 2 + dp[i + 1][j - 1]
        } else {
          dp[i][j] = Math.max(dp[i + 1][j], dp[i][j - 1])
        }
      } else {
        dp[i][j] = Math.max(dp[i + 1][j], dp[i][j - 1])
      }
    }
  }

  return dp[0][str.length - 1]
}

/**
 * @param {string} s
 * @return {string}
 */
const longestPalindrome = function (s) {
  const dp = Array(s.length).fill(0)
    .map(() => Array(s.length).fill(0))

  for (let i = 0; i < s.length; i++) {
    dp[i][i] = 1
  }

  let maxLength = 0
  let min = 0; let max = 0
  for (let start = s.length - 1; start >= 0; start--) {
    for (let end = start + 1; end < s.length; end++) {
      if (s[start] == s[end]) {
        const count = end - start + 1
        if (count == 2 + dp[start + 1][end - 1] || count == 2) {
          dp[start][end] = 2 + dp[start + 1][end - 1]
          if (maxLength < dp[start][end]) {
            console.log('Came in')
            maxLength = dp[start][end]
            min = start
            max = end
          }
        } else {
          dp[start][end] = Math.max(dp[start + 1][end], dp[start][end - 1])
        }
      } else {
        dp[start][end] = Math.max(dp[start + 1][end], dp[start][end - 1])
      }
    }
  }
  console.log(dp[0][s.length - 1], maxLength)
  console.log(min, max + 1)
  return s.slice(min, max + 1)
}

// Driver code
function main () {
  const strings = ['abcbda', 'tworacecars', 'pqrssrqp', 'mnop', 'bbbbbbbbbbbbbbbbbbbb', 'cbbd', 'aacabdkacaa']

  // You can uncomment the line below and check how this recursive solution causes a time-out
  // strings.push("mwusjunybvgafxuhloqwfoizqkkqzilltjw");

  strings.map((s, i) => {
    console.log(i + 1 + '.\t Input string: ' + s)
    console.log('\t Length of the longest palindromic substring: ' + findLpsLengthBrute(s))
    console.log('\t Length of the longest palindromic substring: ' + findLpsLength(s))
    console.log('\t Length of the longest palindromic substring: ' + longestPalindrome(s))
    console.log('-'.repeat(100))
  })
}

main()
