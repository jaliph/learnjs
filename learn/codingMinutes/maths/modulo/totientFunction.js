// Totient Function

//  num * (1 - 1/p1) * (1 - 1/p2) ...
// coprimes...

const N = 10**5
const calculateTotient = () => {
  const bool = Array(N + 1).fill(true)

  for (let i = 2; i <= N; i++) {
    for (let j = i * i; j <= N; j += i) {
      if (bool[j]) {
        bool[j] = false
      }      
    }
  }

  const totient = Array(N + 1).fill().map((_, i) => i)
  console.log(totient)

  for (let i = 2; i <= N; i++) {
    if (bool[i]) {
      for (let j = i; j <= N; j += i) {
        totient[j] /= i
        totient[j] *= (i - 1)
      }
    }
  }

  for (let i = 1; i <= 10; i++) {
    console.log(i, totient[i])
  }
}

const main = () => {
  console.log('for the first n nums')
  calculateTotient()
}

main()