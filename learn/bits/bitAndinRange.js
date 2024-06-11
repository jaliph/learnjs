// https://leetcode.com/problems/bitwise-and-of-numbers-range/

/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
const rangeBitwiseAnd = function (left, right) {
  let i = 0
  while (left !== right) {
    left = left >> 1
    right = right >> 1
    i++
  }
  return left << i
}

const main = () => {

}

main()
