// https://leetcode.com/problems/subsets-ii/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const subsetsWithDup = function (nums) {
  nums = nums.sort((a, b) => a - b)

  const results = []
  const subsets = (i, set) => {
    if (i === nums.length) {
      results.push([...set])
      return
    }

    // include i
    subsets(i + 1, [...set, nums[i]])

    // skip duplicates before excluding
    while (i + 1 < nums.length && nums[i] == nums[i + 1]) {
      i++
    }
    subsets(i + 1, [...set])
  }

  subsets(0, [])
  return results
}
