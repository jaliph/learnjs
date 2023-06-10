
const isBipartite = function (graph) {
  const visited = new Map()

  const colorMap = []

  const isBipartiteChecker = (curr, parent, color) => {
    visited.set(Number(curr), true)
    colorMap[curr] = color
    for (const n of graph[curr]) {
      if (!visited.has(n)) {
        const subProb = isBipartiteChecker(n, curr, color * -1)
        if (!subProb) return false
      } else if (parent != n && color == colorMap[n]) {
        return false
      }
    }
    return true
  }

  let ans = true
  for (const i in graph) {
    if (!visited.has(Number(i))) {
      ans &= isBipartiteChecker(i, -1, 1)
    }
  }

  return ans != 0
}

const main = () => {
  const g = [[1, 2, 3], [0, 2], [0, 1, 3], [0, 2]]
  console.log('is the graph bipartite ', isBipartite(g))
}

main()
