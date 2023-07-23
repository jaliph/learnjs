// https://leetcode.com/problems/closest-prime-numbers-in-range

/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var closestPrimes = function(left, right) {
  let bool = Array(right + 1).fill(true)

  for (let i = 2; i <= right; i++) {
    if (bool[i]) {
      for (let j = i * i; j <= right; j+=i) {
        if (bool[j]) {
          bool[j] = false
        }
      }
    }
  }
  let q = []
  let k = 0
  let diff = Infinity
  let pair = [-1, -1]
  for (let i = Math.max(left, 2); i <= right; i++) {
    if (bool[i]) {
      q.push(i)
    }
    while (k < q.length - 1) {
      if (Math.abs(q[k] - q[k + 1]) < diff) {
        diff = Math.abs(q[k] - q[k + 1])
        pair = [q[k], q[k + 1]]
        if (diff <= 2) return pair
      }
      k++
    }
  }
  return pair
};

const main = () => {
  left = 10, right = 100
  console.log('Closest prime pair is ', closestPrimes(left, right))

  left = 10, right = 19
  console.log('Closest prime pair is ', closestPrimes(left, right))

  left = 4, right = 6
  console.log('Closest prime pair is ', closestPrimes(left, right))

  left = 1, right = 100000
  console.log('Closest prime pair is ', closestPrimes(left, right))
}

main()