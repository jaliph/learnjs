// https://leetcode.com/problems/permutations-ii/
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const permuteUnique = function (nums) {
  const numCount = nums.reduce((prev, curr) => {
    prev.set(curr, (prev.get(curr) || 0) + 1)
    return prev
  }, new Map())

  const results = []
  const perms = []
  const permute = () => {
    if (perms.length == nums.length) {
      results.push([...perms])
      return
    }

    for (const n of numCount.keys()) {
      if (numCount.get(n) > 0) {
        perms.push(n)
        numCount.set(n, numCount.get(n) - 1)
        permute()

        perms.pop()
        numCount.set(n, numCount.get(n) + 1)
      }
    }
  }

  permute()
  return results
}
