// https://leetcode.com/problems/shortest-unsorted-continuous-subarray/

/**
 * @param {number[]} nums
 * @return {number}
 */
const findUnsortedSubarray = function (nums) {
  const outOfOrder = (arr, i) => {
    if (i == 0) return arr[i] > arr[1]
    else if (i == arr.length - 1) return arr[i] < arr[i - 1]
    else {
      return arr[i] > arr[i + 1] || arr[i] < arr[i - 1]
    }
  }
  let minAnomaly = Infinity
  let maxAnomaly = -Infinity

  if (nums.length == 1) {
    return 0
  }

  for (let i = 0; i < nums.length; i++) {
    if (outOfOrder(nums, i)) {
      minAnomaly = Math.min(minAnomaly, nums[i])
      maxAnomaly = Math.max(maxAnomaly, nums[i])
    }
    // else {
    //   console.log(nums[i - 1],nums[i], '|', nums[i], nums[i + 1])
    // }
  }
  // console.log(minAnomaly, maxAnomaly)
  if (minAnomaly == Infinity) return 0
  let i = 0
  while (nums[i] <= minAnomaly) {
    i++
  }

  let j = nums.length - 1
  while (nums[j] >= maxAnomaly) {
    j--
  }

  return j - i + 1
}

console.log(findUnsortedSubarray([2, 1, 1, 1, 1]))
console.log(findUnsortedSubarray([2, 1]))
console.log(findUnsortedSubarray([1, 2, 3, 4, 5, 7, 6, 8, 9, 10, 11]))
console.log(findUnsortedSubarray([2, 6, 4, 8, 10, 9, 15]))
