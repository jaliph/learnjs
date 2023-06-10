
const countStepsTo1 = n => {
  if (n === 1) return 0

  let ans = Infinity

  if (n % 2 == 0) {
    ans = Math.min(ans, countStepsTo1(n / 2))
  }
  if (n % 3 == 0) {
    ans = Math.min(ans, countStepsTo1(n / 3))
  }
  ans = Math.min(ans, countStepsTo1(n - 1))
  ans++

  return ans
}

const main = () => {
  console.log('Print the minimum steps to reach 1 from given n', countStepsTo1(10))
}

main()
