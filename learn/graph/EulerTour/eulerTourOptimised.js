
const eulerTourOptimised = (n, edges) => {
  const g = Array(n + 1).fill().map(() => Array().fill([]))
  const parent = []

  for (const e of edges) {
    g[e[0]].push(e[1])
    g[e[1]].push(e[0])
  }

  // const eulerTourOptimised = []
  const timeIn = []
  const timeOut = []

  let time = 0
  const DFS_Helper = (curr, par) => {
    timeIn[curr] = ++time
    for (const child of g[curr]) {
      if (child != par) {
        DFS_Helper(child, curr)
      }
    }
    timeOut[curr] = time
  }

  DFS_Helper(1, -1)

  for (let i = 1; i <= n; i++) {
    console.log(i, 'has in ', timeIn[i], 'and out ', timeOut[i])
  }

  const flat = []
  for (let i = 1; i <= n; i++) {
    flat[timeIn[i]] = i
  }

  for (let i = 1; i <= n; i++) {
    console.log(i, flat[i])
  }
}

const main = () => {
  n = 5
  edges = [
    [1, 2],
    [1, 3],
    [3, 4],
    [3, 5]
  ]
  console.log('basic euler tour')
  eulerTourOptimised(n, edges)
}

main()
