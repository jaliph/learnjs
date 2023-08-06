// https://leetcode.com/problems/array-with-elements-not-equal-to-average-of-neighbors/
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var rearrangeArray = function(nums) {
  nums.sort((a, b) => a - b)
  let r = 0

  let arr = Array(nums.length).fill(0)
  while (r < nums.length) {
    for (let i = 0; i < nums.length; i += 2) {
      arr[i] = nums[r]
      r++
    }

    for (let i = 1; i < nums.length; i += 2) {
      arr[i] = nums[r]
      r++
    }
  }
  return arr
};

const main = () => {
  nums = [1,2,3,4,5]
  console.log('Rearranged array is ', rearrangeArray(nums))

  nums = [6,2,0,9,7]
  console.log('Rearranged array is ', rearrangeArray(nums))
}

main()