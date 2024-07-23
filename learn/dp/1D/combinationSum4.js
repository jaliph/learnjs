// https://leetcode.com/problems/combination-sum-iv/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const combinationSum4 = function (nums, target) {
  const dp = new Map()
  dp.set(0, 1)

  for (let i = 1; i <= target; i++) {
    dp.set(i, 0)
    for (const n of nums) {
      dp.set(i, dp.get(i) + (dp.get(i - n) || 0))
    }
  }
  return dp.get(target)
}

const main = () => {
  nums = [1, 2], target = 4
  console.log('Num of total ways to reach target is ', combinationSum4(nums, target))
}

main()

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var combinationSum4 = function(nums, target) {
  const dp = Array(target + 1).fill(0)
  dp[0] = 1

  for (let i = 0; i <= target; i++) {
    for (let n of nums) {
      if (n <= i) {
        dp[i] += dp[i - n]
      }
    }
  }
  return dp[target]
};
