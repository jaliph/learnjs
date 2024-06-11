// https://leetcode.com/problems/shortest-path-with-alternating-colors/

/**
 * @param {number} n
 * @param {number[][]} redEdges
 * @param {number[][]} blueEdges
 * @return {number[]}
 */
const shortestAlternatingPaths = function (n, redEdges, blueEdges) {
  const red = Array(n).fill().map(() => Array().fill([]))
  const blue = Array(n).fill().map(() => Array().fill([]))

  for (const e of redEdges) {
    red[e[0]].push(e[1])
  }

  for (const e of blueEdges) {
    blue[e[0]].push(e[1])
  }

  const dist = Array(n).fill(-1)

  const q = []
  q.push([0, 0, null])

  const visitR = []; const visitB = []
  let i = 0
  while (i < q.length) {
    const [curr, d, color] = q[i++]
    if (dist[curr] == -1) {
      dist[curr] = d
    }

    if (color != 'R') {
      for (const n of red[curr]) {
        if (!visitR[n]) {
          visitR[n] = true
          q.push([n, d + 1, 'R'])
        }
      }
    }

    if (color != 'B') {
      for (const n of blue[curr]) {
        if (!visitB[n]) {
          visitB[n] = true
          q.push([n, d + 1, 'B'])
        }
      }
    }
  }

  return dist
}

const main = () => {
  n = 3, redEdges = [[0, 1], [1, 2]], blueEdges = []
  console.log('Min distance for each vertex are ', shortestAlternatingPaths(n, redEdges, blueEdges))

  n = 5, redEdges = [[0, 1], [1, 2], [2, 3], [3, 4]], blueEdges = [[1, 2], [2, 3], [3, 1]]
  console.log('Min distance for each vertex are ', shortestAlternatingPaths(n, redEdges, blueEdges))
}

main()
