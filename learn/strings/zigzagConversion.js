const convert = function (s, numRows) {
  if (numRows === 1) {
    return s
  }
  const result = new Array(numRows).fill('')
  let i = 0
  let j = 0
  let forward = true

  while (i < s.length) {
    result[j] += s[i]
    if (forward) {
      j++
      if (j === numRows - 1) {
        forward = false
      }
    } else {
      j--
      if (j === 0) {
        forward = true
      }
    }
    i++
  }

  return result.join('')
}

console.log(convert('PAYPALISHIRING', 4))
