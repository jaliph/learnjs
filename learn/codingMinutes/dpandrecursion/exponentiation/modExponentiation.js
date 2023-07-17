
const MOD = 1e9 + 7

const power = (i, n) => {
  let res = 1

  while (n) {
    if (n & 1 === 1) {
      res = res * i
      res = res % MOD
    }
    i = i * i
    i = i % MOD
    n = n >> 1
  }

  return res
}

const main = () => {
  console.log('Modules is ', power(10, 3))
}

main()
