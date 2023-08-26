// https://leetcode.com/problems/solving-questions-with-brainpower/
/**
 * @param {number[][]} questions
 * @return {number}
 */


var mostPoints = function(questions) {
  const dp = Array(questions.length).fill(0)
  
  for (let i = questions.length - 1; i >= 0; i--) {
    dp[i] = Math.max(
      i + 1 < questions.length ? dp[i + 1] : 0, // exclude
      questions[i][0] + (i + 1 + questions[i][1] < questions.length ? dp[i + 1 + questions[i][1]] : 0)
    )
  }

  return dp[0]
};

var mostPointsBrute = function(questions) {
  const dp = Array(questions.length + 1).fill(-1)
  dp[questions.length] = 0
  const solveQuesRecur = (i) => {
    if (dp[i] != -1) {
      return dp[i]
    }

    // solve i
    let brainpower = questions[i][1]
    let j = Math.min(brainpower + i, questions.length - 1)
    let pts1 =  questions[i][0] + solveQuesRecur(j + 1)

    // don't solve i
    let pts2 = solveQuesRecur(i + 1)

    return dp[i] = Math.max(pts1, pts2)
  }

  return solveQuesRecur(0)
};