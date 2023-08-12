
const binarySearchRotated = function (nums, target) {
  let low = 0
  let high = nums.length - 1
  while (low <= high) {
    const mid = low + Math.floor((high - low) / 2)

    if (nums[mid] == target) return mid

    // the first part is sorted
    if (nums[low] <= nums[mid]) {
      if (nums[low] <= target && target < nums[mid]) {
        high = mid - 1
      } else {
        low = mid + 1
      }
    } else {
      if (nums[mid] < target && target <= nums[high]) {
        low = mid + 1
      } else {
        high = mid - 1
      }
    }
  }
  return -1
}

// console.log(binarySearchRotated)
