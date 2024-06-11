// Find prime Factors for a number

const primeFactors = (n) => {
  const bool = Array(n + 1).fill(0)

  for (let i = 2; i <= n; i++) {
    for (let j = i; j <= n; j += i) {
      if (bool[j] == 0) {
        bool[j] = i
      }
    }
  }

  console.log(bool)

  const factors = [1]
  while (n != bool[n]) {
    factors.push(bool[n])
    n = n / bool[n]
  }
  factors.push(n)
  return factors
}

const main = () => {
  num = 20
  console.log('the prime factors are ', primeFactors(num))

  num = 19
  console.log('the prime factors are ', primeFactors(num))

  num = 97
  console.log('the prime factors are ', primeFactors(num))
}

main()
