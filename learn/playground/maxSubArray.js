/**
 * @param {number[]} nums
 * @return {number}
 */
const maxSubarrays = function (nums) {
  const maxSubarraysRecur = (i, nums, dp) => {
    // base
    if (i === nums.length) {
      return 0
    }

    // recur

    let ans = -Infinity; let sum = 0
    for (let j = i; j < nums.length; j++) {
      // there is partition from i .. j
      sum &= nums[j]
      ans = Math.max(ans, 1 + Math.min(sum, maxSubarraysRecur(j + 1, nums)))
    }
    // console.log(ans)
    return ans
  }
  // const dp = Array(nums.length + 1).fill(0).map(() => Array(k + 1).fill(-1))
  return maxSubarraysRecur(0, nums)
}

nums = [1, 0, 2, 0, 1, 2]
console.log(maxSubarrays(nums))
