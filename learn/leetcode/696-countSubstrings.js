/**
 * Input: s = "00110011"
Output: 6
Explanation: There are 6 substrings that have equal number of consecutive 1's and 0's: "0011", "01", "1100", "10", "0011", and "01".
Notice that some of these substrings repeat and are counted the number of times they occur.
Also, "00110011" is not a valid substring because all the 0's (and 1's) are not grouped together.
 */

/**
 * @param {string} s
 * @return {number}
 */
const countBinarySubstrings = function (s) {
  let ans = 0; let prev = 0; let curr = 1

  for (let i = 1; i < s.length; i++) {
    if (s[i - 1] !== s[i]) {
      console.log(prev, curr, i - 1, i)
      ans += Math.min(prev, curr)
      prev = curr
      curr = 1
    } else {
      curr++
    }
  }
  return ans + Math.min(prev, curr) // fill in for the last section
}

console.log(countBinarySubstrings('00110011'))
