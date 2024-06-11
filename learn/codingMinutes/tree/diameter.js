
/// either it will pass through curr
// or it will not pass through curr

// fx[curr] = 2 + Max ( 2 of its children) // pass through curr
// fx[curr] = Math.max(fx) // doesn't pass through curr

const treeDistance = (n, edges) => {
  const g = Array(n + 1).fill().map(() => Array().fill([]))
  const fx = Array(n + 1).fill(0)
  const gx = Array(n + 1).fill(0)

  for (const e of edges) {
    g[e[0]].push(e[1])
    g[e[1]].push(e[0])
  }

  const DFS_Helper = (curr, par) => {
    let max_1 = 0; let max_2 = 0
    for (const n of g[curr]) {
      if (n != par) {
        DFS_Helper(n, curr)

        gx[curr] = Math.max(gx[n] + 1, gx[curr]) // just for filling current
        fx[curr] = Math.max(fx[curr], fx[n])

        if (gx[n] + 1 > max_1) {
          max_2 = max_1
          max_1 = gx[n] + 1
        } else if (gx[n] + 1 > max_2) {
          max_2 = gx[n] + 1
        }
      }
    }
    fx[curr] = Math.max(fx[curr], max_1 + max_2)
    // maximum of both the scenarios
  }

  DFS_Helper(1, -1)
  console.dir(fx)
  console.dir(gx)
  return fx[1]
}

const main = () => {
  n = 7
  edges = [
    [1, 2],
    [1, 3],
    [1, 4],
    [2, 5],
    [3, 6],
    [4, 7]
  ]

  console.log('Tree distance is ', treeDistance(n, edges))
}

main()
