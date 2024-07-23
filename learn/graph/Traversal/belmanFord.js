
const belmanFord = (v, edges) => {
  const dist = Array(v).fill(Infinity)

  const source = 0
  dist[source] = 0
  // relax the edges v - 1 times
  for (let i = 0; i < v - 1; i++) {
    for (const edge of edges) {
      const u = edge[0]
      const v = edge[1]
      const wt = edge[2]

      if (dist[u] != Infinity && dist[u] + wt < dist[v]) {
        dist[v] = dist[u] + wt
        // can check with a flag if there are any updates and the break the outerloop after innerloop completion
      }
    }
  }

  // check for negative cycle

  // even after running v - 1 times even though such a exist - there is negative cycle

  for (const edge of edges) {
    const u = edge[0]
    const v = edge[1]
    const wt = edge[2]

    if (dist[u] != Infinity && dist[u] + wt < dist[v]) {
      console.log('there is a negative cycle.. nt worth it')
      return
    }
  }

  for (let i = 0; i <= v; i++) {
    console.log(`this dist from ${source} to ${i} is ${\}`)
  }
}

const main = () => {
  const edges = [[0, 1, 1], [0, 3, 7], [0, 2, 4], [1, 2, 1], [2, 3, 2], [3, 4, 3]]
  const n = 5
  console.log('Running belman ford algorithm ', belmanFord(n, edges))
}

main()
