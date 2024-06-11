// https://leetcode.com/problems/sliding-window-median/

/**
 * @param {number[]} nums
* @param {number} k
* @return {number[]}
*/
const medianSlidingWindow = function (nums, k) {
  const arr = []
  const output = []
  const isEven = k % 2 === 0
  const m = k >> 1

  for (let i = 0; i < nums.length; i++) {
    binaryInsertion(arr, nums[i])

    if (arr.length > k) {
      binaryDeletion(arr, nums[i - k])
    }

    if (arr.length === k) {
      output.push(isEven ? (arr[m - 1] + arr[m]) / 2 : arr[m])
    }
  }

  return output
}

const binaryInsertion = (arr, target) => {
  let left = 0
  let right = arr.length

  while (left < right) {
    const mid = (left + right) >> 1

    if (target > arr[mid]) {
      left = mid + 1
    } else {
      right = mid
    }
  }

  arr.splice(left, 0, target)
}

const binaryDeletion = (arr, target) => {
  let left = 0
  let right = arr.length

  while (left < right) {
    const mid = (left + right) >> 1

    if (target === arr[mid]) {
      arr.splice(mid, 1)
      break
    } else if (target > arr[mid]) {
      left = mid + 1
    } else {
      right = mid
    }
  }
}

const main = () => {
  nums = [1, 3, -1, -3, 5, 3, 6, 7], k = 3
  console.log('sliding window median are ', medianSlidingWindow(nums, k))

  // nums = [1,2,3,4,2,3,1,4,2], k = 3
  // console.log('sliding window median are ', medianSlidingWindow(nums, k))
}

main()
