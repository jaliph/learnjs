// https://leetcode.com/problems/minimum-height-trees/

/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
const findMinHeightTrees = function (n, edges) {
  if (n == 1) {
    return [0]
  }

  const g = Array(n).fill().map(() => Array().fill([]))
  const degree = Array(n).fill(0)
  const dist = Array(n).fill(0)

  for (const e of edges) {
    g[e[0]].push(e[1])
    g[e[1]].push(e[0])
    degree[e[0]]++
    degree[e[1]]++
  }

  const q = []
  let i = 0

  for (const v in degree) {
    if (degree[v] == 1) {
      q.push(Number(v))
    }
  }

  console.log(q)
  while (i < q.length) {
    const curr = q[i++]

    for (const neigh of g[curr]) {
      degree[neigh]--
      if (degree[neigh] == 1) {
        dist[neigh] = dist[curr] + 1
        q.push(neigh)
      }
    }
  }

  console.log(dist)
  console.log(q)

  const x = q[q.length - 1]
  const y = q[q.length - 2]
  if (dist[x] == dist[y]) {
    return [y, x]
  } else {
    return [x]
  }
}

const main = () => {
  n = 4, edges = [[1, 0], [1, 2], [1, 3]]
  console.log('The node of the tree with min height is ', findMinHeightTrees(n, edges))

  n = 6, edges = [[3, 0], [3, 1], [3, 2], [3, 4], [5, 4]]
  console.log('The node of the tree with min height is ', findMinHeightTrees(n, edges))

  n = 7, edges = [[0, 1], [1, 2], [1, 3], [2, 4], [3, 5], [4, 6]]
  console.log('The node of the tree with min height is ', findMinHeightTrees(n, edges))
}

main()
