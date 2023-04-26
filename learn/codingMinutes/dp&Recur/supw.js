
// https://www.codechef.com/ZCOPRAC/problems/ZCO14002

// Minimum time spend on SUPW, MUST take SUPW in 3 days
const minSUPW = (arr) => {
  // base case
  if (arr.length == 0) {
    return 0
  }

  if (arr.length <= 3) {
    return Math.min(...arr)
  }

  const dp = new Array(arr.length).fill(0)

  dp[0] = arr[0]
  dp[1] = arr[1]
  dp[2] = arr[2]

  for (let i = 3; i < arr.length; i++) {
    dp[i] = arr[i] + Math.min(dp[i - 1], dp[i - 2], dp[i - 3])
  }
  // console.log(dp)
  return Math.min(dp[arr.length - 1], dp[arr.length - 2], dp[arr.length - 3])
}

const main = () => {
  const arr = [2, 2, 3, 2, 2]

  console.log('The minimum time spent on SUPW is ', minSUPW(arr))

  console.log('The minimum time spent on SUPW is ', minSUPW([3,2,1,1,2,3,1,3,2,1]))
  
}

main()
