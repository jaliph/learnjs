// https://www.educative.io/module/lesson/dp-in-javascript/YML1Wm4NAj0

const getMinDiff = function (num) {
  const getMinDiffRecur = (arr, i, sum1, sum2) => {
    if (arr.length == 0) return 0

    if (i == arr.length) return Math.abs(sum1 - sum2)

    const diff1 = getMinDiffRecur(arr, i + 1, sum1 + arr[i], sum2)
    const diff2 = getMinDiffRecur(arr, i + 1, sum1, sum2 + arr[i])

    return Math.min(diff1, diff2)
  }
  return getMinDiffRecur(num, 0, 0, 0)
}

const getMinDiffDP = function (num) {
  if (num.length == 0) {
    return 0
  }

  const sum = num.reduce((acc, i) => {
    return acc + i
  }, 0)

  const requiredSum = Math.floor(sum / 2)

  const dp = Array(num.length).fill(0).map(() => Array(requiredSum + 1).fill(0))

  for (let i = 0; i < num.length; i++) {
    dp[i][0] = 1
  }

  for (let i = 1; i <= requiredSum; i++) {
    dp[0][i] = num[0] == i ? 1 : 0
  }

  for (let i = 1; i < num.length; i++) {
    for (let s = 1; s <= requiredSum; s++) {
      if (num[i] > s) {
        dp[i][s] = dp[i - 1][s]
      } else {
        dp[i][s] = dp[i - 1][s] + dp[i - 1][s - num[i]]
      }
    }
  }

  let sum1 = 0
  // Find the largest index in the last row which is true
  for (let i = requiredSum; i >= 0; i--) {
    if (dp[num.length - 1][i] != 0) {
      console.log()
      sum1 = i
      break
    }
  }
  console.log(dp)
  console.log(sum1)
  const sum2 = sum - sum1
  return Math.abs(sum2 - sum1)
}

console.log(`Minimum subset difference is: ---> ${getMinDiff([1, 2, 3, 9])}`)
console.log(`Minimum subset difference is: ---> ${getMinDiff([1, 2, 7, 1, 5])}`)
console.log(`Minimum subset difference is: ---> ${getMinDiff([1, 3, 100, 4])}`)

console.log(`Minimum subset difference is: ---> ${getMinDiffDP([1, 2, 3, 9])}`)
console.log(`Minimum subset difference is: ---> ${getMinDiffDP([1, 2, 7, 1, 5])}`)
console.log(`Minimum subset difference is: ---> ${getMinDiffDP([1, 3, 100, 4])}`)
