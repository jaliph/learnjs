
// 2 steps 1 & 2

const countSteps = (n) => {
  if (n < 0) return 0
  if (n === 0) return 1
  return countSteps(n - 1) + countSteps(n - 2)
}

const countStepsDP = (n) => {
  let first = 1 // 0 for fibonacci series
  let second = 1
  if (n < 2) {
    return n
  }
  let sum = 0
  for (let i = 2; i <= n; i++) {
    sum = first + second
    first = second
    second = sum
  }
  return sum
}

const count3Steps = (n) => {
  if (n <= 1) return 1
  if (n === 2) return 2
  return count3Steps(n - 1) + count3Steps(n - 2) + count3Steps(n - 3)
}

const count3StepsDP = (n) => {
  if (n < 3) return n
  let first = 1
  let second = 1
  let third = 2
  let sum = 0
  for (let i = 3; i <= n; i++) {
    sum = first + second + third
    first = second
    second = third
    third = sum
  }
  return sum
}

console.dir(countSteps(6))
console.dir(countStepsDP(6))
console.dir(count3Steps(6))
console.dir(count3StepsDP(6))
