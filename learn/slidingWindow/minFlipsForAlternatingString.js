// https://leetcode.com/problems/minimum-number-of-flips-to-make-the-binary-string-alternating/

/**
 * @param {string} s
 * @return {number}
 */
var minFlips = function(s) {
  const len = s.length
  s = s + s

  let alt1 = "", alt2 = ""
  for (let i = 0; i < s.length; i++) {
    if ((i & 1) === 0) {
      alt1 += "1"
      alt2 += "0"
    } else {
      alt1 += "0"
      alt2 += "1"
    }
  }

  let diff1 = 0
  let diff2 = 0
  let res = Infinity

  let wStart = 0
  for (let wEnd = 0; wEnd < s.length; wEnd++) {
    if (s[wEnd] != alt1[wEnd]) {
      diff1++
    }
    if (s[wEnd] != alt2[wEnd]) {
      diff2++
    }

    if ((wEnd - wStart + 1) > len) {
      if (s[wStart] != alt1[wStart]) {
        diff1--
      }
      if (s[wStart] != alt2[wStart]) {
        diff2--
      }
      wStart++
    }

    if ((wEnd - wStart + 1) === len) {
      res = Math.min(res, diff1, diff2)
    }
  }

  return res
}

const main = () => {
  s = "111000"
  console.log('Min Flips required are ', minFlips(s))

  s = "010"
  console.log('Min Flips required are ', minFlips(s))

  s = "1110"
  console.log('Min Flips required are ', minFlips(s))

  s = "01001001101"
  console.log('Min Flips required are ', minFlips(s))
}

main()