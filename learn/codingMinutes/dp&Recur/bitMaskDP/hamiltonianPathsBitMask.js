
class Graph {
  constructor () {
    this.vertices = {}
  }

  size () {
    return Object.keys(this.vertices).length
  }

  addEdge (i, j) {
    this.vertices[i] = this.vertices[i] || []
    this.vertices[j] = this.vertices[j] || []

    this.vertices[i].push(j)
    this.vertices[j].push(i)
  }
}

const findHamiltonianPaths = (g) => {
  const DP = (curr, mask) => {
    // base
    if (mask == (1 << g.size()) - 1) {
      return true
    }

    let ans = false
    // recur
    for (const child of g.vertices[curr]) {
      if (!((mask >> child) & 1)) {
        const result = dp(child, (1 << child) | mask)
        ans = ans | result
      }
    }

    return ans
  }

  let ans = false
  for (let i = 1; i < g.size(); i++) {
    const result = DP(i, (i << 1))
    ans = ans | result
  }

  return ans
}

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

  console.log('Hamiltonian Paths exist .. ', findHamiltonianPaths(g))
}

main()
