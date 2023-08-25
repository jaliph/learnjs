// https://leetcode.com/problems/maximum-product-subarray/

/**
 * @param {number[]} nums
 * @return {number}
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
  let min = 1, max = 1
  let res = Math.max(...nums)
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == 0) {
      min = 1
      max = 1
      continue
    }
    let temp =  max * nums[i]
    max = Math.max(max * nums[i], min * nums[i], nums[i])
    min = Math.min(min * nums[i], temp, nums[i])
    
    res = Math.max(res, max)
  }

  return res
};

const main = () => {
  nums = [2,3,-2,4]
  console.log('Maximum product sub array is .. ', maxProduct(nums))

  nums = [-2,0,-1]
  console.log('Maximum product sub array is .. ', maxProduct(nums))
}

main()