/**
 * https://leetcode.com/problems/strong-password-checker/
 * @param {string} password
 * @return {number}
 */
const strongPasswordChecker = function (password) {
  const lowerCaseChars = new Set()
  const uppCaseChars = new Set()
  const digits = new Set(['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'])
  for (let i = 0; i <= 25; i++) {
    uppCaseChars.add(String.fromCharCode(65 + i))
    lowerCaseChars.add(String.fromCharCode(97 + i))
  }
  let hasLower = 1; let hasUpper = 1; let hasDigit = 1
  for (const ch of password) {
    if (lowerCaseChars.has(ch) && hasLower == 1) {
      hasLower = 0
    }
    if (uppCaseChars.has(ch) && hasUpper == 1) {
      hasUpper = 0
    }
    if (digits.has(ch) && hasDigit == 1) {
      hasDigit = 0
    }
  }
  // console.log(hasLower, hasUpper, hasDigit)

  const missing_chars = hasLower + hasUpper + hasDigit

  const countSubStringLengths = (s) => {
    const res = [1]
    let prev = s[0]
    for (let i = 1; i < s.length; i++) {
      if (s[i] === prev) {
        res[res.length - 1]++
      } else {
        res.push(1)
      }
      prev = s[i]
    }
    return res
  }
  const nums_dels = Math.max(0, password.length - 20)
  const nums_inserts = Math.max(0, 6 - password.length)
  const substringlengths = countSubStringLengths(password)
  // console.log(substringlengths)

  // delete the extra chars from the substring with freq more than 3
  const processDeletions = (substringlengths, nums_dels) => {
    // console.log('deletions required.. ', nums_dels)
    while (nums_dels > 0) {
      const sortedFreq = [...substringlengths.entries()].map(o => {
        if (o[1] >= 3) {
          o[2] = o[1] % 3
        } else {
          o[2] = Infinity
        }
        return o
      }).sort((a, b) => a[2] - b[2])
      substringlengths[sortedFreq[0][0]]--
      nums_dels--
    }
  }
  processDeletions(substringlengths, nums_dels)
  // console.log(substringlengths)
  const nums_replaces = (function (substringlengths) {
    let sum = 0
    for (const count of substringlengths) {
      if (count >= 3) {
        sum += ~~(count / 3)
      }
    }
    return sum
  }(substringlengths))

  // console.log(nums_replaces, nums_inserts, missing_chars)
  return nums_dels + Math.max(nums_replaces, nums_inserts, missing_chars)
}

const main = () => {
  password = '13337C0d33332224445555' // '1234567890121314151617'
  console.log('Min steps to make the password strong is ', strongPasswordChecker(password))
}

main()
