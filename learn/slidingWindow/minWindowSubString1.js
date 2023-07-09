// https://leetcode.com/problems/minimum-window-substring/

/**
 * @param s: a string
 * @param t: a string
 * @return: the minimum substring of S
 */
const minWindow = (s, t) => {
  let map = [...t].reduce((obj, k) => {
    obj[k] = (obj[k] || 0) + 1
    return obj
  }, {})

  let charSet = new Set([...t])

  const removeFromMap = (m, ch) => {
    if (m[ch]) {
      m[ch]--
      if (m[ch] == 0) delete m[ch]
    }
  }

  const addToMap = (m, ch) => {
    m[ch] = (m[ch] || 0) + 1
  }

  const contains = (m1, m2) => {
    for (let i in m2) {
      if (!m1[i]) {
        return false
      }
      if (m1[i] < m2[i]) {
        return false
      }
    }
    return true
  }

  let wStart = 0
  let windowMap = {}
  let start = -1
  let end = -1
  let maxLength = Infinity
  for (let wEnd = 0; wEnd < s.length; wEnd++) {
    if (charSet.has(s[wEnd])) {
      addToMap(windowMap, s[wEnd])
    }
    while (contains(windowMap, map)) {
      let outGoing = s[wStart]

      if (wEnd - wStart + 1 < maxLength) {
        maxLength = wEnd - wStart + 1
        start = wStart
        end = wEnd
      }

      if (charSet.has(outGoing)) {
        removeFromMap(windowMap, outGoing)
      }
      wStart++
    }
  }

  return s.slice(start, end + 1)
}

const main = () => {
  s = "ADOBEC ODEBANC", t = "ABC"
  console.log('minWind to contain T is ', minWindow(s, t))

  s = "a", t = "a"
  console.log('minWind to contain T is ', minWindow(s, t))

  s = "a", t = "aa"
  console.log('minWind to contain T is ', minWindow(s, t))
}

main()

