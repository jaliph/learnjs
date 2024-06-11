// implements BFS for Residual Graph with augmented path
// edmand karp

// implements DFS for Residual Graph with augemented path
// ford-fulkerson

// O v * e ^ 2

// https://cses.fi/problemset/task/1694/

const maxDownloadSpeed = (n, connections) => {
  const g = Array(n + 1).fill().map(() => Array().fill([]))
  const edges = Array(n + 1).fill().map(() => Array().fill([]))

  let levels
  const source = 1
  const sink = n

  let ec = 0
  for (const e of connections) {
    edges[ec] = [e[1], e[2]]
    g[e[0]].push(ec++)
    edges[ec] = [e[0], 0] // reverse weight is 0
    g[e[1]].push(ec++)
  }

  const levelCheck = () => {
    levels = Array(n + 1).fill(-1)

    let i = 0
    const q = []
    q.push(source)
    levels[source] = 0
    while (i < q.length) {
      const curr = q[i++]

      for (const edgeIndex of g[curr]) {
        const [to, w] = edges[edgeIndex]
        if (w && levels[to] == -1) {
          levels[to] = levels[curr] + 1
          q.push(to)
        }
      }
    }
    return levels[sink] !== -1
  }

  const augment = (curr, flow, visited) => {
    // base
    if (sink == curr) {
      return flow
    }
    visited[curr] = true

    for (const edgeIndex of g[curr]) {
      const [to, w] = edges[edgeIndex]
      if (w && (levels[curr] + 1 == levels[to]) && !visited[to]) {
        const bottleNeckFlow = augment(to, Math.min(flow, w), visited)

        if (bottleNeckFlow) {
          edges[edgeIndex][1] -= bottleNeckFlow
          edges[edgeIndex ^ 1][1] += bottleNeckFlow // add to the reverse weight

          return bottleNeckFlow
        }
      }
    }
    return 0
  }

  let maxFlow = 0

  while (levelCheck()) {
    let flow
    while (flow = augment(source, Infinity, [])) {
      maxFlow += flow
    }
  }
  return maxFlow
}

const main = () => {
  computers = 4, connections = [[1, 2, 3], [2, 4, 2], [1, 3, 4], [3, 4, 5], [4, 1, 3]]
  console.log('The maximum download speed is ', maxDownloadSpeed(computers, connections))

  computers = 3, connections = [[1, 2, 3], [2, 3, 2], [1, 3, 1]]
  console.log('The maximum download speed is ', maxDownloadSpeed(computers, connections))
}

main()
