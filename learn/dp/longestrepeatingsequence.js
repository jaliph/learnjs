

const findLRSBrute = (str) => {
  const findLRSRecur = (str, i , j) => {
    if (i === str.length || j === str.length) return 0

    if (str[i] === str[j] && i !== j ) {
      return 1 + findLRSRecur(str, i + 1, j + 1)
    } else {
      return Math.max(findLRSRecur(str, i + 1, j), findLRSRecur(str, i, j + 1))
    }
  }
  return findLRSRecur(str, 0, 0)
}

const findLRS = (str) => {
  const s = str.length
  const dp = Array(s + 1).fill(0).map(() => Array(s + 1).fill(0))

  for (let i = 1; i <= s; i++) {
    for (let j = 1; j <= s; j++) {
      if (str[i - 1] == str[j - 1] && i !==j) {
        dp[i][j] = 1 + dp[i - 1][j - 1]
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1])
      }
    }
  }
  return dp[s][s]
}


// Driver code
var main = function() {
  let inputs = ["abcd", "abddccd", "abbaba", "aaaaba", "abcdaeda"]

  // You can uncomment the line below and check how this recursive solution causes a time-out 
  // inputs.push("abcdefghijklmnopqrstuv");

  for (let i = 0; i < inputs.length; i++){
    console.log(i+1 + ". String: " + inputs[i]);
    console.log("Longest repeating subsequence is " + findLRSBrute(inputs[i]));
    console.log("-".repeat(100) + "\n");
  }
};

main();