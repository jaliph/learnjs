// https://leetcode.com/problems/permutation-in-string/

/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
const checkInclusion = function (s1, s2) {
  let len = s1.length

  const charMap = [...s1].reduce((old, key) => {
    old[key] = (old[key] || 0) + 1
    return old
  }, {})

  let wStart = 0
  for (let wEnd = 0; wEnd < s2.length; wEnd++) {
    const incominChar = s2[wEnd]
    if (charMap[incominChar] > 0) {
      len--
    }
    charMap[incominChar]--

    if (len == 0) {
      return true
    }

    if (wEnd >= s1.length - 1) { // wEnd - wStart == s1.length
      // console.log(s2.slice(wStart, wEnd + 1))
      const outGoingChar = s2[wStart]
      if (charMap[outGoingChar] >= 0) {
        len++
      }
      charMap[outGoingChar]++
      wStart++
    }
  }

  return false
}

const main = () => {
  s1 = 'ab', s2 = 'eidboooa'
  console.log('if s1 is contained in s2', checkInclusion(s1, s2))

  s1 = 'adc', s2 = 'dcda'
  console.log('if s1 is contained in s2', checkInclusion(s1, s2))
}

main()
