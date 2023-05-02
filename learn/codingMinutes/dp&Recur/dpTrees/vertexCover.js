
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

// DFS
const DFSSolver = (curr, parent, dp, tree) => {
  dp[curr][0] = 0
  dp[curr][1] = 1

  for (let v of tree.vertices[curr]) {
    if (v != parent) {
      // go to the leaves and calculate for leaves
      DFSSolver(v, curr, dp, tree)
      dp[curr][0] += dp[v][1]
      dp[curr][1] += Math.min(dp[v][0], dp[v][1])
    }
  }
}

// BFS
const BFSSolver = (tree, dp) => {
  let visited = Array(Object.keys(tree.vertices).length + 1).fill(0)

  let q = []
  // add the leaf nodes first
  for (let v in tree.vertices) {
    if (tree.vertices[v].length == 1) {
      q.push(v)
    }
  }
  
  let root
  while (q.length > 0) {
    let curr = q.shift()
    root = curr
    visited[curr] = 1

    dp[curr][0] = 0
    dp[curr][1] = 1

    for (let v of tree.vertices[curr]) {
      // if already visited , we are ready to calculate
      if (visited[v]) {
        dp[curr][0] += dp[v][1]
        dp[curr][1] += Math.min(dp[v][0], dp[v][1])
      } else {
        q.push(v)
      }
    }
  }
  
  return Math.min(dp[root][0], dp[root][1])
}


const main = () => {
  let t = new Tree()
  t.addEdge(1, 2)
  t.addEdge(1, 3)

  let dp = Array(3 + 1).fill().map(() => Array(2).fill(-1))
  //  console.log('The solution for vertex cover for the tree is ', Math.min(vertexSolver(1, 0, -1, t, dp), vertexSolver(1, 1, -1, t, dp)))
  // DFSSolver(1, -1, dp, t)
  // console.log('The solution for vertex cover for the tree is ', Math.min(dp[1][0], dp[1][1]))
  console.log('The solution for vertex cover for the tree is ',BFSSolver(t, dp))

  


  t = new Tree()
  t.addEdge(1, 2)
  t.addEdge(1, 3)
  t.addEdge(1, 4)
  t.addEdge(2, 5)
  t.addEdge(3, 6)
  t.addEdge(4, 7)

  dp = Array(7 + 1).fill().map(() => Array(2).fill(-1))
  //  console.log('The solution for vertex cover for the tree is ', Math.min(vertexSolver(1, 0, -1, t, dp), vertexSolver(1, 1, -1, t, dp)))
  console.log('The solution for vertex cover for the tree is ',BFSSolver(t, dp))
}

main()