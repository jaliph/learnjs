
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

const LCA = (t, u, v) => {
  const M = 20
  const depth = Array(t.size + 1).fill(0)
  const mat = Array(t.size() + 1).fill(0).map(() => Array(M + 1).fill(0))

  const DFS = (curr, par) => {
    depth[curr] = depth[par] + 1
    mat[curr][0] = par
    for (let j = 1; j <= M; j++) {
      // parent's parent
      mat[curr][j] = mat[mat[curr][j - 1]][j - 1]
    }

    // console.log('Visiting ->', curr)
    for (const child of t.vertices[curr]) {
      if (child != par) {
        DFS(child, curr)
      }
    }
  }

  DFS(1, 0)

  const LCAFinder = (u, v) => {
    if (u == v) return u

    if (depth[v] > depth[u]) {
      // temp
      const temp = u
      u = v
      v = temp
    }

    const diff = depth[u] - depth[v]

    // move find the parent of u so that they are at same level from root
    for (let j = 0; j <= M; j++) {
      if ((diff >> j) & 1) {
        u = mat[u][j]
      }
    }

    for (let j = M; j >= 0; j--) {
      if (mat[u][j] != mat[v][j]) {
        u = mat[u][j]
        v = mat[v][j]
      }
    }

    return mat[u][0]
  }

  return LCAFinder(u, v)
}

const main = () => {
  const t = new Tree()

  t.addEdge(1, 2)
  t.addEdge(1, 3)
  t.addEdge(2, 4)
  t.addEdge(4, 5)
  t.addEdge(5, 6)
  t.addEdge(6, 7)

  const parent = LCA(t, 6, 7)
  console.log('Lowest Common Ancestor is  ::', parent)
}

const Print2D = arr => arr.forEach(o => console.log(...o))

main()
