// https://leetcode.com/problems/critical-connections-in-a-network/

/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number[][]}
 */
const criticalConnections = function (n, connections) {
  const g = Array(n).fill().map(() => Array().fill([]))

  for (const e of connections) {
    g[e[0]].push(e[1])
    g[e[1]].push(e[0])
  }

  const disc = Array(n).fill(0)
  const low = Array(n).fill(0)
  const visited = Array(n).fill(0)

  const bridges = []

  let time = 1
  const DFS = (curr, par) => {
    disc[curr] = time
    low[curr] = time
    time++
    visited[curr] = true
    let child = 0
    for (const n of g[curr]) {
      if (!visited[n]) {
        DFS(n, curr)
        child++
        low[curr] = Math.min(low[curr], low[n])

        // bridges
        if (disc[curr] < low[n]) {
          bridges.push([curr, n])
        }
      } else if (n != par) {
        low[curr] = Math.min(low[curr], disc[n])
      }
    }
  }

  DFS(0, -1)
  return bridges
}

const main = () => {
  n = 4, connections = [[0, 1], [1, 2], [2, 0], [1, 3]]
  console.log('The bridges are ', criticalConnections(n, connections))

  n = 2, connections = [[0, 1]]
  console.log('The bridges are ', criticalConnections(n, connections))
}

main()
