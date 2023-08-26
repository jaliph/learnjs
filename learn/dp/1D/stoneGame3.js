// https://leetcode.com/problems/stone-game-iii/
/**
 * @param {number[]} stoneValue
 * @return {string}
 */
var stoneGameIII = function(stoneValue) {
  const dp = new Map()
  dp.set(stoneValue.length, 0)
  const calcScore = (i) => {
    if (dp.has(i)) {
      return dp.get(i)
    }

    let res = -Infinity
    for (let j = i; j < Math.min(stoneValue.length, i + 3); j++) {
      let total = stoneValue.slice(i, j + 1).reduce((prev, curr) => prev+ curr, 0)
      res = Math.max(res, total - calcScore(j + 1))
    }
    dp.set(i, res)
    return dp.get(i)
  }

  let result = calcScore(0)
  return result > 0 ? 'Alice' : result < 0 ? 'Bob' : "Tie"
};