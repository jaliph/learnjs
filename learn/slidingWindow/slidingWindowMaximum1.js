// https://leetcode.com/problems/sliding-window-maximum/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
const maxSlidingWindow = function (nums, k) {
  const binaryInsertion = (nums, target) => {
    let left = 0
    let right = nums.length - 1
    while (left <= right) {
      const mid = left + Math.floor((right - left) / 2)
      if (nums[mid] === target) {
        left = mid
        break
      } else if (nums[mid] > target) {
        left = mid + 1
      } else {
        right = mid - 1
      }
    }
    nums.splice(left, 0, target)
  }

  const binaryDeletion = (nums, target) => {
    let left = 0
    let right = nums.length - 1
    while (left <= right) {
      const mid = left + Math.floor((right - left) / 2)
      if (nums[mid] === target) {
        left = mid
        break
      } else if (nums[mid] > target) {
        left = mid + 1
      } else {
        right = mid - 1
      }
    }
    nums.splice(left, 1)
  }

  const results = []
  let wStart = 0
  const window = []
  for (let wEnd = 0; wEnd < nums.length; wEnd++) {
    binaryInsertion(window, nums[wEnd])
    if (wEnd >= k - 1) {
      console.log(window)
      results.push(window[0])
      binaryDeletion(window, nums[wStart])
      wStart++
    }
  }

  return results
}

const main = () => {
  nums = [1, 3, -1, -3, 5, 3, 6, 7], k = 3
  console.log('the sliding window maximum for them is ', maxSlidingWindow(nums, k))
}

main()
