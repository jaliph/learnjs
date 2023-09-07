/**
 * https://leetcode.com/problems/edit-distance/
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(word1, word2) {
  const dp = new Map()
  const distFinder = (i, j) => {
    if (i === word1.length) {
      return word2.length - j
    }

    if (j === word2.length) {
      return word1.length - i
    }

    let key = `${i}#${j}`

    if (dp.has(key)) {
      return dp.get(key)
    }
    if (word1[i] === word2[j]) {
      dp.set(key, distFinder(i + 1, j + 1))
    } else {
      dp.set(key, Math.min(
        1 + distFinder(i + 1, j),
        1 + distFinder(i, j + 1),
        1 + distFinder(i + 1, j + 1)
      ))
    } 
    return dp.get(key)
  }

  return distFinder(0, 0)
};


/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(word1, word2) {
  const dp = Array(word1.length + 1).fill().map(() => Array(word2.length + 1).fill(0))

  for (let i = 1; i <= word1.length; i++) {
    dp[i][0] = i
  }

  for (let i = 1; i <= word2.length; i++) {
    dp[0][i] = i
  }

  for (let i = 0; i < word1.length; i++) {
    for (let j = 0; j < word2.length; j++) {
      if (word1[i] == word2[j]) {
        dp[i + 1][j + 1] = dp[i][j]
      } else {
        dp[i + 1][j + 1] = 1 + Math.min(
          dp[i + 1][j],
          dp[i][j + 1],
          dp[i][j]
        )
      }
    }
  }
  return dp[word1.length][word2.length]
}