// https://leetcode.com/problems/maximum-odd-binary-number

const maximumOddBinaryNumber = function (s) {
  const charMap = [...s].reduce((prev, curr) => {
    prev.set(curr, (prev.get(curr) || 0) + 1)
    return prev
  }, new Map())

  const str = []
  charMap.set('1', charMap.get('1') - 1)
  while (charMap.get('1') > 0) {
    str.push('1')
    charMap.set('1', charMap.get('1') - 1)
  }
  while (charMap.get('0') > 0) {
    str.push('0')
    charMap.set('0', charMap.get('0') - 1)
  }
  // last 1
  str.push('1')
  return str.join('')
}

const main = () => {
  console.log(maximumOddBinaryNumber('01101'))
}

main()
