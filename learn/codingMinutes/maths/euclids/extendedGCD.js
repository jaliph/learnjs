
// ax + by = GCD(a, b)
// x = y'
// y = x' - (a/b) * y'

// bottom up
const extendedGCD = (a, b) => {
  // base case
  if (b == 0) {
    // x, y, gcd
    return [1, 0, a]
  }

  const result = extendedGCD(b, a % b)
  const gcd = result[2]
  const _x = result[0]
  const _y = result[1]

  const x = _y
  const y = _x - (Math.floor(a / b) * _y)

  return [x, y, gcd]
}

const main = () => {
  const sets = [[18, 12], [18, 30]]

  for (const nums of sets) {
    console.log('the extended gcd is ', extendedGCD(nums[0], nums[1]))
  }
}

main()
