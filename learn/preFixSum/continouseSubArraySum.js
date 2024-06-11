// https://leetcode.com/problems/continuous-subarray-sum/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
const checkSubarraySum = function (nums, k) {
  const map = new Map()
  map.set(0, -1)
  let prefix = 0
  let remainder

  for (let i = 0; i < nums.length; i++) {
    prefix += nums[i]
    remainder = prefix % k
    if (!map.has(remainder)) {
      map.set(remainder, i)
    } else if ((i - map.get(remainder)) > 1) {
      return true
    }
  }

  return false
}

const main = () => {
  nums = [23, 2, 4, 6, 7], k = 6
  console.log('has a good subarray', checkSubarraySum(nums, k))

  nums = [5, 0, 0, 0], k = 3
  console.log('has a good subarray', checkSubarraySum(nums, k))
}

main()
