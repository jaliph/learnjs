/**
 * https://leetcode.com/problems/minimum-array-length-after-pair-removals/
 * @param {number[]} nums
 * @return {number}
 */
var minLengthAfterRemovals = function(nums) {
  const n = nums.length
  let ans = nums.length
  for (let i = 0, j = ~~(n / 2); i < ~~(n / 2) && j < n; j++) {
      if (nums[i] < nums[j]) {
        i++
        ans -= 2
      }
  }
  return ans
};