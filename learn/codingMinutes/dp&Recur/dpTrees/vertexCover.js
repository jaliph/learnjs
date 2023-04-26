
// find the min number of vertex so that all the edges are selected

class Tree {
  constructor() {
    this.vertices = {}
  }

  addEdge (i, j) {
    this.vertices[i] = this.vertices[i] || []
    this.vertices[j] = this.vertices[j] || []
    this.vertices[i].push(j)
    this.vertices[j].push(i)
  }
}

const vertexSolver = (curr, take, parent, tree, dp) => {
  if (dp[curr][take] != -1) return dp[curr][take]

  let ans = take
  // console.dir(tree.vertices[curr])
  for(let v of tree.vertices[curr]) {
    if (v != parent) {
      if (take) {
        ans += Math.min(vertexSolver(v, 1, curr, tree, dp), vertexSolver(v, 0, curr, tree, dp))
      } else {
        ans += vertexSolver(v, 1, curr, tree, dp)
      }
    }
  }

  dp[curr][take] = ans
  return dp[curr][take]
}

const main = () => {
   let t = new Tree()
   t.addEdge(1, 2)
   t.addEdge(1, 3)

   let dp = Array(3 + 1).fill().map(() => Array(2).fill(-1))
   console.log('The solution for vertex cover for the tree is ', Math.min(vertexSolver(1, 0, -1, t, dp), vertexSolver(1, 1, -1, t, dp)))


   t = new Tree()
   t.addEdge(1, 2)
   t.addEdge(1, 3)
   t.addEdge(1, 4)
   t.addEdge(2, 5)
   t.addEdge(3, 6)
   t.addEdge(4, 7)

   dp = Array(7 + 1).fill().map(() => Array(2).fill(-1))
   console.log('The solution for vertex cover for the tree is ', Math.min(vertexSolver(1, 0, -1, t, dp), vertexSolver(1, 1, -1, t, dp)))
}

main()