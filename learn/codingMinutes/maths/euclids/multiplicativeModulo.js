// Multiplicative modulo

const extendedGCD = (a, b) => {
  if (b == 0) {
    return [1, 0, a]
  }

  let result = extendedGCD(b, a%b)
  let x = result[1]
  let y = result[0] - (Math.floor(a/b) * result[1])
  
  return [x, y, result[2]]
}

const mmi = (a, m) => {
  let result = extendedGCD(a, m)
  if (result[2] == 1) {
    return ((result[0] % m) + m) % m
  } else {
    return -1
  }
}

const main = () => {
  let sets = [[6, 7], [8, 7], [10, 12]]

  for (let nums of sets) {
    console.log('the mmi is ', mmi(nums[0], nums[1]))
  }
}

main()