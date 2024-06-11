// https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/

/**
 * @param {number[]} nums
 * @return {number}
 */
const findMin = function (nums) {
  let res = nums[0]
  let l = 0; let r = nums.length - 1

  let mid
  while (l < r) {
    // if there is a sorted sections
    if (nums[l] < nums[r]) {
      res = Math.min(res, nums[l])
      break
    }

    mid = l + ~~((r - l) / 2)
    res = Math.min(res, nums[mid])

    if (nums[mid] >= nums[l]) {
      l = mid + 1
    } else {
      r = mid
    }
  }

  return res
}

const main = () => {
  nums = [3, 4, 5, 1, 2]
  console.log('Min in a rotated array is ', findMin(nums))
}

main()
