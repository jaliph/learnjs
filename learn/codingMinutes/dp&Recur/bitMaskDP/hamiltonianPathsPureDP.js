
class Graph {
  constructor() {
    this.vertices = {}
  }

  size () {
    return Object.keys(this.vertices).length
  }

  addEdge(i, j) {
    this.vertices[i] = this.vertices[i] || []
    this.vertices[j] = this.vertices[j] || []

    this.vertices[i].push(j)
    this.vertices[j].push(i)
  }
}

const findHamiltonianPathsDP = (g) => {
  const N = g.size()

  const dp = Array(N).fill(0).map(() => Array(1<<N).fill(0))
  
  // base case .. verticies and their bitmasks are set
  for (let i = 0; i < N; i++) {
    dp[i][1<<i] = 1
  }

  // all the combinations
  for (let mask = 0; mask < (1 << N); mask++) {
    // all the verticies
    for (let curr = 0; curr < N; curr++) {
      if (dp[curr][mask]) {
        for (let child of g.vertices[curr]) {
          // if the child is not in the mask
          if (!((mask >> child) & 1)) {
            dp[child][mask | 1 << child] = 1
            // set the child in the mask
          }
        }
      }
    }
  }

  let ans = false
  for (let i = 0; i < N; i++) {
    ans |= dp[i][(1<<N) - 1]
  }
  
  return ans == 1
}

const Print2D = arr => arr.forEach(o => console.log(...o))

const main = () => {
  const g = new Graph()
  g.addEdge(0, 1)
  g.addEdge(1, 2)
  g.addEdge(1, 3)
  g.addEdge(2, 3)

  // g.addEdge(1, 2)
  // g.addEdge(1, 3)
  // g.addEdge(2, 3)
  // g.addEdge(2, 4)
  // g.addEdge(3, 4)
  // g.addEdge(2, 5)
  // g.addEdge(4, 5)
  // g.addEdge(3, 6)
  // g.addEdge(4, 6)
  // g.addEdge(5, 6)

  console.log('Hamiltonian Paths exist .. ', findHamiltonianPathsDP(g))
}

main()