
const factors = (num) => {
  let flag = true
  const s = new Set()
  s.add(1)
  while (num % 2 === 0) {
    if (flag) {
      s.add(2)
      flag = false
    }
    num = num / 2
  }
  for (let i = 3; i <= Math.sqrt(num); i = i + 2) {
    while (num % i === 0) {
      s.add(i)
      num = Math.ceil(num / i)
    }
  }
  if (num > 2) {
    s.add(num)
  }
  console.dir(s)
}

factors(27)
