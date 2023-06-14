/**
 * Find LCA
 */

const LCA_Brute = (n, edges, queries) => {
  let g = Array(n + 1).fill().map(() => Array().fill())

  for (let e of edges) {
    g[e[0]].push(e[1])
    g[e[1]].push(e[0])
  }

  const depth = []
  const parents = []

  const DFS_Helper = (curr, par) => {
    parents[curr] = par
    depth[curr] = (depth[par] || 0) + 1

    for (let n of g[curr]) {
      if (n != par) {
        DFS_Helper(n, curr)
      }
    }
  }

  DFS_Helper(1, 0)
  // console.log(parents)
  // console.log(depth)


  const findLCA = (i, j) => {
    if (depth[i] < depth[j]) {
      let temp = i
      i = j
      j = temp
    }

    let diff = depth[i] - depth[j]
    console.log(diff)

    while (diff--) {
      i = parents[i]
    }
    
    while (i != j) {
      i = parents[i]
      j = parents[j]
    }

    return i
  }

  let results = []
  for (let q of queries) {
    results.push(findLCA(q[0], q[1]))
  }
  return results
}

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

  console.log('Queries have ans ', LCA_Brute(n, edges, queries))
}

main()