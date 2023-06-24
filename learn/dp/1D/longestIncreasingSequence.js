// https://leetcode.com/problems/longest-increasing-subsequence/

/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
  const LIS = Array(nums.length).fill(1)

  let max = 1
  for (let i = 1; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[j] < nums[i]) {
        LIS[i] = Math.max(LIS[i], 1 + LIS[j])
        max = Math.max(max, LIS[i])
      }
    }
  }
  return max
};


const main = () => {
  nums = [10,9,2,5,3,7,101,18]
  console.log('the longest increasing subsequence is ', lengthOfLIS(nums))

  nums = [7,7,7,7,7,7,7]
  console.log('the longest increasing subsequence is ', lengthOfLIS(nums))

  nums = [1,3,6,7,9,4,10,5,6]
  console.log('the longest increasing subsequence is ', lengthOfLIS(nums))
}

main()