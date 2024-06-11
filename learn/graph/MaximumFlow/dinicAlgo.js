// O e * v ^ 2

const maxFlow = (v, edges, source, sink) => {
  const edges_set = []
  const g = Array(v).fill().map(() => Array().fill([]))
  let levels

  let ec = 0
  for (const e of edges) {
    g[e[0]].push(ec)
    edges_set[ec++] = [e[1], e[2]]
    g[e[1]].push(ec)
    edges_set[ec++] = [e[1], 0]
  }

  const levelCheck = () => {
    levels = Array(v).fill(-1)
    const q = []
    q.push(source)
    levels[source] = 0
    let i = 0
    while (i < q.length) {
      const curr = q[i++]
      for (const edge_index of g[curr]) {
        const to = edges_set[edge_index][0]
        const w = edges_set[edge_index][1]
        if (w && levels[to] == -1) {
          levels[to] = levels[curr] + 1
          q.push(to)
        }
      }
    }
    return levels[sink] != -1
  }

  // DFS
  const augment = (curr, visited, flow) => {
    // base
    if (curr == sink) return flow
    visited[curr] = true
    for (const edge_index of g[curr]) {
      const to = edges_set[edge_index][0]
      const w = edges_set[edge_index][1]

      if (w && levels[to] == levels[curr] + 1 && !visited[to]) {
        const bottleneck_flow = augment(to, visited, Math.min(flow, w))

        // remove from the edges weight for the next level check
        if (bottleneck_flow) {
          edges_set[edge_index][1] -= bottleneck_flow
          edges_set[edge_index ^ 1][1] += bottleneck_flow

          return bottleneck_flow
        }
      }
    }
    /// if nothing return 0
    return 0
  }

  let max_flow = 0
  while (levelCheck()) {
    let flow
    let visited = []
    while (flow = augment(source, visited, Infinity)) {
      max_flow += flow
      visited = []
    }
  }
  return max_flow
}

const main = () => {
  n = 4, edges = [[0, 1, 5], [1, 2, 2], [2, 3, 3]], source = 0, sink = 3
  console.log('Maximum flow from source to sink is ', maxFlow(n, edges, source, sink))
}

main()
