
const MOD = 1e9 + 7

const power = (i, n) => {
  let res = 1

  while (n) {
    if (n&1 == 1) {
      res = res * i
      res = res % mod
    }
    i = i * i
    i = i % mod
    n = n >> 1
  }

  return res
}

const main = () => {
  console.log('Modules is ', mod(10, 3))
}

main()