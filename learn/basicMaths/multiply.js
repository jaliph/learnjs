const multiply = (x, y) => {
  let base = (x+'').split('').reverse()
  let carry = 0
  for (let i = 0; i < base.length; i++) {
    const mul = (+base[i] * y) + carry
    base[i] = mul % 10
    carry = Math.floor(mul / 10)
    // console.log('carry is', carry)
  }
  if (carry > 0) {
    base = [...base, ...((carry + '').split('').reverse())]
  }
  return base.reverse().join('')
}

const fact = (n) => {
  let res = 1
  if (n <= 1) {
    return 1
  } else {
    let t = 2
    while (t <= n) {
      console.log(t+'' , '*' , res , '=', multiply(res, t))
      res = multiply(res, t)
      t++
    }
  }
  return res
}

console.log(fact(100))
