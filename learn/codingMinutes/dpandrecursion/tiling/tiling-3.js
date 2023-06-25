// 2 * 1 tiles + 1 * 2 tiles + L tiles

const tiling = (n) => {
  const MOD = 1e9 + 7
  const f = Array(n + 1).fill(0)
  const g = Array(n + 1).fill(0)

  f[0] = g[0] = 0
  f[1] = g[1] = 1
  f[2] = g[2] = 2

  for (let i = 3; i <= n; i++) {
    f[i] = f[i - 1] + f[i - 2] + 2 * g[i - 2]
    g[i] = g[i - 1] + f[i - 1]

    f[i] = f[i] % MOD
    g[i] = g[i] % MOD
  }
  return f[n]
}

const main = () => {
  for (let i = 0; i <= 1000; i++) {
    console.log(`Number of ways to fill the 2*${i} board is`, tiling(i))
  }
}

main()
