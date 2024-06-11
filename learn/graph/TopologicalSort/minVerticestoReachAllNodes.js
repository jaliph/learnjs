/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
const findSmallestSetOfVertices = function (n, edges) {
  const g = Array(n).fill().map(() => Array().fill([]))
  const inDegree = Array(n).fill(0)
  for (const e of edges) {
    g[e[0]].push(e[1])
    inDegree[e[1]]++
  }

  // const visited = []
  // const DFS_Order = (curr, order) => {

  // }
  const result = []
  for (let i = 0; i < n; i++) {
    if (inDegree[i] == 0) {
      result.push(i)
    }
  }

  return result
}

const main = () => {
  n = 6, edges = [[0, 1], [0, 2], [2, 5], [3, 4], [4, 2]]
  console.log('parents are ', findSmallestSetOfVertices(n, edges))

  n = 5, edges = [[0, 1], [2, 1], [3, 1], [1, 4], [2, 4]]
  console.log('parents are ', findSmallestSetOfVertices(n, edges))
}

main()
