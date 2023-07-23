/*
Let M = 10^9 + 7
It serves mainly three purposes:
  - Fits in the range of int in languages like C/C++. One doesn't need to deal with overflows when doing addition/subtraction modulo M.
  - M is a prime number. You can perform division modulo M just by calculating the modular inverse of the divisor.
  - The square of M fits in 63 bits (size of long long), so you can perform multiplication modulo M without overflows.

*/

const MOD = 10**9 + 7 // must be a prime

const addModulo = (a, b) => {
  return ((a % MOD) + (b % MOD)) % MOD
}

const subModulo = (a, b) => {
  return ((a - b) % MOD + MOD) % MOD
}

const mulModulo = (a, b) => {
  return ((a % MOD) * (b % MOD)) % MOD
}

const power = (a, b) => {
  let res = 1
  while (b) {
    if (b & 1 === 1) {
      res = mulModulo(res, a)
      res = res % MOD
    }
    a = mulModulo(a, a)
    a = a % MOD
    b = Math.floor(b / 2) 
  }
  return res
}

const divModulo = (a, b) => {
  return ((a % MOD) * (power(b, (MOD - 2)) % MOD)) % MOD
}

const fact = (n) => {
  let result = 1
  for (let i = 1; i <= n; i++) {
    result = mulModulo(result, i)
  }
  return result
}

const inv = (n) => {
  return power(n, MOD - 2)
}

const nCr = (n, r) => {
  return mulModulo(mulModulo(fact(n), inv(fact(n-r))), inv(fact(r)))
}

const nPr = (n, r) => {
  return mulModulo(fact(n), inv(fact(n-r)))
}

const main = () => {
  console.log('Add modulo ', addModulo(3, 5))
  console.log('Sub modulo ', subModulo(3, 5))
  console.log('Mul modulo ', mulModulo(334343, 543434))
  console.log('Div modulo ', divModulo(56, 2))

  console.log('Fact modulo ', fact(5))

  console.log('nCr ', nCr(5, 2))
  console.log('nCr ', nCr(5770, 232))
  
  console.log('nPr ', nCr(5, 2))

  // console.log('Power  ', power(2, 4))
}

main()