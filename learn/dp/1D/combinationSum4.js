// https://leetcode.com/problems/combination-sum-iv/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var combinationSum4 = function(nums, target) {
  const dp = new Map()
  dp.set(0, 1)

  for (let i = 1; i <= target; i++) {
    dp.set(i, 0)
    for (let n of nums) {
      dp.set(i, dp.get(i) + (dp.get(i - n) || 0))
    }
  }
  return dp.get(target)
};
