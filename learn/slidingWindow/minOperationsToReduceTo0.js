/**
 * https://leetcode.com/problems/minimum-operations-to-reduce-x-to-zero/
 * @param {number[]} nums
 * @param {number} x
 * @return {number}
 */
const minOperations = function (nums, x) {
  const sum = nums.reduce((prev, curr) => prev + curr, 0)
  if (sum === x) {
    return nums.length
  }
  const target = sum - x
  let wStart = 0
  let wSum = 0
  let max = 0
  for (let wEnd = 0; wEnd < nums.length; wEnd++) {
    wSum += nums[wEnd]
    while (wSum > target) {
      wSum -= nums[wStart]
      wStart++
    }

    if (wSum === target) {
      max = Math.max(max, wEnd - wStart + 1)
    }
  }

  return max === 0 ? -1 : nums.length - max
}
