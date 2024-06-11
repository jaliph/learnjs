const floydWarshall = (v, edges) => {
  const dist = Array(v).fill(0).map(() => Array(v).fill(Infinity))
  for (let i = 0; i < v; i++) {
    dist[i][i] = 0
  }

  for (const e of edges) {
    dist[e[0]][e[1]] = e[2]
    dist[e[1]][e[0]] = e[2]
  }

  // k intermediate veritices
  for (let k = 0; k < v; k++) {
    // every i
    for (let i = 0; i < v; i++) {
      for (let j = 0; j < v; j++) {
        if (i == j) {
          continue
        }
        dist[i][j] = Math.min(dist[i][j], dist[i][k] + dist[k][j])
      }
    }
  }

  Print2D(dist)
}

const main = () => {
  const edges = [[0, 1, 1], [0, 3, 7], [0, 2, 4], [1, 2, 1], [2, 3, 2], [3, 4, 3]]
  const n = 5
  console.log('Running belman ford algorithm ', floydWarshall(n, edges))
}

const Print2D = arr => arr.forEach(o => console.log(...o))

main()
