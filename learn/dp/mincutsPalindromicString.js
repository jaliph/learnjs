const minCutsBrute = function (s) {
  const checkPalindrome = (s, i, j) => {
    if (i > j) return true

    if (s[i] == s[j]) return checkPalindrome(s, i + 1, j - 1)

    return false
  }

  const minCutRecur = (s, i, j, dp) => {
    if (dp[i][j] != -1) return dp[i][j]

    if (i == j || checkPalindrome(s, i, j)) {
      dp[i][j] = 0
      return dp[i][j]
    }

    let result = j - i + 1

    for (let k = i; k < j; k++) {
      const costs = 1 + minCutRecur(s, i, k, dp) + minCutRecur(s, k + 1, j, dp)
      result = Math.min(result, costs)
    }
    dp[i][j] = result
    return dp[i][j]
  }

  const dp = Array(s.length).fill(0).map(() => Array(s.length).fill(-1))
  return minCutRecur(s, 0, s.length - 1, dp)
}

const minCuts = (s) => {
  // const palindromeCuts = Array(s.length).fill(Infinity)
  // const dp = Array(s.length).fill(0).map(() => Array(s.length).fill(0))

  // for (let i = 0; i < s.length; i++) {
  //   dp[i][i] = 1
  // }

  // for (let i = s.length - 1; i >= 0; i--) {
  //   for (let j = i + 1; j < s.length; j++) {
  //     if (s[i] == s[j]) {
  //       let count = j - i + 1
  //       if (count == 2 + dp[i + 1][j - 1] || count == 2) {
  //         dp[i][j] = 1
  //       }
  //     }
  //   }
  // }

  // // console.log(dp)
  // for (let i = s.length - 1; i >= 0; i--) {

  //   if (dp[i][s.length-1] == 1) {
  //     palindromeCuts[i] = 0
  //   } else {
  //     for (let j = s.length - 2; j >= i; j--) {
  //       if (dp[i][j] == 1) palindromeCuts[i] = Math.min(palindromeCuts[i], 1 + palindromeCuts[j + 1])
  //     }
  //   }
  // }

  // // console.log(palindromeCuts)

  // // console.log(dp)
  // return palindromeCuts[0]

  const n = s.length
  const dp = Array(s.length).fill(Infinity)
  const palindromeTable = Array(s.length).fill(0).map(() => Array(s.length).fill(0))
  // A single character is always palindrome
  for (var i = 0; i < n; i++) {
    palindromeTable[i][i] = 1
  }

  for (let i = s.length - 1; i >= 0; i--) {
    for (let j = i + 1; j < s.length; j++) {
      if (s[i] == s[j]) {
        const count = j - i + 1
        if (palindromeTable[i + 1][j - 1] == 1 || count == 2) {
          palindromeTable[i][j] = 1
        }
      }
    }
  }

  // for (var i = n - 1; i > -1; i--) {
  //   for (var j = i + 1; j < n; j++) {
  //     if (s.charAt(i) == s.charAt(j)) {
  //       // If the string consits of two characters or if the remaining string, str[i + 1 : j - 1]
  //       // is a palindrome, str[i : j] must also be a palindrome
  //       if (j - i == 1 || palindromeTable[i + 1][j - 1] == 1)
  //         palindromeTable[i][j] = 1;
  //     }
  //   }
  // }

  // Traversing the dp table in reverse order
  for (var i = n - 1; i > -1; i--) {
    // If str[i : n - 1] is a palindrome, no cuts neet to be performed,
    // so dp[i] = 0
    if (palindromeTable[i][n - 1] == 1) dp[i] = 0
    // Otherwise, we traverse the remaining string to check if it contains
    // a palindrome and perform the minimum number of cuts on it to update
    // dp[i]
    else {
      for (let j = n - 2; j >= i; j--) {
        if (palindromeTable[i][j] == 1) dp[i] = Math.min(dp[i], 1 + dp[j + 1])
      }
    }
  }
  // We return dp[0], as it contains the minimum number of cuts over the
  // entire string
  return dp[0]
}

// Driver code
function main () {
  inputs = ['abbab'] // ["radar", "abac", "book", "sleek", "fours"];

  // You can uncomment the lines below and check how this recursive solution causes a time-out
  // inputs.push("elwxubtrnarrrjguuqwwoopgwjaaeavczrdubcgfvnxeutcatt");
  // inputs.push("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabbaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa")

  for (let i = 0; i < inputs.length; i++) {
    console.log(i + 1 + '.\tInput string:', inputs[i], '\n\n\tThe minimum number of cuts are:', minCuts(inputs[i]))
    console.log('-'.repeat(100))
  }
}

main()
