



const tsp = (n, edges) => {
  let adjacency = Array(n).fill(0).map(() => Array(n).fill(0))

  // console.log(edges)
  for (let e of edges) {
    adjacency[e[0]][e[1]] = e[2]
    adjacency[e[1]][e[0]] = e[2]
  }

  let source = 0

  const tspCostFinder = (curr, bitSet) => {
    // base case
    if (((1 << n) - 1) == bitSet) {
      return adjacency[curr][source]
    }

    let ans = Infinity

    // all the vertices
    for (let i = 0; i < n; i++ ) {
      // if nt present in the bitset
      if (!((bitSet >> i) & 1)) {
        // set it in the bitset for the subproblem
        let subSolution = adjacency[curr][i] + tspCostFinder(i, ((1 << i) | bitSet))
        ans = Math.min(ans, subSolution)
      }
    }
    return ans
  }

  return tspCostFinder(0, 0)
}

const Print2D = arr => arr.forEach(o => console.log(...o))


const main = () => {
  let edges = [[0,1,20], [0, 2, 42], [0, 3, 25], [1, 2, 30], [1, 3, 34], [2, 3, 10]]

  console.log('finding the travelling salesman cost', tsp(4, edges))
}

main()