

const belmanFord = (v, edges) => {
  const dist = Array(v).fill(Infinity)

  let source = 0
  dist[source] = 0
  // relax the edges v - 1 times
  for (let i = 0; i < v - 1; i++) {
    for (let edge of edges) {
      let u = edge[0]
      let v = edge[1]
      let wt = edge[2]

      if (dist[u] != Infinity && dist[u] + wt < dist[v]) {
        dist[v] = dist[u] + wt
      }
    }
  }

  // check for negative cycle

  // even after running v - 1 times even though such a exist - there is negative cycle

  for (let edge of edges) {
    let u = edge[0]
    let v = edge[1]
    let wt = edge[2]

    if (dist[u] != Infinity && dist[u] + wt < dist[v]) {
      console.log('there is a negative cycle.. nt worth it')
      return
    }
  }

  for (let i = 0; i <= v; i++) {
    console.log(`this dist from ${source} to ${i} is ${dist[i]}`)
  }
}


const main = () => {
  let edges = [[0, 1, 1], [0, 3, 7], [0, 2, 4], [1, 2, 1], [2, 3, 2], [3, 4, 3]]
  let n = 5
  console.log('Running belman ford algorithm ', belmanFord(n, edges))
}

main()