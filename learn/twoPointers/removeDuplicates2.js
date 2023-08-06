// https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii/
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  let w = 0, r = 0
  let count

  while (r < nums.length) {
    count = 1
    while (r + 1 < nums.length && nums[r] == nums[r + 1]) {
      r++
      count++
    }

    for (let i = 0 ; i < Math.min(2, count); i++) {
      nums[w] = nums[r]
      w++
    }
    r++
  }
  // console.log(nums)
  return w
};

const main = () => {
  nums = [1,1,1,2,2,3]
  console.log('in place replacement and write count is ', removeDuplicates(nums))
}

main()