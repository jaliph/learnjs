// https://leetcode.com/problems/combination-sum

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
  const result = []
  const subset = []
  const findCombinations = (i, target) => {

    if (target === 0) {
      result.push([...subset])
      return
    }

    if (target < 0) {
      return
    }
    if (i >= candidates.length) {
      return
    }

    // include i
    subset.push(candidates[i])
    findCombinations(i, target - candidates[i])

    // dont include
    subset.pop()
    findCombinations(i + 1, target)
  }

  findCombinations(0, target)
  return result
}


/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
  let results = []
  const combinationsRecur = (index, result) => {
    if (result.length == k) {
        results.push(result)
        return
    }
    if (index > n) {
      return 
    }
  
    
    combinationsRecur(index + 1, [...result, index])
    combinationsRecur(index + 1, result)
  }
  combinationsRecur( 1, [])
  return results
};