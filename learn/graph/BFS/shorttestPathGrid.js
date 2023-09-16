// https://leetcode.com/problems/shortest-path-in-binary-matrix/

/**
 * @param {number[][]} grid
 * @return {number}
 */
var shortestPathBinaryMatrix = function(grid) {
  let r = grid.length
  let c = grid[0].length

  let distance = Array(r).fill().map(() => Array(c).fill(0))

  let q = []
  if (grid[0][0] == 0) {
    q.push([0, 0])
    distance[0][0] = 1
  }

  const isValid = (i, j) => {
    if (i >= 0 && j >= 0 && i < r && j < c) {
      if (distance[i][j] == 0) {
        return true
      }
    }
    return false
  }

  let paths = [[0, 1], [1, 0], [0, -1], [-1, 0], [1, 1], [-1, -1], [1, -1], [-1, 1]]
  
  let i = 0
  while (i < q.length) {
    let [x, y] = q[i++]

    for (let p of paths) {
      let n_x = x + p[0]
      let n_y = y + p[1]

      if (isValid(n_x, n_y)) {
        if (grid[n_x][n_y] == 1) {
          distance[n_x][n_y] = -1
        } else {
          distance[n_x][n_y] = distance[x][y] + 1
          q.push([n_x, n_y])
        }
      }
    }
  }

  // Print2D(distance)
  return (distance[r - 1][c - 1] != 0) ? distance[r - 1][c - 1] : -1
};

const Print2D = arr => arr.forEach(o => console.log(...o))

const main = () => {
  grid = [[0,1],[1,0]]
  console.log('Shortest path is ', shortestPathBinaryMatrix(grid))


  grid = [[0,0,0],[1,1,0],[1,1,0]]
  console.log('Shortest path is ', shortestPathBinaryMatrix(grid))

  grid = [[1,0,0],[1,1,0],[1,1,0]]
  console.log('Shortest path is ', shortestPathBinaryMatrix(grid))
}

main()