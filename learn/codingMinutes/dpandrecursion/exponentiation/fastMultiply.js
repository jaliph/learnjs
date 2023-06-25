
const multiply = (a, b) => {
  let res = 0

  while (b) {
    if (b & 1) {
      res = res + a
    }
    a = 2 * a
    b = b >> 1
  }

  return res
}

// (a * b) % c
const mod = (a, b, c) => {
  let res = 0

  while (b) {
    if (b & 1) {
      res = res + a
      res = res % c
    }
    a = 2 * a
    a = a % c
    b = b >> 1
  }

  return res
}

const main = () => {
  console.log('New multiplications ', multiply(10, 234))
}

main()
