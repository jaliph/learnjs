// https://leetcode.com/problems/subsets

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
  const result = []
  const subsetRecur = (i, set) => {
    // base
    if (i == nums.length) {
      // console.log(set)
      result.push(set)
      return
    }

    // don't include i
    subsetRecur(i + 1, [...set])
    // include i
    subsetRecur(i + 1, [...set, nums[i]])
  }
  subsetRecur(0, [])
  return result
}

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
  const result = [[]]

  for (const n of nums) {
    const len = result.length
    for (let j = 0; j < len; j++) {
      const clone = [...result[j]]
      clone.push(n)
      result.push(clone)
    }
  }

  return result
}

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
  const N = 1 << nums.length

  const result = []
  for (let i = 0; i < N; i++) {
    const iter = []
    for (let j = 0; j < nums.length; j++) {
      if (i & (1 << j)) {
        iter.push(nums[j])
      }
    }
    result.push(iter)
  }
  return result
}

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
  const result = []
  const subset = []
  const subsetRecur = (i) => {
    // base
    if (i == nums.length) {
      // console.log(set)
      result.push([...subset])
      return
    }

    // include i
    subset.push(nums[i])
    subsetRecur(i + 1)

    // don't include i
    subset.pop()
    subsetRecur(i + 1)
  }
  subsetRecur(0)
  return result
}
