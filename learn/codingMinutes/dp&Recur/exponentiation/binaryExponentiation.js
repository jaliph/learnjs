
const power = (i, n) => {
  let res = 1

  while (n) {
    if (n&1 == 1) {
      res = res * i
    }
    i = i * i
    n = n >> 1
  }

  return res
}


const main = () => {
  console.log(' Fastest .... ', power(2, 10))
}

main()