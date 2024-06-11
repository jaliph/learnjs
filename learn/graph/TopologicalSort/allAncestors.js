// https://leetcode.com/problems/all-ancestors-of-a-node-in-a-directed-acyclic-graph/
/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[][]}
 */
const getAncestors = function (n, edges) {
  const g = Array(n).fill().map(() => Array().fill([]))
  const gr = Array(n).fill().map(() => Array().fill([]))

  const parents = Array(n).fill().map(() => new Set())
  const indegree = Array(n).fill(0)

  for (const e of edges) {
    g[e[0]].push(e[1])
    gr[e[1]].push(e[0])
    indegree[e[1]]++
  }
  // console.dir(g)

  const q = []
  for (let i = 0; i < n; i++) {
    if (indegree[i] == 0) q.push(i)
  }
  let index = 0
  while (index < q.length) {
    const curr = q[index++]
    // console.log('visiting, ', curr, g[curr])
    for (const neigh of g[curr]) {
      indegree[neigh]--
      if (indegree[neigh] == 0) {
        for (const prev of gr[neigh]) {
          // console.log(prev, parents[prev], 'are parents of ', n)
          for (const p of [prev, ...parents[prev]]) {
            parents[neigh].add(p)
          }
        }

        q.push(neigh)
      }
    }
  }

  // console.dir(parents)

  const responses = []
  for (let i = 0; i < n; i++) {
    responses.push([...parents[i]].sort((a, b) => a - b))
  }
  return responses
}

const main = () => {
  n = 8, edgeList = [[0, 3], [0, 4], [1, 3], [2, 4], [2, 7], [3, 5], [3, 6], [3, 7], [4, 6]]
  console.log('all the ancestors are ', getAncestors(n, edgeList))

  n = 26, edgeList = [[5, 22], [5, 1], [5, 6], [5, 21], [5, 0], [5, 3], [5, 23], [5, 18], [5, 17], [5, 8], [5, 14], [5, 12], [5, 11], [5, 7], [16, 1], [16, 19], [16, 15], [16, 17], [16, 8], [16, 9], [16, 2], [16, 12], [16, 20], [16, 4], [16, 7], [22, 1], [22, 21], [22, 3], [22, 23], [22, 10], [22, 15], [22, 18], [22, 8], [22, 14], [22, 9], [22, 2], [22, 12], [22, 11], [22, 4], [1, 6], [1, 13], [1, 21], [1, 0], [1, 3], [1, 15], [1, 18], [1, 25], [1, 14], [1, 2], [1, 4], [6, 19], [6, 3], [6, 23], [6, 10], [6, 15], [6, 18], [6, 17], [6, 8], [6, 25], [6, 9], [6, 2], [6, 24], [6, 12], [6, 20], [6, 11], [13, 21], [13, 3], [13, 10], [13, 18], [13, 17], [13, 25], [13, 2], [13, 7], [19, 21], [19, 0], [19, 15], [19, 18], [19, 17], [19, 14], [19, 2], [19, 24], [19, 12], [19, 4], [19, 7], [21, 10], [21, 18], [21, 8], [21, 25], [21, 9], [21, 2], [21, 20], [21, 4], [0, 17], [0, 8], [0, 14], [0, 2], [0, 7], [3, 23], [3, 25], [3, 14], [3, 2], [3, 11], [3, 4], [23, 10], [23, 18], [23, 17], [23, 2], [23, 24], [23, 20], [23, 11], [23, 4], [10, 15], [10, 17], [10, 14], [10, 2], [10, 12], [10, 11], [10, 4], [15, 18], [15, 17], [15, 8], [15, 24], [15, 7], [18, 17], [18, 8], [18, 25], [18, 14], [18, 9], [18, 24], [18, 11], [18, 7], [17, 8], [17, 24], [17, 20], [17, 11], [17, 4], [17, 7], [8, 9], [8, 2], [8, 24], [8, 20], [8, 11], [8, 4], [8, 7], [25, 9], [25, 4], [25, 7], [14, 9], [14, 2], [14, 12], [14, 20], [14, 11], [14, 4], [9, 2], [9, 24], [9, 12], [2, 24], [2, 20], [2, 11], [2, 4], [2, 7], [24, 12], [24, 20], [24, 4], [12, 11], [12, 7], [20, 11], [20, 4], [11, 4], [11, 7]]

  console.log('all the ancestors are ', getAncestors(n, edgeList))
}

main()
