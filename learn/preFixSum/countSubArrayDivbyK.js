// https://leetcode.com/problems/subarray-sums-divisible-by-k

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraysDivByK = function(nums, k) {
  let map = new Map()
  map.set(0, 1)

  let count = 0
  for (let i = 0; i < nums.length; i++) {
    nums[i] = (count + nums[i]) % k
    if (nums[i] < 0) {
      nums[i] += k
    }
    count = nums[i]
  }

  let total = 0
  for (let num of nums) {
    if (map.has(num)) {
      total += map.get(num)
    }
    map.set(num, (map.get(num) || 0) + 1)
  }

  return total
};

const main = () => {
  nums = [4,5,0,-2,-3,1], k = 5
  console.log('count  of subarray exists such that it is divisible by k ', subarraysDivByK(nums, k))
}

main()