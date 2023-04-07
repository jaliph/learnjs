
const numberOfSubsequencesBrute = (str1, str2) => {
  const numberOfSubsequencesRecur = (str1, str2, i, j) => {
    if (j === str2.length) return 1

    if (i === str1.length) return 0

    let result = 0
    if (str1[i] === str2[j]) {
      result += numberOfSubsequencesRecur(str1, str2, i + 1, j + 1)
      result += numberOfSubsequencesRecur(str1, str2, i + 1, j)
    } else {
      result += numberOfSubsequencesRecur(str1, str2, i + 1, j)
    }
    return result
  }
  return numberOfSubsequencesRecur(str1, str2, 0, 0, 0)
}

const numberOfSubsequences = (str1, str2) => {
  const s1 = str1.length
  const s2 = str2.length
  const dp = Array(s1 + 1).fill(0).map(() => Array(s2 + 1).fill(0))

  for (let i = 0; i <= s1; i++) {
    dp[s2][i] = 1
  }

  for (let i = s1 - 1; i >= 0; i--) {
    for (let j = s2 - 1; j >= 0; j--) {
      if (str1[i] === str2[j]) {
        dp[i][j] += dp[i + 1][j + 1] + dp[i + 1][j]
      } else {
        dp[i][j] = dp[i + 1][j]
      }
    }
  }

  return dp[0][0]
}


// Driver code
var main = function(){
  input1Strings = ["bbagbag", "dawawg", "programming", "googlegoogle", "wowowl"]
  input2Strings = ["bag", "aw", "ram", "gogl", "owl"]

  // you can uncomment the lines below and check how this recursive solution causes a time-out

  // input1Strings.push("ababababababababababababababababababababababababababababababababababababababababababab")
  // input2Strings.push("abababababababababababababababab")

  for (let i = 0; i < input1Strings.length; i++) {
      console.log(i + 1 + ".\tString 1: " + input1Strings[i]);
      console.log("\tString 2: " + input2Strings[i]);
      let result = numberOfSubsequences(input1Strings[i], input2Strings[i]);
      console.log("\tNumber of distinct subsequences: " + result);
      console.log("-".repeat(100) + "\n");
  }

};

main();