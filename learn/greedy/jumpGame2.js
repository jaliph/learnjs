/**
 * https://leetcode.com/problems/jump-game-ii/
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
  let l = 0, r = 0
  let res = 0
  let farthest
  while (r < nums.length - 1) {
    farthest = 0
    for (let i = l; i <= r; i++) {
      farthest = Math.max(farthest, i + nums[i])
    }
    res++
    l = r + 1
    r = farthest
  }

  return res
};