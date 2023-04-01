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





// Revise 

function coinChange(coins, total) {

  // const coinChangeRecur = (coins, total, i) => {
  //     if (total == 0) return 0
      
  //     if (i == coins.length || coins.length == 0) return Infinity

  //     let c1 = Infinity
  //     if (coins[i] <= total) {
  //         let result = coinChangeRecur(coins, total - coins[i], i)
  //         if (result != Infinity) {
  //             c1 = result + 1
  //         }
  //     }
  //     let c2 = coinChangeRecur(coins, total, i + 1)
  //     return Math.min(c1, c2)
  // }
  // const result = coinChangeRecur(coins, total, 0)
  // return result == Infinity ? -1 : result

  // if (total === 0) return 0

  
  // const t = Array(coins.length).fill(0).map(() => Array(total + 1).fill(Infinity))
  

  // for (let i = 0; i < coins.length; i++) {
  //     t[i][0] = 0
  // }

  // for (let i = 0; i < coins.length; i++) {
  //     for (let j = 1; j <= total; j++) {
  //         if (i > 0) {
  //             t[i][j] = t[i - 1][j]
  //         }
  //         if (coins[i] <= j && t[i][j - coins[i]] != Infinity) {
  //             t[i][j] = Math.min(t[i][j], 1 + t[i][j - coins[i]])
  //         }

  //     }
  // }

  

  // return t[coins.length - 1][total] == Infinity ? -1 : t[coins.length - 1][total]

  const dp = Array(total + 1).fill(Infinity)


  dp[0] = 0


  for (let i = 0; i <= coins.length; i++) {
      for (let j = 1; j <= total; j++) {
          if (coins[i] <= j) {
              dp[j] = Math.min(dp[j], 1 + dp[j - coins[i]])
          }
      }
  }

  return dp[total] == Infinity ? -1 : dp[total]
}
