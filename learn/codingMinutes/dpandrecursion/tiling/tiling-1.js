
// 2 * 1 tiles * 1 * 2 tiles

const tiling = (n) => {
  const f = Array(n + 1).fill(0)

  f[0] = 0
  f[1] = 1
  f[2] = 2

  for (let i = 3; i <= n; i++) {
    f[i] = f[i - 1] + f[i - 2]
  }
  return f[n]
}

const main = () => {
  for (let i = 0; i <= 10; i++) {
    console.log(`Number of ways to fill the 2*${i} board is`, tiling(i))
  }
}

main()
