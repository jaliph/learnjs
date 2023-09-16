/**
 * https://leetcode.com/problems/greatest-common-divisor-of-strings/
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function(str1, str2) {
  
  let len1 = str1.length, len2 = str2.length

  const isDivisor = (i) => {
    
    if ((len1 % i) || (len2 % i)) {
      return false
    }

    let factor1 = len1 / i, factor2 = len2 / i
    return str1.slice(0, i).repeat(factor1) == str1 && str1.slice(0, i).repeat(factor2) == str2
  }

  for (let i = Math.min(len1, len2); i >= 1; i--) {
    if (isDivisor(i)) {
      return str1.slice(0, i)
    }
  }
  return ""
};