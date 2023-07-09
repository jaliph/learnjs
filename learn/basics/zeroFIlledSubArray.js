// https://leetcode.com/problems/number-of-zero-filled-subarrays/
/**
 * @param {number[]} nums
 * @return {number}
 */
var zeroFilledSubarray = function(nums) {
  
  let res = 0
  let count = 0
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == 0) {
      count++
      res += count
      while (i + 1 < nums.length && nums[i + 1] == 0) {
        i++
        count++
        res += count
      }
      count = 0
    }
  }

  return res
};


const main = () => {
  nums = [1,3,0,0,0,0]
  console.log('Count of zero arrays', zeroFilledSubarray(nums))
}

main()