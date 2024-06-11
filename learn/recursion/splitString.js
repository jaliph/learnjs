// https://leetcode.com/problems/splitting-a-string-into-descending-consecutive-values/

/**
 * @param {string} s
 * @return {boolean}
 */
const splitString = function (s) {
  const checkPossible = (i, prev) => {
    if (i === s.length) {
      return true
    }

    for (let j = i; j < s.length; j++) {
      const val = parseInt(s.slice(i, j + 1))
      if ((prev + 1 === val) && checkPossible(j + 1, val)) {
        return true
      }
    }
    return false
  }

  for (let i = 0; i < s.length - 1; i++) {
    const val = parseInt(s.slice(0, i + 1))
    if (checkPossible(i + 1, val)) {
      return true
    }
  }

  return false
}

const main = () => {
  s = '1234'
  console.log('Split possible ? ', splitString(s))

  // s = "050043"
  // console.log('Split possible ? ', splitString(s))

  s = '9080701'
  console.log('Split possible ? ', splitString(s))
}

main()
