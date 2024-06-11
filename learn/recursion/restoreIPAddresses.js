// https://leetcode.com/problems/restore-ip-addresses/

/**
 * @param {string} s
 * @return {string[]}
 */
const restoreIpAddresses = function (s) {
  const isValid = (str) => {
    if (str !== parseInt(str) + '') {
      return false
    }
    if (parseInt(str) >= 0 && parseInt(str) <= 255) {
      return true
    }
    return false
  }
  const results = []
  const ip = []
  const finder = (i) => {
    // base
    if (ip.length === 4 && i === s.length) {
      results.push(ip.join('.'))
      return
    }
    if (i >= s.length) {
      return
    }

    if (ip.length > 4) {
      return
    }

    // recur
    for (let j = i; j < s.length; j++) {
      const num = s.slice(i, j + 1)
      if (isValid(num)) {
        ip.push(num)
        finder(j + 1)
        ip.pop()
      }
    }
  }
  finder(0)
  return results
}

const main = () => {
  s = '25525511135'
  console.log('Valid Ip addresses .. ', restoreIpAddresses(s))

  s = '0000'
  console.log('Valid Ip addresses .. ', restoreIpAddresses(s))

  s = '101023'
  console.log('Valid Ip addresses .. ', restoreIpAddresses(s))
}

main()
