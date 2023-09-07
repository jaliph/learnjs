/**
 * https://leetcode.com/problems/stone-game-ii/
 * @param {number[]} piles
 * @return {number}
 */
var stoneGameII = function(piles) {
    
  const dp = new Map()
  const scoreAlice = (i, isAlice, M) => {
    if (i >= piles.length) {
      return 0
    }

    let key = `${i}#${isAlice}#${M}`
    if (dp.has(key)) {
      return dp.get(key)
    }
    let res = isAlice ? 0 : Infinity
    let total = 0
    for (let j = 1; j <= 2 * M; j++) {
      if ((i + j - 1) === piles.length) {
        break
      }
      total += piles[i + j - 1]
      if (isAlice) {
        res = Math.max(res, total + scoreAlice(i + j, !isAlice, Math.max(M, j)))
      } else {
        res = Math.min(res, scoreAlice(i + j, !isAlice, Math.max(M, j)))
      }
    }
    dp.set(key, res)
    return res
  }

  return scoreAlice(0, true, 1)
};