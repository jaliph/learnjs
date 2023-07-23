// https://leetcode.com/problems/prime-pairs-with-target-sum/

/**
 * @param {number} n
 * @return {number[][]}
 */
var findPrimePairs = function(n) {
  const bool = Array(1 + n).fill(true)
  let primes = new Set()
  for (let i = 2; i <= n; i++) {
    if (bool[i]) {
      primes.add(i)
      for (let j = i * i ; j <= n; j = j + i) {
        if (bool[j]) {
          bool[j] = false
        }
      }
    }
  }

  let result = []
  for (let i of primes) {
    if (i > ~~(n / 2)) {
      break
    }
    if (primes.has(n - i)) {
      result.push([i, n - i])
    }
  }
  return result
};

const main = () => {
  n = 10
  console.log('Prime pairs are ', findPrimePairs(n))
}

main()