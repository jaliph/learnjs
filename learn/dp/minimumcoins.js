const coins = [5, 6, 9] // [9, 6, 5, 1]
const V = 13

function minCoinsChange (arr, V) {
  const table = Array(V + 1).fill(V + 1)
  table[0] = 0
  for (let i = 1; i <= V; i++) {
    // Go through all coins smaller than i
    for (let j = 0; j < arr.length; j++) {
      if (coins[j] <= i) {
        table[i] = Math.min(table[i], table[i - coins[j]] + 1)
      }
    }
  }
  console.dir(table)
  return table[V]
}

console.log('Minimum coins required is ' + minCoinsChange(coins, V))
