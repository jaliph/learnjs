// Multiplicative modulo

const extendedGCD = (a, b) => {
  if (b == 0) {
    return [1, 0, a]
  }

  const result = extendedGCD(b, a % b)
  const x = result[1]
  const y = result[0] - (Math.floor(a / b) * result[1])

  return [x, y, result[2]]
}

const mmi = (a, m) => {
  const result = extendedGCD(a, m)
  if (result[2] == 1) {
    return ((result[0] % m) + m) % m
  } else {
    return -1
  }
}

const main = () => {
  const sets = [[6, 7], [8, 7], [10, 12]]

  for (const nums of sets) {
    console.log('the mmi is ', mmi(nums[0], nums[1]))
  }
}

main()
