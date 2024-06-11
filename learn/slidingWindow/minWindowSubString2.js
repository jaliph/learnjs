// https://leetcode.com/problems/minimum-window-substring/

/**
 * @param s: a string
 * @param t: a string
 * @return: the minimum substring of S
 */
const minWindow = (s, t) => {
  let len = t.length

  const charMap = [...t].reduce((prev, key) => {
    prev[key] = (prev[key] || 0) + 1
    return prev
  }, {})

  let wStart = 0
  let max = Infinity
  let start = -1; let end = -1

  for (let wEnd = 0; wEnd < s.length; wEnd++) {
    const incominChar = s[wEnd]
    if (charMap[incominChar] > 0) {
      len--
    }
    charMap[incominChar]--

    while (!len) {
      if (wEnd - wStart < max) {
        start = wStart
        end = wEnd
        max = wEnd - wStart
      }

      const outGoingChar = s[wStart]
      if (charMap[outGoingChar] >= 0) {
        len++
      }

      charMap[outGoingChar]++
      wStart++
    }
  }

  return s.slice(start, end + 1)
}

const main = () => {
  s = 'ADOBECODEBANC', t = 'ABC'
  console.log('minWind to contain T is ', minWindow(s, t))

  s = 'a', t = 'a'
  console.log('minWind to contain T is ', minWindow(s, t))

  s = 'a', t = 'aa'
  console.log('minWind to contain T is ', minWindow(s, t))
}

main()
