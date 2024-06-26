// https://leetcode.com/problems/unique-length-3-palindromic-subsequences/

/**
 * @param {string} s
 * @return {number}
 */
const countPalindromicSubsequence = function (s) {
  const res = new Set()
  const left = new Set()
  const right = [...s].reduce((prev, key) => {
    prev.set(key, (prev.get(key) || 0) + 1)
    return prev
  }, new Map())

  const aCode = 'a'.charCodeAt(0)

  for (const c of s) {
    right.set(c, right.get(c) - 1)

    for (let i = 0; i < 26; i++) {
      const alpha = String.fromCharCode(aCode + i)
      if (left.has(alpha) && right.get(alpha) > 0) {
        res.add(c + alpha)
      }
    }

    left.add(c)
  }

  return res.size
}
const main = () => {
  s = 'aabca'
  console.log('Uniq length of Palindromic Chars are ', countPalindromicSubsequence(s))
}

main()
