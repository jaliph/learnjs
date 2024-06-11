/**
 * https://leetcode.com/problems/beautiful-towers-i/
 * @param {number[]} maxHeights
 * @return {number}
 */
const maximumSumOfHeights = function (maxHeights) {
  let ans = 0
  for (let i = 0; i < maxHeights.length; i++) {
    let sum = maxHeights[i]; let prev = maxHeights[i]

    for (let j = i - 1; j >= 0; j--) {
      prev = Math.min(prev, maxHeights[j])
      sum += prev
    }

    prev = maxHeights[i]
    for (let j = i + 1; j < maxHeights.length; j++) {
      prev = Math.min(prev, maxHeights[j])
      sum += prev
    }
    ans = Math.max(ans, sum)
  }

  return ans
}
