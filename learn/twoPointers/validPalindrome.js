// https://leetcode.com/problems/valid-palindrome/

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  s = [...s].filter((char) => {
    return (char.charCodeAt(0) >= 97 && char.charCodeAt(0) <= 122) || (char.charCodeAt(0) >= 65 && char.charCodeAt(0) <= 90) || (char.charCodeAt(0) >= 48 && char.charCodeAt(0) <= 57) 
  }).join('').toLowerCase()
  
  const isPalindromeRecursive = (s, l, r) => {
    if (l >= r) {
      return true
    }

    if (s[l] != s[r]) {
      return false
    }
    return isPalindromeRecursive(s, l + 1, r - 1)
  }

  return isPalindromeRecursive(s, 0, s.length - 1)
};

const main = () => {
  s = "A man, a plan, a canal: Panama"
  console.log('Is a valid Palindrome .. ?', isPalindrome(s))

  s = "race a car"
  console.log('Is a valid Palindrome .. ?', isPalindrome(s))

  s = " "
  console.log('Is a valid Palindrome .. ?', isPalindrome(s))

  s = "0P"
  console.log('Is a valid Palindrome .. ?', isPalindrome(s))
}

main()