
const DFS = (n, edges) => {
  const g = Array(n + 1).fill().map(() => Array().fill())

  const visited = Array(n + 1).fill(false)

  for (const e of edges) {
    g[e[0]].push(e[1])
    g[e[1]].push(e[0])
  }

  const articulationPoints = []
  const bridges = []

  const disc = Array(n + 1).fill(0)
  const low = Array(n + 1).fill(0)
  let time = 1
  const DFS_Helper = (curr, par) => {
    // console.log(curr)
    visited[curr] = true
    disc[curr] = time
    low[curr] = time
    time++
    let child = 0
    for (const n of g[curr]) {
      if (!visited[n]) {
        DFS_Helper(n, curr)
        child++
        // console.log(curr) // return back from the sub problem
        low[curr] = Math.min(low[curr], low[n])

        // bridges
        if (disc[curr] < low[n]) {
          bridges.push([curr, n])
        }

        // articulation points
        if (disc[curr] <= low[n] && par != 0) {
          articulationPoints.push(curr)
        }
      } else if (n != par) {
        // backedge
        low[curr] = Math.min(low[curr], disc[n])
      }
    }

    if (par == 0 && child > 1) {
      // then root is a articulation point
      articulationPoints.push(curr)
    }
    // console.log(curr) // finishing the current problem
  }

  DFS_Helper(1, 0)
  // for (let i = 1; i < dist.length; i++) {
  //   console.log(i, 'is at distance ', dist[i])
  // }

  console.log('The bridges are ', bridges)
  console.log('The articulation points are ', articulationPoints)
}

const main = () => {
  n = 10
  edges = [[1, 2], [1, 3], [2, 3], [2, 4], [4, 5], [5, 6], [6, 7], [4, 7], [6, 10], [2, 9], [3, 8]]
  console.log('The DFS Traversal is ', DFS(n, edges))
}

main()
