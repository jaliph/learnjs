// https://leetcode.com/problems/letter-combinations-of-a-phone-number/

/**
 * @param {string} digits
 * @return {string[]}
 */
/**
 * @param {string} digits
 * @return {string[]}
 */
const letterCombinations = function (digits) {
  const results = []
  const keyMap = new Map()
  keyMap.set('2', ['a', 'b', 'c'])
  keyMap.set('3', ['d', 'e', 'f'])
  keyMap.set('4', ['g', 'h', 'i'])
  keyMap.set('5', ['j', 'k', 'l'])
  keyMap.set('6', ['m', 'n', 'p'])
  keyMap.set('7', ['p', 'q', 'r', 's'])
  keyMap.set('8', ['t', 'u', 'v'])
  keyMap.set('9', ['w', 'x', 'y', 'z'])

  const set = []
  const recur = (i) => {
    // base case
    if (i == digits.length) {
      if (set.length != 0) {
        results.push([...set].join(''))
      }
      return
    }
    // console.log(digits[i], keyMap.get(digits[i]))
    const chars = keyMap.get(digits[i])
    for (let j = 0; j < chars.length; j++) {
      set.push(chars[j])
      recur(i + 1)
      set.pop()
    }
  }

  recur(0)
  return results
}

const main = () => {
  digits = '23'
  console.log('Letter combinations are...', letterCombinations(digits))

  digits = ''
  console.log('Letter combinations are...', letterCombinations(digits))
}

main()
