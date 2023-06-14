

const eulerTour = (n, edges) => {
  const g = Array(n + 1).fill().map(() => Array().fill([]))
  const parent = []

  for (const e of edges) {
    g[e[0]].push(e[1])
    g[e[1]].push(e[0])
  }

  const eulerTour1 = []
  const eulerTour2 = []

  const DFS_Helper = (curr, par) => {
    eulerTour1.push(curr)
    eulerTour2.push(curr)
    parent[curr] = par
    for (const child of g[curr]) {
      if (child != par) {
        DFS_Helper(child, curr)
        eulerTour2.push(curr)
      }
    }
    eulerTour1.push(curr)
  }

  DFS_Helper(1, -1)

  console.log(...eulerTour1)
  console.log(...eulerTour2) // leaf nodes will be printed only once
  // console.log(eulerTour1.length)
}

const Print2D = arr => arr.forEach(o => console.log(...o))

const main = () => {
  n = 5
  edges = [
    [1, 2],
    [1, 3],
    [3, 4],
    [3, 5]
  ]
  console.log('basic euler tour')
  eulerTour(n, edges)
}

main()