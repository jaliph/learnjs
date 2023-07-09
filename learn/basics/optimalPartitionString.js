// https://leetcode.com/problems/optimal-partition-of-string/

/**
 * @param {string} s
* @return {number}
*/
var partitionString = function(s) {
  let set = new Set()
  let count = 1
  for (let c of s) {
    if (set.has(c)) {
      count++
      set.clear()
    }
    set.add(c)
  }
  return count
}

const main = () => {
  s = "abacaba"
  console.log('number of unique sets are ', partitionString(s))
}

main()