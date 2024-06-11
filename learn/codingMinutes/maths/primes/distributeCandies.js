// https://leetcode.com/problems/distribute-candies/

/**
 * @param {number[]} candyType
 * @return {number}
 */
const distributeCandies = function (candyType) {
  const half = Math.floor(candyType.length / 2)
  const numberTypes = Array.from(new Set(candyType))
  if (numberTypes.length > half) {
    return half
  } else {
    return numberTypes.length
  }
}
