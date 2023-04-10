

const IPL = (matches) => {
  const dp = new Array(matches.length).fill(0)

  // find the matches i don't wanna play and the substract from the total
  dp[0] = matches[0]
  dp[1] = matches[1]
  dp[2] = matches[2]
  for (let i = 3; i < matches.length; i++) { 
    dp[i] = matches[i] + Math.min(dp[i - 1], dp[i - 2], dp[i - 3])
  }
  // console.log(dp)
  return Math.min(...dp.slice(-3))
}

const main = () => {
  const arr = [ 3,2,1,1,2,3,1,3,2,1 ]
  console.log(IPL(arr))
  console.log('Maximum money made out of the matches is ', arr.reduce((i, j) => i + j, 0) - IPL(arr))

}

main()