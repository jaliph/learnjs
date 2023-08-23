// https://leetcode.com/problems/permutations
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute1 = function(nums) {
  const perms = (nums) => {
    if (nums.length === 1) {
      return [[...nums]]
    }
    let result = []
    for (let j = 0; j < nums.length; j++) {
      let n = nums.shift()
      let permutates = perms(nums)
      for (let p of permutates) {
        p.push(n)
        result.push(p)
      }
      // back track
      nums.push(n)
    }
    return result
  }
  return perms(nums)
};


var permute = function(nums) {
  let len = nums.length
  let results = []
  let perms = []
  const pRecur = () => {
    if (perms.length == len) {
      results.push([...perms])
      return
    }
    for (let j = 0; j < nums.length; j++) {
      let n = nums.shift()
      perms.push(n)
      pRecur()
      perms.pop()
      nums.push(n)
    }
  }
  pRecur()

  return results
};

console.log(permute([1, 2, 3]))