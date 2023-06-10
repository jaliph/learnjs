
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

  const DFS = (curr, par) => {
    console.log(curr, ' has parent ', par)
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

const giveKthParent = (i, j, mat) => {
  let curr = i
  for (let k = 20; k >= 0; k--) {
    if ((j >> k) & 1) {
      // get the curr's j parent
      curr = mat[curr][k]
    }
  }

  if (curr == 0) return -1

  return curr
}

const main = () => {
  const t = new Tree()

  t.addEdge(1, 2)
  t.addEdge(1, 3)
  t.addEdge(3, 4)
  t.addEdge(3, 5)

  const mat = sparseMatrix(t)
  // Print2D(mat)

  const queries = [
    [4, 1],
    [4, 2],
    [4, 3]
  ]

  queries.forEach(q => {
    console.log(q[0], 'has the level ', q[1], ' as parent ', giveKthParent(q[0], q[1], mat))
  })
}

const Print2D = arr => arr.forEach(o => console.log(...o))

main()
