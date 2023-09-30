/**
 * https://leetcode.com/problems/decoded-string-at-index
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var decodeAtIndex = function(s, k) {

  let i = 0
  while (k) {
    if (!isNaN(s[i])) {
      i = i - Number(s[i])
    }
    console.log(s[i])
    i++
    k--
  }
  console.log(i, k, s[i - 1])
  return s[i - 1]
};


const main = () => {
  s = "ha22", k = 5
  console.log('Char at Index... => ', decodeAtIndex(s, k))

  s = "a2345678999999999999999", k = 1
  console.log('Char at Index... => ', decodeAtIndex(s, k))

  s = "leet2code3", k = 10
  console.log('Char at Index... => ', decodeAtIndex(s, k))
}

main()