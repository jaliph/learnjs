// https://leetcode.com/problems/find-eventual-safe-states/
/**
 * @param {number[][]} graph
 * @return {number[]}
 */
const eventualSafeNodes = function (graph) {
  const safe = new Map()
  const DFS_Solver = (curr) => {
    if (safe.has(curr)) {
      return safe.get(curr)
    }

    safe.set(curr, false)
    for (const n of graph[curr]) {
      const ans = DFS_Solver(n)
      if (!ans) {
        safe.set(n, false)
        return safe.get(n)
      }
    }
    safe.set(curr, true)
    return safe.get(curr)
  }

  const result = []
  for (let i = 0; i < graph.length; i++) {
    if (DFS_Solver(i)) {
      result.push(i)
    }
  }
  return result
}

const main = () => {
  graph = [[1, 2], [2, 3], [5], [0], [5], [], []]
  console.log('set of safe state are ', eventualSafeNodes(graph))
}

main()
