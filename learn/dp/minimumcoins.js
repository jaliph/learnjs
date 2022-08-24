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



let countChange = function(denominations, total) {
  const minCoinChange = (denominations, total, index) => {
    if (total <= 0) return 0

    if (denominations.length == 0 || index >= denominations.length) {
      return Infinity // invalid value/.. Infinity
    }

    let count1 = Infinity
    if (denominations[index] <= total) {
      let result =  minCoinChange(denominations, total - denominations[index], index)
      if (result != Infinity) {
        count1 = result + 1
      }
    }

    let count2 = minCoinChange(denominations, total, index + 1)
    return Math.min(count1, count2)
  }
  let result = minCoinChange(denominations, total, 0) 
  return result == Infinity ? -1 : result
}


console.log(`Number of ways to make change DP: ---> ${countChange([1, 2, 3], 5)}`);
console.log(`Number of ways to make change: ---> ${countChange([1, 2, 3], 11)}`);
console.log(`Number of ways to make change: ---> ${countChange([1, 2, 3], 7)}`);
console.log(`Number of ways to make change: ---> ${countChange([3, 5], 7)}`);


const countChangeDP = function(denominations, total) {
  let dp = Array(denominations.length).fill(0).map(() => Array(total + 1).fill(Infinity))

  for (let i = 0; i < denominations.length; i++) {
    dp[i][0] = 0
  }

  for (let i = 0; i < denominations.length; i++) {
    for (let j = 1; j <= total; j++) {
      if (i > 0) {
        dp[i][j] = dp[i - 1][j]
      }

      if (denominations[i] <= j && dp[i][j - denominations[i]] != Infinity ) {
        dp[i][j] = Math.min(dp[i][j], dp[i][j - denominations[i]] + 1)
      }
    }
  }
  console.log(dp)
  return dp[denominations.length-1][total]
}

console.log(`Number of ways to make change DP: ---> ${countChangeDP([1, 2, 3], 5)}`);
console.log(`Number of ways to make change DP: ---> ${countChangeDP([1, 2, 3], 11)}`);
console.log(`Number of ways to make change DP: ---> ${countChangeDP([1, 2, 3], 7)}`);
console.log(`Number of ways to make change DP: ---> ${countChangeDP([3, 5], 7)}`);