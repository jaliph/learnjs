// https://leetcode.com/problems/palindromic-substrings/

/**
 * @param {string} s
 * @return {number}
 */
const countSubstrings = function (s) {
  let palins = 0
  const longestfromhere = (i, j) => {
    palins = 0
    while (i >= 0 && j < s.length && s[i] == s[j]) {
      palins++
      i--
      j++
    }
    return palins
  }

  let count = 0
  for (let i = 0; i < s.length; i++) {
    count += longestfromhere(i, i)
    count += longestfromhere(i, i + 1)
  }

  return count
}
