// https://leetcode.com/problems/check-if-a-string-contains-all-binary-codes-of-size-k/

/**
 * @param {string} s
 * @param {number} k
 * @return {boolean}
 */
var hasAllCodes = function(s, k) {
  let set = new Set()
  let str
  let wStart = 0
  for (let wEnd = 0; wEnd < s.length; wEnd++) {
    if (wEnd >= k - 1) {
      str = s.slice(wStart, wEnd + 1)
      set.add(str)
      if (set.size === (1 << k)) {
        return true
      }
      wStart++
    }
  }
  return false
};

const main = () => {
  s = "00110110", k = 2
  console.log('contains all the binary combindation is size ', hasAllCodes(s, k))

  s = "0110", k = 1
  console.log('contains all the binary combindation is size ', hasAllCodes(s, k))

  s = "0110", k = 2
  console.log('contains all the binary combindation is size ', hasAllCodes(s, k))
}

main()