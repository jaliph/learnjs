// https://leetcode.com/problems/permutations
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const permute1 = function (nums) {
  const perms = (nums) => {
    if (nums.length === 1) {
      return [[...nums]]
    }
    const result = []
    for (let j = 0; j < nums.length; j++) {
      const n = nums.shift()
      const permutates = perms(nums)
      for (const p of permutates) {
        p.push(n)
        result.push(p)
      }
      // back track
      nums.push(n)
    }
    return result
  }
  return perms(nums)
}

const permute = function (nums) {
  const len = nums.length
  const results = []
  const perms = []
  const pRecur = () => {
    if (perms.length == len) {
      results.push([...perms])
      return
    }
    for (let j = 0; j < nums.length; j++) {
      const n = nums.shift()
      perms.push(n)
      pRecur()
      perms.pop()
      nums.push(n)
    }
  }
  pRecur()

  return results
}

console.log(permute([1, 2, 3]))
