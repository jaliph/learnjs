// https://leetcode.com/problems/subsets/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
  let N = 1 << nums.length

  let result = []
  for (let i = 0; i < N; i++) {
    let iter = []
    for (let j = 0; j < nums.length; j++) {
      if (i & (1 << j)) {
        iter.push(nums[j])
      }
    }
    result.push(iter)
  }
  return result
};

const main = () => {
  nums = [1,2,3]
  console.log('Power Set is ', subsets(nums))
}

main()