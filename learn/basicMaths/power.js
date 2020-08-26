const power = (x, n) => {
  let result = 1
  if (n === 0) {
    return 1
  }
  while (n > 0) {
    if (n % 2 !== 0) {
      result = x * result
    }
    x = x * x
    n = Math.floor(n / 2)
  }
  return result
}

const power2 = (x, n) => {
  if (n === 0) {
    return 1
  }
  let temp = power(x, Math.floor(n / 2))
  if (n % 2 === 0) {
    return temp * temp
  } else {
    if (n > 0) {
      return x * temp * temp
    } else {
      return Math.floor((temp * temp) / x)
    }
  }

}

console.log(power2(2, -3))
