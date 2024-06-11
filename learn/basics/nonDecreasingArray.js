// https://leetcode.com/problems/non-decreasing-array/

/**
 * @param {number[]} nums
* @return {boolean}
*/
const checkPossibility = function (nums) {
  let changed = false

  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] <= nums[i + 1]) {
      continue
    }

    if (changed) {
      return false
    }

    if (nums[i] > nums[i + 1]) {
      // [2, 5, 4]
      // i - 1, i, i + 1
      if (i == 0 || nums[i - 1] <= nums[i + 1]) {
        nums[i] = nums[i + 1]
      } else {
        nums[i + 1] = nums[i]
      }
      changed = true
    }
  }

  return true
}

const main = () => {
  nums = [4, 2, 3]
  console.log('With 1 modification, can it be non decreasing', checkPossibility(nums))

  nums = [4, 2, 1]
  console.log('With 1 modification, can it be non decreasing', checkPossibility(nums))
}

main()
