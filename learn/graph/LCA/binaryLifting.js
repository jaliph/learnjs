
const LCA = (n, edges, queries) => {
  const g = Array(n + 1).fill().map(() => Array().fill())

  for (const e of edges) {
    g[e[0]].push(e[1])
    g[e[1]].push(e[0])
  }

  const N = 20

  const sparse = Array(n + 1).fill().map(() => Array(N).fill(0))
  const depth = []

  const DFS_Helper = (curr, par) => {
    depth[curr] = (depth[par] || 0) + 1
    sparse[curr][0] = par
    for (let j = 1; j < N; j++) {
      sparse[curr][j] = sparse[sparse[curr][j - 1]][j - 1]
    }

    for (const n of g[curr]) {
      if (n != par) {
        DFS_Helper(n, curr)
      }
    }
  }

  DFS_Helper(1, 0)

  const findLCA = (i, j) => {
    if (depth[i] < depth[j]) {
      const temp = j
      j = i
      i = temp
    }

    const diff = depth[i] - depth[j]
    // console.log(diff)

    for (let k = 0; k < N; k++) {
      if ((diff >> k) & 1) {
        i = sparse[i][k]
      }
    }
    // console.log(depth[i], depth[j])

    for (let k = 0; k < N; k++) {
      if (sparse[i][k] != sparse[j][k]) {
        i = sparse[i][k]
        j = sparse[j][k]
      }
    }

    return sparse[j][0] == 0 ? 1 : sparse[j][0]
  }

  const results = []
  for (const q of queries) {
    results.push(findLCA(q[0], q[1]))
  }
  return results
}

const Print2D = arr => arr.forEach(o => console.log(...o))

const main = () => {
  n = 9

  edges = [
    [1, 2],
    [1, 3],
    [3, 4],
    [3, 5],
    [5, 6],
    [5, 9],
    [6, 7],
    [7, 8]
  ]

  queries = [
    [4, 5],
    [2, 5],
    [1, 4],
    [8, 2],
    [9, 8]
  ]

  console.log('Queries have ans ', LCA(n, edges, queries))
}

main()
