
const subTreeSum = (n, edges) => {
  const g = Array(n + 1).fill().map(() => Array().fill())

  for (const e of edges) {
    g[e[0]].push(e[1])
    g[e[1]].push(e[0])
  }
  const sub = []

  const DFS_Helper = (curr, par) => {
    sub[curr] = 1
    let sum = 0
    for (const n of g[curr]) {
      if (n != par) {
        sum += DFS_Helper(n, curr)
        sub[curr] += sub[n]
      }
    }
    sum += sub[curr]
    return sum
  }

  let ans = 0
  for (let i = 1; i <= n; i++) {
    console.log(i, 'has ', DFS_Helper(i, 0))
    ans = Math.max(ans, DFS_Helper(i, 0))
  }
  return ans
}

const main = () => {
  n = 9

  edges = [
    [1, 2],
    [1, 3],
    [3, 4],
    [3, 5],
    [5, 6],
    [5, 9],
    [6, 7],
    [7, 8]
  ]

  console.log('subtree sum ', subTreeSum(n, edges))
}

main()
