// https://leetcode.com/problems/house-robber-ii/

/**
 * @param {number[]} nums
 * @return {number}
 */
const rob = function (nums) {
  const helper = (houses) => {
    let prev1 = 0; let prev2 = 0

    let tempMax
    for (const h of houses) {
      tempMax = Math.max(prev2 + h, prev1)
      prev2 = prev1
      prev1 = tempMax
    }
    return prev1
  }

  return Math.max(nums[0], helper(nums.slice(1)), helper(nums.slice(0, -1)))
}

/**
 * @param {number[]} nums
 * @return {number}
 */
const rob2 = function (nums) {
  if (nums.length == 1) {
    return nums[0]
  }

  if (nums.length == 2) {
    return Math.max(...nums)
  }

  const l2r = Array(nums.length).fill(0)
  const r2l = Array(nums.length).fill(0)

  l2r[0] = nums[0]
  l2r[1] = Math.max(nums[0], nums[1])

  r2l[nums.length - 1] = nums[nums.length - 1]
  r2l[nums.length - 2] = Math.max(nums[nums.length - 1], nums[nums.length - 2])

  for (let i = 2; i < nums.length - 1; i++) {
    const j = nums.length - i - 1
    l2r[i] = Math.max(nums[i] + l2r[i - 2], l2r[i - 1])
    r2l[j] = Math.max(nums[j] + r2l[j + 2], r2l[j + 1])
  }

  return Math.max(l2r[nums.length - 2], r2l[1])
}
