let solveKnapsack = function(profits, weights, capacity) {
  const solveKnapsackRecur = (profits, weights, i, capacity) => {
    if (i >= weights.length) {
      return 0
    }
    if (capacity <= 0) {
      return 0
    }

    let profit1 = 0
    if (weights[i] <= capacity) {
      profit1 = profits[i] + solveKnapsackRecur(profits, weights, i, capacity - weights[i])
    }

    let profit2 = solveKnapsackRecur(profits, weights, i + 1, capacity)
    return Math.max(profit1, profit2)
  }
  return solveKnapsackRecur(profits, weights, 0, capacity);
};


let solveKnapsackDP = (profits, weights, capacity) => {
  if (capacity <= 0) {
    return 0
  }

  let dp = Array(profits.length).fill(0).map(() => Array(capacity + 1).fill(0))

  for (let i = 0; i < profits.length ; i++) {
    dp[i][0] = 0
  }

  for (let i = 0; i <= capacity ; i++) {
    dp[0][i] = weights[0] <= i ? profits[0] : 0
  }

  for (let i = 1; i < weights.length; i++) {
    for (let j = 1; j <= capacity; j++) {
      if (i > 0) {
        dp[i][j] = dp[i - 1][j]
      }
      if (weights[i] <= j) { 
        dp[i][j] = Math.max(dp[i][j], profits[i] + dp[i][j - weights[i]])
      }
    }
  }

  let items = []

  let totalProfit = dp[weights.length - 1][capacity]
  let totalCapacity = capacity

  for (let i = profits.length - 1; i > 0; i--) {
    if (totalProfit != dp[i - 1][totalCapacity]) {
      items.push(weights[i])
      totalProfit -= profits[i]
      totalCapacity -= weights[i]
    }
  }
  console.log(items)
  return dp[weights.length - 1][capacity]
}

var profits = [15, 50, 60, 90];
var weights = [1, 3, 4, 5];
console.log(`Total knapsack profit: ---> ${solveKnapsack(profits, weights, 8)}`);
console.log(`Total knapsack profit: ---> ${solveKnapsackDP(profits, weights, 8)}`);