// https://leetcode.com/problems/longest-mountain-in-array/

/**
 * @param {number[]} arr
 * @return {number}
 */
const longestMountain = function (arr) {
  if (arr.length < 3) {
    return 0
  }

  let result = 0
  let i = 1
  while (i < arr.length - 1) {
    // i s a contender for a peak
    if (arr[i - 1] < arr[i] && arr[i] > arr[i + 1]) {
      let cnt = 1
      let j = i
      while (arr[j - 1] < arr[j] && j > 0) {
        j--
        cnt++
      }

      while (arr[i] > arr[i + 1] && i < arr.length - 1) {
        i++
        cnt++
      }
      result = Math.max(result, cnt)
    } else {
      i++
    }
  }
  return result
}
