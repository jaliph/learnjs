// https://leetcode.com/problems/maximum-product-of-the-length-of-two-palindromic-subsequences/

/**
 * @param {string} s
 * @return {number}
 */
const maxProduct = function (s) {
  const isPalindDrome = (s) => {
    let l = 0
    let r = s.length - 1
    while (l <= r) {
      if (s[l] !== s[r]) {
        return false
      }
      l++
      r--
    }
    return true
  }

  const N = 1 << s.length
  const map = new Map()

  for (let i = 1; i < N; i++) {
    let substr = ''
    for (let j = 0; j < s.length; j++) {
      if ((1 << j) & i) {
        substr += s[j]
      }
    }
    if (isPalindDrome(substr)) {
      map.set(i, substr.length)
    }
  }

  let res = 0
  for (const i of map.keys()) {
    for (const j of map.keys()) {
      if ((i & j) === 0) {
        res = Math.max(res, map.get(i) * map.get(j))
      }
    }
  }

  return res
}

const main = () => {
  s = 'leetcodecom'
  console.log('The max product of length of two distnct palindrom subsequnce are ', maxProduct(s))

  s = 'bb'
  console.log('The max product of length of two distnct palindrom subsequnce are ', maxProduct(s))
}

main()
