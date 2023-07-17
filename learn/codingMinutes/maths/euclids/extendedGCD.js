
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

  let result = extendedGCD(b, a % b)
  let gcd = result[2]
  let _x = result[0]
  let _y = result[1]

  let x = _y
  let y = _x - (Math.floor(a/b) * _y)

  return [x, y, gcd]
}


const main = () => {
  let sets = [[18, 12], [18, 30]]

  for (let nums of sets) {
    console.log('the extended gcd is ', extendedGCD(nums[0], nums[1]))
  }
}

main()