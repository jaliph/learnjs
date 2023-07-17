
// Segmented Sieve.. 
const segmentedSieve = (segments) => {
  const N = 10**7
  let primes = []
  let bool = Array(N + 1).fill(true)
  for (let i = 2; i <= N; i++) {
    if (bool[i]) {
      primes.push(i)
      for (let j = i * i; j <= N; j = j + i) {
        if (bool[j]) {
          bool[j] = false
        }
      }
    }
  }
 
  console.log('Done with Sieve..')

  for (let seg of segments) {
    let left = seg[0]
    let right = seg[1]

    let segment = Array(right - left + 1).fill(false)

    for (let p of primes) {
      // stop when p * p is greater than the range..
      if (p*p > right) {
        break
      }

      // if prime is in the left and right
      if (p >= left && p <= right) {
        start = 2 * p
      } // (left / p) = 0, but ideally it should start from 2 * p

      let start = Math.floor(left / p) * p
      // start from here ^
      for (let j = start; j <= right; j = j + p) {
        if (j < left) {
          continue
        }
        segment[j - left] = true
      }
    }

    let segmentPrimes = []
    for (let j = left ; j <= right ;j++) {
      if (segment[j - left] == false && j !== 1) {
        segmentPrimes.push(j)
      }
    }
    console.log(segmentPrimes)
  }
}


const main = () => {
  segments = [[10**5, 10**6]]
  console.log('Segmented Sieve for the segments are ', segmentedSieve(segments))
}

main()

