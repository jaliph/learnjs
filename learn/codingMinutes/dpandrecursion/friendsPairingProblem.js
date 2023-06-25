
const friendPairing = (n) => {
  const dp = Array(n + 1).fill(0)

  for (let i = 0; i <= n; i++) {
    if (i <= 2) {
      dp[i] = i
    } else {
      dp[i] = dp[i - 1] + (i - 1) * dp[i - 2]
    }
  }

  return dp[n]
}

const main = () => {
  console.log('Number ways of pairing n friends is ', friendPairing(3))
}

main()
