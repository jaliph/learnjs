
const GCD = (a, b) => {
  if (b == 0) {
    return a
  }
  return GCD(b, a % b)
}

// Find LCM
const lcmMethod1 = (a, b) => {
  const gcd = GCD(a, b)
  return (a * b) / gcd
}

// Find LCM
const lcmMethod2 = (a, b) => {
  let max = Math.max(a, b)
  let min = Math.min(a, b)

  let i = max
  while (i % min !== 0) {
    i += max
  }
  
  return i
}


const main = () => {
  a = 12, b = 30
  console.log('LCM of a, b are', lcmMethod1(a, b))
  console.log('LCM of a, b are', lcmMethod2(a, b))

  a = 24, b = 300
  console.log('LCM of a, b are', lcmMethod1(a, b))
  console.log('LCM of a, b are', lcmMethod2(a, b))
}

main()

