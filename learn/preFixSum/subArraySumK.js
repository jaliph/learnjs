// https://leetcode.com/problems/subarray-sum-equals-k

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, target) {
  let map = new Map()
  map.set(0, 1)

  let sum = 0, count = 0
  for (let num of nums) {
    sum += num
    
    if (map.has(sum - target)) {
      count += map.get(sum - target)
    }

    map.set(sum, (map.get(sum) || 0) + 1)
  }

  return count
}

const main = () => {
  nums = [1,1,1], k = 2
  console.log('Count of sunarray sum are ', subarraySum(nums, k))
}

main()