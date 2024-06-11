/**
 * https://leetcode.com/problems/longest-turbulent-subarray
 * @param {number[]} arr
 * @return {number}
 */
const maxTurbulenceSize = function (arr) {
  let l = 0; let r = 1
  let prev = ''
  let res = 1
  while (r < arr.length) {
    if (arr[r - 1] < arr[r] && prev != '<') {
      res = Math.max(res, r - l + 1)
      prev = '<'
      r++
    } else if (arr[r - 1] > arr[r] && prev != '>') {
      res = Math.max(res, r - l + 1)
      prev = '>'
      r++
    } else {
      prev = ''
      // if same, then move r to the next unique char
      r = arr[r] == arr[r - 1] ? r + 1 : r
      // l is always 1 less than r for the window
      l = r - 1
    }
  }
  return res
}
