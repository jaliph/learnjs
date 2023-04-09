function decimalToBinary (num) {
  if (num == 0) return '0'
  if (num == 1) return '1'

  return decimalToBinary(Math.floor(num / 2)) + decimalToBinary(num % 2)
}

console.log(decimalToBinary(30))
