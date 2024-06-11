/**
 * https://leetcode.com/problems/regular-expression-matching/
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
const isMatch = function (s, p) {
  const dp = new Map()
  const matchRecur = (i, j) => {
    if (i == s.length && j == p.length) {
      return true
    }

    if (j >= p.length) {
      return false
    }

    const key = `${i}#${j}`

    if (dp.has(key)) {
      return dp.get(key)
    }

    const match = i < s.length && (s[i] === p[j] || p[j] === '.')
    if ((j + 1) < p.length && p[j + 1] === '*') {
      dp.set(key, matchRecur(i, j + 2) || (match && matchRecur(i + 1, j)))
      return dp.get(key)
    }

    if (match) {
      dp.set(key, matchRecur(i + 1, j + 1))
      return dp.get(key)
    }

    dp.set(key, false)
    return false
  }

  return matchRecur(0, 0)
}
