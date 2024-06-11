// https://leetcode.com/problems/matchsticks-to-square/

/**
 * @param {number[]} matchsticks
 * @return {boolean}
 */
const makesquare = function (matchsticks) {
  matchsticks.sort((a, b) => b - a)
  const sum = matchsticks.reduce((prev, curr) => prev + curr, 0)
  if (sum % 4 !== 0) {
    return false
  }

  const sideLength = sum / 4
  const sides = [0, 0, 0, 0]

  const isPossible = (i) => {
    if (i == matchsticks.length) {
      return true
    }

    for (let j = 0; j < 4; j++) {
      if (sides[j] + matchsticks[i] <= sideLength) {
        sides[j] = sides[j] + matchsticks[i]
        if (isPossible(i + 1)) {
          return true
        }
        sides[j] = sides[j] - matchsticks[i]
      }
    }
    return false
  }

  return isPossible(0)
}
