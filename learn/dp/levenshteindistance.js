let levenshteinDistance = function(str1, str2) {
  if (str1 == str2) {
    return 0
  }
  
  const levenshteinDistanceRecur = (str1, str2) => {
    // console.log(str1, str2)
    if (str1.length == 0) {
      return str2.length
    }
    if (str2.length == 0) {
      return str1.length
    }


    if (str1[str1.length - 1] == str2[str2.length - 1]) {
      return levenshteinDistanceRecur(str1.substring(0, str1.length - 1), str2.substring(0, str2.length - 1))
    }

    let c1 = levenshteinDistanceRecur(str1.substring(0, str1.length - 1), str2) + 1 // deletion of 1 char from string 1
    let c2 = levenshteinDistanceRecur(str1, str2.substring(0, str2.length - 1)) + 1 // deletion of 1 char from string 2
    let c3 = levenshteinDistanceRecur(str1.substring(0, str1.length - 1), str2.substring(0, str2.length - 1)) + 1 // replacement 
    // console.log(c1, c2, c3)
    return Math.min(c3, c1, c2)
  }
  return levenshteinDistanceRecur(str1, str2)
};



// console.log(levenshteinDistance("apples", "oranges"))
// console.log(levenshteinDistance("sunday", "saturday"))
console.log(levenshteinDistance("ab", "abc"))


const levenshteinDistanceDP = (str1, str2) => {
  let dp = Array(str1.length + 1).fill(0).map(() => Array(str2.length + 1).fill(0))
  for (let i = 0; i <= str1.length; i++) {
    dp[i][0] = i
  }
  for (let i = 0; i <= str2.length; i++) {
    dp[0][i] = i
  }

  for (let i = 1; i <= str1.length; i++) {
    for (let j = 1; j <= str2.length; j++) {
      if (str1[i - 1] == str2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1]
      } else  {
        dp[i][j] = 1 + Math.min( 
          dp[i-1][j], 
          dp[i][j-1],
          dp[i-1][j-1]
        )
      }
    }
  }
  console.log(dp)
  return dp[str1.length][str2.length]
}

console.log(levenshteinDistanceDP("aaaa", "cccc"))