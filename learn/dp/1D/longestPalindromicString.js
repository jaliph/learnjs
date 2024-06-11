// https://leetcode.com/problems/longest-palindromic-substring/

/**
 * @param {string} s
 * @return {string}
 */
const longestPalindrome = function (s) {
  let maxlen = 0

  let word = ''

  const longestfromhere = (i, j) => {
    while (i >= 0 && j < s.length && s[i] == s[j]) {
      if (j - i + 1 > maxlen) {
        maxlen = j - i + 1
        word = s.slice(i, j + 1)
      }
      i--
      j++
    }
  }

  for (let i = 0; i < s.length; i++) {
    longestfromhere(i, i)
    longestfromhere(i, i + 1)
  }

  return word
}
