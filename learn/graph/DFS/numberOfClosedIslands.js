// https://leetcode.com/problems/number-of-closed-islands/

/**
 * @param {number[][]} grid
 * @return {number}
 */
const closedIsland = function (grid) {
  const r = grid.length
  const c = grid[0].length

  // Print2D(grid)

  const DFS_Helper = (curr, value) => {
    const [x, y] = curr
    if (x < 0 || y < 0 || x >= r || y >= c) {
      return
    }
    // if (visited[x][y]) {
    //   return
    // }
    if (grid[x][y] != 0) {
      return
    }

    // visited[x][y] = 1
    grid[x][y] = value

    DFS_Helper([x + 1, y], value)
    DFS_Helper([x, y + 1], value)
    DFS_Helper([x - 1, y], value)
    DFS_Helper([x, y - 1], value)
  }

  for (let i = 0; i < r; i++) {
    if (grid[i][0] == 0) DFS_Helper([i, 0], 1)
    if (grid[i][c - 1] == 0) DFS_Helper([i, c - 1], 1)
  }

  for (let j = 0; j < c; j++) {
    if (grid[0][j] == 0) DFS_Helper([0, j], 1)
    if (grid[r - 1][j] == 0) DFS_Helper([r - 1, j], 1)
  }

  let count = 2
  for (let i = 0; i < r; i++) {
    for (let j = 0; j < c; j++) {
      if (grid[i][j] == 0) {
        // console.log('Checking in')
        DFS_Helper([i, j], ++count)
      }
    }
  }
  // Print2D(grid)
  return count - 2
}

const Print2D = arr => arr.forEach(o => console.log(...o))

const main = () => {
  grid = [[1, 1, 1, 1, 1, 1, 1, 0], [1, 0, 0, 0, 0, 1, 1, 0], [1, 0, 1, 0, 1, 1, 1, 0], [1, 0, 0, 0, 0, 1, 0, 1], [1, 1, 1, 1, 1, 1, 1, 0]]
  console.log('Count of closed Islands are ', closedIsland(grid))
}

main()
