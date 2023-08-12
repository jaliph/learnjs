// https://leetcode.com/problems/single-element-in-a-sorted-array/

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function(nums) {
  let l = 0 
  let r = nums.length - 1
  let mid, leftLength
  while (l <= r) {
    mid = l + ~~((r - l) / 2)
    if ((mid - 1 < 0 || nums[mid - 1] != nums[mid]) && (mid + 1 >= nums.length || nums[mid] != nums[mid + 1])) {
      return nums[mid]
    }

    leftLength = nums[mid - 1] === nums[mid] ? mid - 1 : mid

    if (leftLength % 2 == 0) {
      l = mid + 1
    } else {
      r = mid - 1
    }
  }
};

const main = () => {
  nums = [1,1,2,3,3,4,4,8,8]
  console.log('single element is ', singleNonDuplicate(nums))
}

main()