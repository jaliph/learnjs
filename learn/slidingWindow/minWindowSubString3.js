// https://leetcode.com/problems/minimum-window-substring/

/**
 * @param s: a string
 * @param t: a string
 * @return: the minimum substring of S
 */
const minWindow = (s, t) => {
  // boundary checks
  if (t === "") return ""

  let tMap = [...t].reduce((obj, k) => {
    obj[k] = (obj[k] || 0) + 1
    return obj
  }, {})

  let have = 0, need = Object.keys(tMap).length
  let res = [-1, -1], reslen = Infinity
  let wStart = 0
  let window = {}
  for (let wEnd = 0; wEnd < s.length; wEnd++) {
    let c = s[wEnd]
    window[c] = (window[c] || 0) + 1


    if (c in tMap && window[c] == tMap[c]) {
      have++
    }

    while (have === need) {
      // update the result
      // console.log(have, need, s.slice(wStart, wEnd + 1))
      if (wEnd - wStart + 1 < reslen) {
        res = [wStart, wEnd]
        reslen = wEnd - wStart + 1
      }

      // remove the chars from wStart
      let outChar = s[wStart]
      window[outChar]--
      if (outChar in tMap && window[outChar] < tMap[outChar]) {
        have--
      }
      wStart++
    }
  }
  return reslen === Infinity ? "" : s.slice(res[0], res[1] + 1)
}

const main = () => {
  s = "ADOBECODEBANC", t = "ABC"
  console.log('minWind to contain T is ', minWindow(s, t))

  s = "a", t = "a"
  console.log('minWind to contain T is ', minWindow(s, t))

  s = "a", t = "aa"
  console.log('minWind to contain T is ', minWindow(s, t))
}

main()

