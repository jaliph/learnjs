
/// Tree

class Tree {
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

const sparseMatrix = (t) => {
  const M = 20
  const mat = Array(t.size() + 1).fill(0).map(() => Array(M + 1).fill(0))
  // Print2D(mat)
  const DFS = (curr, par) => {
    // console.log(curr, ' has parent ', par)
    // console.log(mat[curr])
    mat[curr][0] = par
    for (let j = 1; j <= M; j++) {
      mat[curr][j] = mat[mat[curr][j - 1]][j - 1]
    }

    // console.log('Visiting ->', curr)
    for (child of t.vertices[curr]) {
      if (child != par) {
        DFS(child, curr)
      }
    }
  }

  DFS(1, 0)

  return mat
}

const main = () => {
  const t = new Tree()

  t.addEdge(1, 2)
  t.addEdge(1, 3)
  t.addEdge(2, 4)
  t.addEdge(4, 5)
  t.addEdge(5, 6)
  t.addEdge(6, 7)

  const mat = sparseMatrix(t)
  console.log('Sparse matrix for the tree is ::')
  Print2D(mat)
}

const Print2D = arr => arr.forEach(o => console.log(...o))

main()
