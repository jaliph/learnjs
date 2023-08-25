// https://leetcode.com/problems/decode-ways/

/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(s) {
  const dp = new Map()
  dp.set(s.length, 1)

  for (let i = s.length - 1; i >= 0 ; i--) {
    if (s[i] == '0') {
      dp.set(i, 0)
    } else {
      dp.set(i, dp.get(i + 1))
    }

    if (i + 1 < s.length && ((s[i] == '2' && s[i + 1] >= 0 && s[i + 1] <= 6) || (s[i] == '1')) ) {
      dp.set(i, dp.get(i) + dp.get(i + 2))
    }
  }

  return dp.get(0)
};