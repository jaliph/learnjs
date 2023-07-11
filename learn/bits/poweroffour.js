// https://leetcode.com/problems/power-of-four/

/**
 * @param {number} n
 * @return {boolean}
 */
/**
 * @param {number} n
 * @return {boolean}
 */
const isPowerOfFour = function (n) {
  let count = 0
  for (let i = 0; i < 32; i++) {
    if (((n >> i) & 1)) {
      count++
      if (i % 2 === 1) {
        return 1
      }
    }
  }
  return count === 1
}

const main = () => {
  console.log('Is power of 4? ', isPowerOfFour(32))
}

main()
