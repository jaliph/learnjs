// https://leetcode.com/problems/minimum-difference-between-highest-and-lowest-of-k-scores/description/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minimumDifference = function(nums, k) {
  let start = 0
  let diff = Infinity
  nums.sort((a, b) => a - b)
  for (let end = k - 1; end < nums.length; end++) {
    diff = Math.min(diff, nums[end] - nums[start])
    start++
  }
  return diff
};

const main = () => {
  nums = [90], k = 1
  console.log('min diff is ', minimumDifference(nums, k))

  nums = [9,4,1,7], k = 2
  console.log('min diff is ', minimumDifference(nums, k))
}


main()
