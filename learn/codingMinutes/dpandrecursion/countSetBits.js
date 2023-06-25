
// count all set Bits till n
const countSetBits = (n) => {
  const dp = Array(n + 1).fill(0)

  dp[0] = 0

  for (let i = 1; i <= n; i++) {
    dp[i] = dp[Math.floor(i / 2)] + (i % 2)
  }

  console.log(dp)
}

const main = () => {
  countSetBits(10)
}

main()
