// https://leetcode.com/problems/longest-substring-without-repeating-characters/

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  if (s.length == 0) {
    return 0
  }

  let windowMap = {}
  let wStart = 0
  let flag = false
  let max = -Infinity
  for (let wEnd = 0; wEnd < s.length; wEnd++) {
    let inChar = s[wEnd]
    if (inChar in windowMap && windowMap[inChar] > 0) {
      flag = true
    }
    windowMap[inChar] = (windowMap[inChar] || 0) + 1
    while (flag) {
      console.log('came in ', windowMap)
      let outChar = s[wStart]
      if (windowMap[outChar] > 1) {
        flag = false
      }
      windowMap[outChar]--
      wStart++
      console.log('came out ', windowMap, flag)
    }
    max = Math.max(max, wEnd - wStart + 1)
    // console.log(s.slice(wStart, wEnd + 1))
  }
  return max
}


var lengthOfLongestSubstring2 = function(s) {
  if (s.length == 0) {
    return 0
  }

  let windowSet = new Set()
  let wStart = 0
  let max = -Infinity
  for (let wEnd = 0; wEnd < s.length; wEnd++) {
    while (windowSet.has(s[wEnd])) {
      windowSet.delete(s[wStart])
      wStart++
    }
    windowSet.add(s[wEnd])
    max = Math.max(max, wEnd - wStart + 1)
    // console.log(s.slice(wStart, wEnd + 1))
  }
  return max
}

const main = () => {
  s = "abcabcbb"
  console.log('Length of the longest uniq substring is ', lengthOfLongestSubstring2(s))

  s = "bbbbb"
  console.log('Length of the longest uniq substring is ', lengthOfLongestSubstring2(s))

  s = "pwwkew"
  console.log('Length of the longest uniq substring is ', lengthOfLongestSubstring2(s))

  s = "abba"
  console.log('Length of the longest uniq substring is ', lengthOfLongestSubstring2(s))
}

main()