// https://leetcode.com/problems/valid-palindrome-ii/

/**
 * @param {string} s
 * @return {boolean}
 */
const validPalindrome = function (s) {
  const isPalindrome = (s, l, r) => {
    if (l >= r) {
      return true
    }
    if (s[l] != s[r]) {
      return false
    }
    return isPalindrome(s, l + 1, r - 1)
  }

  let l = 0; let r = s.length - 1
  while (l < r) {
    if (s[l] != s[r]) {
      return isPalindrome(s, l + 1, r) || isPalindrome(s, l, r - 1)
    }
    l++
    r--
  }

  return true
}
