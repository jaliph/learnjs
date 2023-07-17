// Find total number which are less than 500 and divisible by first 3 prime numbers ?

const findNums = (tillP, num) => {
  const primes = []
  let N = 10**6
  const bool = Array(N + 1).fill(true)

  for (let i = 2; i <= N; i++) {
    if (bool[i]) {
      primes.push(i)
      if (primes.length >= tillP) {
        break
      }
      for (let j = i * i; j <= N; j = j + i) {
        if (bool[j]) {
          bool[j] = false
        }
      }
    }    
  }

  let ans = 0
  for (let i = 1; i < 1 << primes.length; i++) {
    let lcm = 1, count = 0
    for (let j = 0; j < primes.length; j++) {
      if ((i >> j) & 1) {
        count++
        lcm *= primes[j]
      }
    }

    if (count & 1 == 1) {
      ans += Math.floor(num / lcm)
    } else {
      ans -= Math.floor(num / lcm)
    }
  }
  return ans
}

const main = () => {
  primes = 10, num = 10
  console.log('number of divisibles of nums', findNums(primes, num))
}

main()
