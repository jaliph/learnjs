
const isStroboGrammaticNumber = (num) => {
  const m = new Map()
  m.set('1', '1')
  m.set('0', '0')
  m.set('9', '6')
  m.set('6', '9')
  m.set('8', '8')

  let l = 0; let r = num.length - 1
  while (l < r) {
    if (!m.has(num[l])) {
      return false
    }
    if (m.get(num[l]) === num[r]) {
      l++
      r--
    } else {
      return false
    }
  }
  return true
}

console.log(isStroboGrammaticNumber('1123'))
