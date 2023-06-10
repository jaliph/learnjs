// https://leetcode.com/problems/contiguous-array/

/**
 * @param {number[]} nums
 * @return {number}
 */
const findMaxLength = function (nums) {
  const m = { 0: -1 }

  let max = -Infinity

  let zeros = 0
  let ones = 0

  for (const i in nums) {
    const n = nums[i]
    if (n == 0) {
      zeros++
    } else {
      ones++
    }
    const key = ones - zeros
    if (m[key]) {
      const idx = m[key]
      max = Math.max(max, i - idx)
    } else {
      m[key] = i
    }
  }
  return max == -Infinity ? 0 : max
}

const main = () => {
  console.log('Test -- ', findMaxLength([0, 1]))
}

main()
