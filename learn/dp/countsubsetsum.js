
const recusrsioncountSubsetSum = (arr, i, sum) => {
  if (sum === 0) return 1
  if (i === 0) return 0

  if (arr[i - 1] > sum) {
    return recusrsioncountSubsetSum(arr, i - 1, sum)
  }
  let ithNumSelected = recusrsioncountSubsetSum(arr, i - 1, sum - arr[i - 1])
  let ithNumNotSelected = recusrsioncountSubsetSum(arr, i - 1, sum)
  return ithNumSelected + ithNumNotSelected
}

const countsubsetsum = (arr, sum) => {
  const table = Array.from(Array(arr.length + 1), () => new Array(sum + 1))

  for (let i = 0; i <= arr.length; i++) {
    table[i][0] = 1
  }

  for (let i = 1; i <= sum; i++) {
    table[0][i] = 0
  }

  for (let i = 1; i <= arr.length; i++) {
    for (let j = 1; j <= sum; j++) {
      if (arr[i - 1] > j) {
        table[i][j] = table[i - 1][j]
      } else {
        table[i][j] = table[i - 1][j] + table[i - 1][j - arr[i - 1]]
      }
    }
  }
  // console.dir(table)
  return table[arr.length][sum]
}




const countsubset2 = (arr, target) => {
  let countSubSetR = (arr, target, i) => {
    if (target == 0) return 1
    if (arr.length == 0 || i >= arr.length) return 0

    if (arr[i] > target) {
      return countSubSetR(arr, target, i + 1)
    }
    return countSubSetR(arr, target - arr[i], i + 1) + countSubSetR(arr, target, i + 1)
  }
  return countSubSetR(arr, target, 0)
}


const countsubset2DP = (arr, target) => {
  if (arr.length == 0) return 0

  const dp = Array(arr.length).fill(0).map(() => Array(target + 1).fill(0))

  for (let i = 0; i < arr.length; i++) { 
    dp[i][0] = 1
  }

  for (let i = 0; i <= target; i++) { 
    dp[0][i] = arr[0] == i ? 1 : 0
  }

  for (let i = 1 ; i < arr.length; i++ ) {
    for (let j = 1; j <= target; j++) {
      if (arr[i] > j) { // current number cannot be included
        dp[i][j] = dp[i - 1][j]
      } else {
        dp[i][j] = dp[i - 1][j] + dp[i - 1][j - arr[i]]
      }
    }
  }
  return dp[arr.length - 1][target]
}

const arr = [3, 34, 4, 12, 5, 2]
const sum = 12
console.log(countsubsetsum(arr, sum))
console.log(recusrsioncountSubsetSum(arr, arr.length, sum))


console.log(countsubset2(arr, sum))

console.log(countsubset2DP([3,5,6,7], sum))



