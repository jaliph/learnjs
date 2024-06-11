// https://leetcode.com/problems/check-if-there-is-a-valid-partition-for-the-array/

/**
 * @param {number[]} nums
 * @return {boolean}
 */
const validPartition = function (nums) {
  const dp = Array(3).fill(false)

  dp[2] = false
  dp[1] = nums[nums.length - 1] === nums[nums.length - 2]

  if (nums.length == 2) {
    return dp[1]
  }

  dp[0] = (
    (nums[nums.length - 2] + 1 === nums[nums.length - 1] && nums[nums.length - 3] + 1 === nums[nums.length - 2]) ||
    (nums[nums.length - 2] === nums[nums.length - 1] && nums[nums.length - 3] === nums[nums.length - 2])
  )

  for (let i = nums.length - 4; i >= 0; i--) {
    let curr = nums[i] === nums[i + 1] && dp[1]
    curr = curr | (nums[i] + 1 === nums[i + 1] && nums[i + 1] + 1 === nums[i + 2] && dp[2])
    curr = curr | (nums[i] === nums[i + 1] && nums[i + 1] === nums[i + 2] && dp[2])

    dp = [curr, dp[0], dp[1]]
  }

  return dp[0]
}
