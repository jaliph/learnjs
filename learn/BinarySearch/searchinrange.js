// https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
  let res = [-1, -1]

  // Find start
  let l = 0, r = nums.length

  let mid
  while (l < r) {
    mid = l + ~~((r - l) / 2)

    if (target > nums[mid]) {
      l = mid + 1
    } else {
      r = mid
    }
  }

  if (nums[l] !== target) {
    return [-1, -1]
  }

  res[0] = l

  l = 0, r = nums.length
  while (l <= r) {
    mid = l + ~~((r - l) / 2)
    if (target == nums[mid]) {
      l = mid + 1
    } else if (target > nums[mid]) {
      l = mid + 1
    } else {
      r = mid - 1
    }
  }
  
  res[1] = r

  return res
};

const main = () => {
  nums = [5,7,7,8,8,10], target = 8
  console.log('Range. is ', searchRange(nums, target))

  nums = [5,7,7,8,8,10], target = 6
  console.log('Range. is ', searchRange(nums, target))
  
  nums = [5,6,7,7,8,8,10], target = 6
  console.log('Range. is ', searchRange(nums, target))

  nums = [5,6,7,7,8,8,9,10], target = 9
  console.log('Range. is ', searchRange(nums, target))

  nums = [5,6,7,7,8,8,9,10,11,11,11], target = 11
  console.log('Range. is ', searchRange(nums, target))
}

main()