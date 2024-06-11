
// brute
const gcd = (n1, n2) => {
  let ans = 1
  for (let i = 2; i <= Math.min(n1, n2); i++) {
    if ((n1 % i === 0) && (n2 % i === 0)) {
      ans = i
    }
  }
  return ans
}

// euclids
const gcdEuclids = (a, b) => {
  if (b == 0) {
    return a
  }
  return gcdEuclids(b, a % b)
}

const main = () => {
  const sets = [[6, 8], [9, 11], [12, 6], [6, 7]]

  for (const nums of sets) {
    console.log('the gcd is ', gcd(nums[0], nums[1]))
    console.log('the gcd euclids is ', gcd(nums[0], nums[1]))
  }
}

main()
