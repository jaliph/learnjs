// https://leetcode.com/problems/contiguous-array/

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxLength = function(nums) {
  let m = {'0': -1 }

  let max = -Infinity

  let zeros = 0
  let ones = 0

  for (let i in nums) {
    let n = nums[i]
    if (n == 0) {
      zeros++
    } else {
      ones++
    }
    let key = ones - zeros
    if (m[key]) {
      let idx = m[key]
      max = Math.max(max, i - idx)
    } else {
      m[key] = i
    }
  }
  return max == -Infinity ? 0 : max
};


const main = () => {
  console.log('Test -- ', findMaxLength([0, 1]))
}

main()