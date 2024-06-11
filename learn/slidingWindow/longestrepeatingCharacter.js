// https://leetcode.com/problems/longest-repeating-character-replacement/

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
const characterReplacement = function (s, k) {
  let wStart = 0
  const window = {}

  // const maxCount = () => {
  //   let maxCharCount = 0
  //   for (let cnt of Object.values(window)) {
  //     maxCharCount = Math.max(maxCharCount, cnt)
  //   }
  //   return maxCharCount
  // }

  let maxCharCount = 0
  let max = -Infinity
  for (let wEnd = 0; wEnd < s.length; wEnd++) {
    const inChar = s[wEnd]

    window[inChar] = (window[inChar] || 0) + 1
    maxCharCount = Math.max(maxCharCount, window[inChar])

    while (((wEnd - wStart + 1) - maxCharCount) > k) {
      const outChar = s[wStart]
      window[outChar]--
      wStart++
    }

    max = Math.max(max, (wEnd - wStart + 1))
  }
  return max
}

const main = () => {
  s = 'ABAB', k = 2
  console.log('Longest repeating character with replacement ', characterReplacement(s, k))

  s = 'AABABBA', k = 1
  console.log('Longest repeating character with replacement ', characterReplacement(s, k))
}

main()
