
const findAllPalindromeinSubPositions = (inputString, j, k, result) => {
  while (j >= 0 && k < inputString.length) {
    if (inputString[j] === inputString[k]) {
      result.push(inputString.substring(j, k + 1))
      j--
      k++
    } else {
      break
    }
  }
}

const findAllPalindromeSubstrings = (inputString) => {
  const palindrome = []
  for (let i = 0; i < inputString.length; i++) {
    findAllPalindromeinSubPositions(inputString, i - 1, i + 1, palindrome)
    findAllPalindromeinSubPositions(inputString, i, i + 1, palindrome)
  }
  return palindrome
}

const palindrome = 'malam'

const palindromes = findAllPalindromeSubstrings(palindrome)
console.log('All palindrome substrings: ', palindromes)
