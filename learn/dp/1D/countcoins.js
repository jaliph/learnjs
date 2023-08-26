
const solveCoinChange = (den, amount) => {
  if (amount < 0) {
    return 0
  }

  const solution = Array(amount + 1).fill(0)

  solution[0] = 1

  for (let i = 0; i < den.length; i++) {
    for (let j = den[i]; j <= amount; j++) {
      solution[j] = solution[j] + solution[j - den[i]]
    }
  }

  console.dir(solution)
  return solution[amount]
}

const denominations1 = [1, 2, 3]
const amount1 = 6
const result1 = solveCoinChange(denominations1, amount1)

console.log('1.' + String(amount1) + ') = ' + String(result1))
console.log('------------------------------------------------------------------------------------------------------\n')

const denominations2 = [1, 2, 5]
const amount2 = 7
const result2 = solveCoinChange(denominations2, amount2)

console.log('2.' + String(amount2) + ') = ' + String(result2))
console.log('------------------------------------------------------------------------------------------------------\n')
