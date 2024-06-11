/**
 * https://leetcode.com/problems/partition-labels/
 * @param {string} s
 * @return {number[]}
 */
const partitionLabels = function (s) {
  const charMap = new Map()
  for (let i = 0; i < s.length; i++) {
    charMap.set(s[i], i)
  }

  const res = []
  let size = 0
  let end = 0
  for (let i = 0; i < s.length; i++) {
    size++
    end = Math.max(end, charMap.get(s[i]))
    if (i === end) {
      res.push(size)
      size = 0
    }
  }

  return res
}
