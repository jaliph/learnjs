// https://leetcode.com/problems/search-insert-position/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
  let l = 0
  let r = nums.length

  let mid
  while (l < r) {
    mid = l + ~~((r - l) / 2)
    if (target > nums[mid]) {
      l = mid + 1
    } else {
      r = mid
    }
  }
  return l
}

const main = () => {
  nums = [1,3,5,6], target = 5
  console.log('Index search position is ', searchInsert(nums, target))

  nums = [1,3,5,6], target = 2
  console.log('Index search position is ', searchInsert(nums, target))

  nums = [1,3,5,6], target = 7
  console.log('Index search position is ', searchInsert(nums, target))

  nums = [0, 1, 3], target = 2
  console.log('Index search position is ', searchInsert(nums, target))
}

main()