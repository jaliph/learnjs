// https://leetcode.com/problems/minimum-size-subarray-sum/
/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
  let wStart = 0; let wSum = 0
  let minLength = Infinity
  for (let wEnd = 0; wEnd < nums.length; wEnd++) {
    wSum += nums[wEnd]
    while (wSum >= target) {
      minLength = Math.min(minLength, wEnd - wStart + 1)
      wSum -= nums[wStart]
      wStart++
    }
  }
  if (minLength === Infinity) {
    return 0
  }
  return minLength
};

console.log(`Smallest subarray length: ${smallest_subarray_sum(7, [2, 1, 5, 2, 3, 2])}`)
console.log(`Smallest subarray length: ${smallest_subarray_sum(7, [2, 1, 5, 2, 8])}`)
console.log(`Smallest subarray length: ${smallest_subarray_sum(8, [3, 4, 1, 1, 6])}`)