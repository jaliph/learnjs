/**
 * https://leetcode.com/problems/shortest-path-visiting-all-nodes/
 * @param {number[][]} graph
 * @return {number}
 */
const shortestPathLength = function (graph) {
  const v = graph.length
  const visited = new Set()

  const q = []
  for (let i = 0; i < v; i++) {
    q.push([1 << i, i, 0])
    visited.add(`${(1 << i)}#${i}`)
  }

  let k = 0
  let newMask
  while (k < q.length) {
    const [mask, curr, dist] = q[k++]

    if (mask === ((1 << v) - 1)) {
      return dist
    }

    for (const n of graph[curr]) {
      newMask = mask | (1 << n)
      if (!visited.has(`${newMask}#${n}`)) {
        visited.add(`${newMask}#${n}`)
        q.push([newMask, n, dist + 1])
      }
    }
  }

  return -1
}

const main = () => {
  // graph = [[1],[0,2,4],[1,3,4],[2],[1,2]]
  // console.log('Shortest Path Length to visit all the nodes is .. ', shortestPathLength(graph))

  graph = [[1, 2, 3], [0], [0], [0]]
  console.log('Shortest Path Length to visit all the nodes is .. ', shortestPathLength(graph))

  // graph = [[1],[0,2,4],[1,3,4],[2],[1,2]]
  // console.log('Shortest Path Length to visit all the nodes is .. ', shortestPathLength(graph))
}

main()
