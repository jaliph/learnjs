function isPalindrome(testVariable) {
  if (testVariable.length <= 1) return true
  if (testVariable[0] == testVariable[testVariable.length - 1]) {
    return isPalindrome(testVariable.substring(1, testVariable.length - 1))
  }
  return false
}


console.log(isPalindrome("string"))
