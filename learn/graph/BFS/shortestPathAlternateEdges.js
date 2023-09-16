// https://leetcode.com/problems/shortest-path-with-alternating-colors/

/**
 * @param {number} n
 * @param {number[][]} redEdges
 * @param {number[][]} blueEdges
 * @return {number[]}
 */
var shortestAlternatingPaths = function(n, redEdges, blueEdges) {
  let red = Array(n).fill().map(() => Array().fill([]))
  let blue = Array(n).fill().map(() => Array().fill([]))

  for (let e of redEdges) {
    red[e[0]].push(e[1])
  }

  for (let e of blueEdges) {
    blue[e[0]].push(e[1])
  }

  let dist = Array(n).fill(-1)

  let q = []
  q.push([0, 0, null])

  let visitR = [], visitB = []
  let i = 0
  while (i < q.length) {
    let [curr, d, color] = q[i++]
    if (dist[curr] == -1) {
      dist[curr] = d
    }
    
    if (color != 'R') {
      for (let n of red[curr]) {
        if (!visitR[n]) {
          visitR[n] = true
          q.push([n, d + 1, 'R'])
        }
      }
    }

    if (color != 'B') {
      for (let n of blue[curr]) {
        if (!visitB[n]) {
          visitB[n] = true
          q.push([n, d + 1, 'B'])
        }
      }
    }
  }

  return dist
};


const main = () => {
  n = 3, redEdges = [[0,1],[1,2]], blueEdges = []
  console.log('Min distance for each vertex are ', shortestAlternatingPaths(n, redEdges, blueEdges))

  n = 5, redEdges = [[0,1],[1,2],[2,3],[3,4]], blueEdges = [[1,2],[2,3],[3,1]]
  console.log('Min distance for each vertex are ', shortestAlternatingPaths(n, redEdges, blueEdges))
}

main()