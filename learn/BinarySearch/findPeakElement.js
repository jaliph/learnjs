// https://leetcode.com/problems/find-peak-element/

/**
 * @param {number[]} nums
 * @return {number}
 */
let findPeakElement = function (nums) {
  let l = 0
  let r = nums.length - 1

  let mid
  while (l <= r) {
    mid = l + ~~((r - l) / 2)
    // console.log(mid, l, r, nums[mid] > nums[mid + 1])
    if ((mid - 1 < 0 || nums[mid - 1] < nums[mid]) && (mid + 1 >= nums.length || nums[mid] > nums[mid + 1])) {
      return mid
    } else if ((mid - 1 < 0) || nums[mid] < nums[mid + 1]) {
      l = mid + 1
    } else {
      r = mid - 1
    }
  }
}

const main = () => {
  nums = [1, 2, 3, 1]
  console.log('Peak element index is ', findPeakElement(nums))

  nums = [1, 2]
  console.log('Peak element index is ', findPeakElement(nums))

  nums = [1, 2, 3]
  console.log('Peak element index is ', findPeakElement(nums))

  nums = [3, 4, 3, 2, 1]
  console.log('Peak element index is ', findPeakElement(nums))
}

main()
