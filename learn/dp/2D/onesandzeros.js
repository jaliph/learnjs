/**
 * https://leetcode.com/problems/ones-and-zeroes
 * @param {string[]} strs
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var findMaxForm = function(strs, m, n) {
  const dp = new Map()
  const findMaxRecur = (i, m, n) => {
    if (i == strs.length) {
      return 0
    }

    let key = `${i}#${m}#${n}`

    if (dp.has(key)) {
      return dp.get(key)
    }

    // dnt pick ith
    dp.set(key, findMaxRecur(i + 1, m, n))

    let mCnt = strs[i].split('').filter((i) => i === '0').length
    let nCnt = strs[i].split('').filter((i) => i === '1').length
    // pick ith
    // i can only pick if possible
    if (mCnt <= m && nCnt <= n) {
       dp.set(key, Math.max(
            dp.get(key), 1 + findMaxRecur(i + 1, m - mCnt, n - nCnt)
          )
       )
    }
    
    return dp.get(key)
  }

  return findMaxRecur(0, m, n)
};


/**
 * @param {string[]} strs
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var findMaxForm = function(strs, m, n) {

  const dp = Array(m + 1).fill().map(() => Array(n + 1).fill(0))

  for (let s of strs) {
    let mCnt = s.split('').filter((i) => i === '0').length
    let nCnt = s.split('').filter((i) => i === '1').length

    for (let M = m; M >= mCnt; M--) {
      for (let N = n; N >= nCnt; N--) {
        dp[M][N] = Math.max(dp[M][N], 1 + dp[M - mCnt][N - nCnt])
      }
    }
  }
  return dp[m][n]
}