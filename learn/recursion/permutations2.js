// https://leetcode.com/problems/permutations-ii/
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
  let numCount = nums.reduce((prev, curr) => {
    prev.set(curr, (prev.get(curr) || 0) + 1)
    return prev
  }, new Map())

  
  const results = []
  let perms = []
  const permute = () => {
    if (e.length == nums.length) {
      results.push([...perms])
      return
    }

    for (let n of numCount.keys()) {
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