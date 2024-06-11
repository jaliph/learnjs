/**
 * https://leetcode.com/problems/candy/
 * @param {number[]} ratings
 * @return {number}
 */
let candy = function (ratings) {
  // one pass
  let ret = 1; up = 0, down = 0, peak = 0
  for (let i = 1; i < ratings.length; i++) {
    if (ratings[i - 1] < ratings[i]) {
      up = 1 + up
      peak = up
      down = 0
      ret += 1 + up
    } else if (ratings[i - 1] === ratings[i]) {
      up = 0
      down = 0
      peak = 0
      ret++
    } else {
      up = 0
      down = 1 + down
      ret += 1 + down - (peak >= down ? 1 : 0)
    }
  }

  return ret

  // two pass
  if (ratings.length == 1) {
    return 1
  }
  const candies = Array(ratings.length).fill(1)

  for (let i = 1; i < ratings.length; i++) {
    if (ratings[i - 1] < ratings[i]) {
      candies[i] = 1 + candies[i - 1]
    }
  }

  for (let i = ratings.length - 2; i >= 0; i--) {
    if (ratings[i] > ratings[i + 1]) {
      candies[i] = Math.max(candies[i], 1 + candies[i + 1])
    }
  }

  return candies.reduce((prev, curr) => curr + prev, 0)
}
