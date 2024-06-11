// Calculating Powers

const power = (a, b) => {
  if (b == 0) {
    return 1
  }
  return a * power(a, b - 1)
}

const fastpower = (a, b) => {
  if (b == 0) {
    return 1
  }
  const subProb = fastpower(a, ~~(b / 2))
  const subProBSquare = subProb * subProb
  if (b & 1) {
    return a * subProBSquare
  }
  return subProBSquare
}

console.log('Power calc ', power(2, 5))
console.log('Fast Power calc ', fastpower(2, 5))
