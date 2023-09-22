/**
 * https://leetcode.com/problems/is-subsequence
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    
  const isSubSeq = (i, j) => {
    console.log(i, j)
    if (i === s.length) {
      return true
    }

    if (j === t.length) {
      return false
    }

    if (s[i] === t[j]) {
      return isSubSeq(i + 1, j + 1)
    } else {
      return isSubSeq(i, j + 1)
    }
  }

  return isSubSeq(0, 0)
};


const main = () => {
  s = "abc", t = "ahbgdc"
  console.log(isSubsequence(s, t))
}

main()