

let coins = [3, 5]
let amount = 7
O(n*k) n is length of coins array & k is amount
n* 
let dp = Array(coins.length).fill(-1).map(() => Array(amount + 1).fill(Infinity))

for ( let i = 0; i < coins.length; i++) {
  dp[i][0] = 0
} 

for (let j = 1; j <= amount; j++) {
  if (coins[0] <= j) {
    dp[0][j] = Math.min(dp[0][j], 1 + dp[0][j - coins[0]])
  }
}

for (let i = 1; i < coins.length; i++) {
  for (let j = 1; j <= amount; j++) {
    if (j >= coins[i]) {
      dp[i][j] = Math.min(dp[i - 1][j], 1 + dp[i - 1][j - coins[i]])
    } else {
      dp[i][j] = dp[i - 1][j]
    }
  }
}

console.log(dp[coins.length - 1][amount] == Infinity ? -1: dp[coins.length - 1][amount])



let solution = (coins, amount) => {

  let solve = (i, target) => {
    // base
    if (i >= coins.length) {
      if (target == 0) {
        return 0
      }
      return Infinity
    }

    // recur
    let skip = solve(i + 1, target)
    let take = Infinity
    
    if (coins[i] <= target) {
      take = 1 + solve(i + 1, target - coins[i])
    }
    return Math.min(take, skip)
  }

  let res =solve(0, amount)
  return res == Infinity ? -1 : res
}

console.log(solution(coins, amount))
