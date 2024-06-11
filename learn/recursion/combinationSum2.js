// https://leetcode.com/problems/combination-sum-ii/

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates, target) {
  candidates = candidates.sort((a, b) => a - b)

  const results = []
  const findSubsets = (i, target, set) => {
    if (target === 0) {
      results.push([...set])
      return
    }

    if (target < 0) {
      return
    }

    if (i == candidates.length) {
      return
    }

    // include
    findSubsets(i + 1, target - candidates[i], [...set, candidates[i]])

    // skip duplicates before trying exlusion
    while (i + 1 < candidates.length && candidates[i] == candidates[i + 1]) {
      i++
    }
    findSubsets(i + 1, target, [...set])
  }

  findSubsets(0, target, [])
  return results
}

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates, target) {
  candidates = candidates.sort((a, b) => a - b)

  const results = []
  const set = []
  const findSubsets = (i, target) => {
    if (target === 0) {
      results.push([...set])
      return
    }

    if (target < 0) {
      return
    }

    if (i == candidates.length) {
      return
    }

    // include
    set.push(candidates[i])
    findSubsets(i + 1, target - candidates[i])
    set.pop()
    // skip duplicates before trying exlusion
    while (i + 1 < candidates.length && candidates[i] == candidates[i + 1]) {
      i++
    }
    findSubsets(i + 1, target)
  }

  findSubsets(0, target)
  return results
}

// More perfomant

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates, target) {
  candidates = candidates.sort((a, b) => a - b)

  const results = []
  const set = []
  const findSubsets = (i, target) => {
    if (target === 0) {
      results.push([...set])
      return
    }

    if (target < 0) {
      return
    }

    if (i == candidates.length) {
      return
    }

    let prev = -1
    for (let j = i; j < candidates.length; j++) {
      if (prev == candidates[j]) {
        continue
      }
      set.push(candidates[j])
      findSubsets(j + 1, target - candidates[j])
      set.pop()
      prev = candidates[j]
    }
  }

  findSubsets(0, target)
  return results
}
