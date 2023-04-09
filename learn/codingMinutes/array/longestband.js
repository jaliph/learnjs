
// https://leetcode.com/problems/longest-consecutive-sequence/

/**
 * @param {number[]} nums
 * @return {number}
 */
const longestConsecutive = function (nums) {
  const s = new Set()
  nums.forEach((i) => s.add(i))
  let result = 0
  for (const i of nums) {
    if (s.has(i - 1)) {
      continue
    } else {
      let cnt = 1
      let j = i
      while (s.has(j + 1)) {
        cnt++
        j++
      }
      result = Math.max(result, cnt)
    }
  }
  return result
}

console.log(longestConsecutive([100, 4, 200, 1, 3, 2]))
