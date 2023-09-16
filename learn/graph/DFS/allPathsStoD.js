// https://leetcode.com/problems/all-paths-from-source-to-target/

/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
const allPathsSourceTarget = function (graph) {
  const result = []
  const path = []
  path.push(0)

  // as DAG, no cycles
  const DFSSearch = (i, path) => {
    if (i + 1 == graph.length) {
      result.push([...path])
      return
    }

    for (const n of graph[i]) {
      path.push(n)
      DFSSearch(n, path)
      path.pop()
    }
  }

  DFSSearch(0, path)
  return result
}

const main = () => {
  const g = [[1, 2], [3], [3], []]
  console.log('The paths are ', allPathsSourceTarget(g))
}

main()
