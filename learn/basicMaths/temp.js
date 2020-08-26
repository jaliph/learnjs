const power = (a, b) => {
  let res = 1
  while (b > 0) {
    if (b % 2 !== 0) {
      res = res * a
    }
    res = res * res
    b = Math.floor(b / 2)
  }
  console.log(res)
}

power(2, 3)
