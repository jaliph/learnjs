// https://leetcode.com/problems/combinations

/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
  let results = []
  const combineRecur = (i, set) => {
    if (set.length == k) {
      results.push([...set])
      return
    }

    for (let j = i; j <= n; j++) {
      // include
      combineRecur(j + 1, [...set, j])
    }
  }

  combineRecur(1, [])
  return results
};

