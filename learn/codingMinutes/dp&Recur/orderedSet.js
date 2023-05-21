

const orderedSet = (num) => {
  // base case
  if (num == 0) return 1

  // recur case
  let ans = 0
  for (let i = 1; i <= num; i++) {
    ans += orderedSet(num - i)
  }

  return ans
}

const orderedSetDP = (num) => {
  const dp = Array(num).fill(0)

  dp[0] = 1
  let sum = 0
  for (let i = 1; i <= num; i++) {
    // sum represents the solution to get the previous num
    // i represents the number itself which can form the i
    dp[i] = sum + 1
    sum += dp[i]
  }

  // console.dir(dp)
  return dp[num]
}

const main = () => {
  // console.log('number of ways to order n nums is:', orderedSet(3))
  for (let i = 1; i <= 10; i++) {
    console.log(`number of ways to order ${i} nums is:`, orderedSet(i))
  }
}

main()