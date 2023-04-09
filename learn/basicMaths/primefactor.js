const primeFactors = (n) => {
  const primes = []

  while (n % 2 === 0) {
    primes.push(2)
    n = n / 2
  }
  for (let i = 3; i * i <= n; i = i + 2) {
    if (n % i === 0) {
      primes.push(i)
      n = n / i
    }
  }
  if (n > 2) {
    primes.push(n)
  }
  return primes
}

console.dir(primeFactors(45))
