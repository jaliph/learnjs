// Sieve of Eratosthenes

const sieveOfEratosthenes = (n) => {
  const bool = Array(n + 1).fill(true)

  bool[0] = false
  bool[1] = false

  for (let i = 2; i <= n; i++) {
    for (let j = i * i; j <= n; j += i) {
      if (bool[j]) {
        bool[j] = false
      }      
    }
  }

  let primes = []
  for (let i = 2; i <= n; i++) {
    if (bool[i]) {
      primes.push(i)
    }
  }

  return primes
}

const main = () => {
  n = 11
  console.log('All the primes till 100 ', sieveOfEratosthenes(n))
}

main()