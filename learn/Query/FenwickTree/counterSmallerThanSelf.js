/**
 * https://leetcode.com/problems/count-of-smaller-numbers-after-self/
 * @param {number[]} nums
 * @return {number[]}
 */
const countSmaller = function (nums) {
  const inversionCounts = []

  const fn = Array(nums.length + 1).fill(0)

  const add = (i, val) => {
    i++
    while (i < fn.length) {
      fn[i] += val
      i += (i & -i)
    }
  }

  const sum = (l, r) => {
    const rangeSum = (i) => {
      i++
      let sum = 0
      while (i) {
        sum += fn[i]
        i -= (i & -i)
      }
      return sum
    }
    return rangeSum(r) - rangeSum(l - 1)
  }

  for (let i = 0; i < nums.length; i++) {
    nums[i] = [nums[i], i]
  }

  nums.sort((a, b) => a[0] - b[0])

  for (const p of nums) {
    const rightSum = sum(p[1], nums.length - 1)
    inversionCounts[p[1]] = rightSum
    add(p[1], 1)
  }

  return inversionCounts
}
