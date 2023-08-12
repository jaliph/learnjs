// https://leetcode.com/problems/search-in-rotated-sorted-array/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
  let l = 0
  let r = nums.length - 1

  let mid
  while (l <= r) {
    mid = l + ~~((r - l) / 2)

    if (nums[mid] === target) {
      return mid
    }

    // left section is sorted
    if (nums[l] <= nums[mid]) {
      if (target > nums[mid] || target < nums[l]) {
        l = mid + 1
      } else {
        r = mid - 1
      }
    // right section is having pivot... doesnt matter  
    } else {
      if (target < nums[mid] || target > nums[r]) {
        r = mid - 1
      } else {
        l = mid + 1
      }
    }
  }

  return -1 
};


const main = () => {
  nums = [4,5,6,7,0,1,2], target = 0
  console.assert(search(nums, target) === 4 ? true : false)
}

main()