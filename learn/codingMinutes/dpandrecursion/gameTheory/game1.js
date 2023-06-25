
// from n stones , Alice can pick 1 ,2, 3 and Bob in his next turn, For given n, find out if it is a winning position

const position = (n) => {
  const dp = Array(n + 1).fill(0)

  dp[0] = 0
  dp[1] = 1
  dp[2] = 1
  dp[3] = 1

  for (let i = 4; i <= n; i++) {
    dp[i] = !(dp[i - 1] & dp[i - 2] & dp[i - 3])
  }

  return dp[n] == 1 ? 'Winner' : 'Loser'
}

const main = () => {
  for (let i = 0; i <= 20; i++) {
    console.log('Is ', i, ' a winning position', position(i))
  }
}

main()
