// https://leetcode.com/problems/closest-divisors/
/**
 * @param {number} num
 * @return {number[]}
 */
const closestDivisors = function (num) {
  const divisors = (num) => {
    for (let n = ~~(Math.sqrt(num)); n >= 2; n = n - 1) {
      if (num % n == 0) {
        return [n, (num / n)]
      }
    }
    return [1, num]
  }

  const num1 = divisors(num + 1)
  const num2 = divisors(num + 2)

  return num1[1] - num1[0] <= num2[1] - num2[0] ? num1 : num2
}

const main = () => {
  num = 8
  console.log('closest divisors are ', closestDivisors(num))
}

main()
