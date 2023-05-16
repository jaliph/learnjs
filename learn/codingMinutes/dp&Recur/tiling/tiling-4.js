
// https://www.spoj.com/problems/M3TILE/

const tiling = (n) => {
  const f = Array(n + 1).fill(0)
  const g = Array(n + 1).fill(0)

  f[0] = g[0] = 1 // one way is possible
  f[1] = g[1] = 0 // no way as 1 box will remain empty

  for (let i = 2; i <= n; i++) {
    f[i] = f[i - 2] + 2 * g[i - 2]
    g[i] = f[n] + g[i - 2]
  }

  return f[n]
}


const main = () => {
  for (let i = 0; i <= 10; i++) {
    console.log(`Number of ways to fill the 2*${i} board is`, tiling(i))
  }
}

main()



