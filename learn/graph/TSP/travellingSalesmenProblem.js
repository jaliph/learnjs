
const minTravelingCost = (v, edges) => {
  const adjacency = Array(v).fill().map(() => Array(v).fill(Infinity))

  for (let i = 0; i < v; i++) {
    adjacency[i][i] = 0
  }

  for (const e of edges) {
    adjacency[e[0]][e[1]] = e[2]
    adjacency[e[1]][e[0]] = e[2]
  }

  Print2D(adjacency)

  const source = 0

  const TSP_Solver = (curr, mask) => {
    // base
    // if all are set
    if (((1 << v) - 1) == mask) {
      return adjacency[curr][source] // the cost from source here
    }

    // recur
    let ans = Infinity
    for (let i = 0; i < v; i++) {
      // not visited
      if (!((mask >> i) & 1)) {
        const subAns = adjacency[curr][i] + TSP_Solver(i, ((1 << i) | mask))
        ans = Math.min(ans, subAns)
      }
    }
    return ans
  }

  return TSP_Solver(source, 0)
}

const Print2D = arr => arr.forEach(o => console.log(...o))

const main = () => {
  const edges = [[0, 1, 20], [0, 2, 42], [0, 3, 25], [1, 2, 30], [1, 3, 34], [2, 3, 10]]

  console.log('finding the travelling salesman cost', minTravelingCost(4, edges))
}

main()
