// https://leetcode.com/problems/maximum-number-of-removable-characters/

/**
 * @param {string} s
 * @param {string} p
 * @param {number[]} removable
 * @return {number}
 */
const maximumRemovals = function (s, p, removable) {
  const isSubsequence = (s, p, rems) => {
    let i = 0; j = 0
    while (i < s.length && j < p.length) {
      if (rems.has(i) || s[i] !== p[j]) {
        i++
        continue
      }
      i++
      j++
    }
    return j === p.length
  }

  let l = 0
  let r = removable.length - 1
  let res = 0
  let mid
  while (l <= r) {
    mid = l + ~~((r - l) / 2)
    if (isSubsequence(s, p, new Set(removable.slice(0, mid + 1)))) {
      res = Math.max(res, mid - l + 1)
      l = mid + 1
    } else {
      r = mid - 1
    }
  }

  return res
}

const main = () => {
  s = 'abcacb', p = 'ab', removable = [3, 1, 0]
  console.log('max remove of chars to keep p as subseq for s ', maximumRemovals(s, p, removable))

  s = 'abcbddddd', p = 'abcd', removable = [3, 2, 1, 4, 5, 6]
  console.log('max remove of chars to keep p as subseq for s ', maximumRemovals(s, p, removable))

  s = 'abcab', p = 'abc', removable = [0, 1, 2, 3, 4]
  console.log('max remove of chars to keep p as subseq for s ', maximumRemovals(s, p, removable))
}

main()
