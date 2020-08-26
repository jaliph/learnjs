
const sieveOfErathenaus = (num) => {
  let booleanArray = new Array(num + 1).fill(1)
  let primes = []
  for (let i = 2; i * i <= num; i++) {
    if (booleanArray[i] === 1) {
      for (let j = i * i; j <= num; j = j + i) {
        booleanArray[j] = 0
      }
    }
  }
  for (let i = 2; i <= num; i++) {
    if (booleanArray[i] === 1) {
      primes.push(i)
    }
  }
  return primes.join(', ')
}

console.log(sieveOfErathenaus(97))
