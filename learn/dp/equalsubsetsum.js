const can_partition = function (num) {
  // TODO: Write your code here
  const sum = num.reduce((acc, i) => {
    return acc + i
  }, 0)

  if (sum % 2 !== 0) {
    return false
  }
  return can_partition_recursive(num, sum / 2, 0)
}

const can_partition_recursive = (num, sum, i) => {
  if (sum === 0) {
    return true
  }
  if (num.length == 0 || i >= num.length) {
    return false
  }
  if (num[i] <= sum) {
    if (can_partition_recursive(num, sum - num[i], i + 1)) return true
  }
  return can_partition_recursive(num, sum, i + 1)
}

const canParitionDP = (nums) => {
  if (nums.length == 0) {
    return false
  }
  let sum = nums.reduce((acc, i) => {
    return acc + i
  }, 0)
  if (sum % 2 !== 0) {
    return false
  }
  sum = sum / 2
  const dp = Array(nums.length).fill(false).map(() => Array(sum + 1).fill(false))

  for (let i = 0; i < nums.length; i++) {
    dp[i][0] = true
  }

  for (let i = 1; i <= sum; i++) {
    dp[0][i] = i == nums[0]
  }

  for (let i = 1; i < nums.length; i++) {
    for (let s = 1; s <= sum; s++) {
      if (dp[i - 1][s]) {
        dp[i][s] = dp[i - 1][s]
      } else if (s >= nums[i]) {
        dp[i][s] = dp[i - 1][s - nums[i]]
      }
    }
  }
  // console.log(dp)
  return dp[nums.length - 1][sum]
}

console.log(`Can partition: ${can_partition([1, 2, 3, 4])}`)
console.log(`Can partition: ${can_partition([1, 1, 3, 4, 7])}`)
console.log(`Can partition: ${can_partition([2, 3, 4, 6])}`)

console.log(`Can partition with DP: ${canParitionDP([1, 2, 3, 4])}`)
console.log(`Can partition with DP: ${canParitionDP([1, 1, 3, 4, 7])}`)
console.log(`Can partition with DP: ${canParitionDP([2, 3, 4, 6])}`)
