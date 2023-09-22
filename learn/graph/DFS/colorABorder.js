/**
 * https://leetcode.com/problems/coloring-a-border/
 * @param {number[][]} grid
 * @param {number} row
 * @param {number} col
 * @param {number} color
 * @return {number[][]}
 */
var colorBorder = function(grid, row, col, color) {
  let r = grid.length
  let c = grid[0].length

  const visited = Array(r).fill().map(() => Array(c).fill(false))
  Print2D(grid)

  const isBorder = (i, j, color) => {
    if (i >= 0 && j >= 0 && i < r && j < c && (grid[i][j] === color || grid[i][j] === 'x')) {
      return true
    }
    return false
  }

  const DFS_Helper = (x, y, color) => {
    if (x < 0 || y < 0 || x >= r || y >= c) {
      return
    }
    if (visited[x][y]) {
      return
    }
    let value = grid[x][y]
    if (value != color) { // dnt go to other colors
      return
    }

    grid[x][y] = 'x'
    DFS_Helper(x + 1, y, color)
    DFS_Helper(x - 1, y, color)
    DFS_Helper(x, y + 1, color)
    DFS_Helper(x, y - 1, color)
    const checkUp = isBorder(x - 1, y, color)
    const checkBottom = isBorder(x + 1, y, color)
    const checkLeft = isBorder(x, y - 1, color)
    const checkRight = isBorder(x, y + 1, color)

    if (checkUp && checkBottom && checkLeft && checkRight) {
      grid[x][y] = color
      visited[x][y] = true
    }
  }

  DFS_Helper(row, col, grid[row][col])

  // console.log('-----')
  // Print2D(grid)
  for (let i = 0; i < r; i++) {
    for (let j = 0; j < c; j++) {
      grid[i][j] = grid[i][j] === 'x' ? color : grid[i][j]
    }
  }
  return grid
};

const main = () => {
  grid = [[1,1],[1,2]], row = 0, col = 0, color = 3
  console.log('Transformed grid is ', colorBorder(grid, row, col, color))

  // // grid = [[1,2,2],[2,3,2]], row = 0, col = 1, color = 3
  // // console.log('Transformed grid is ', colorBorder(grid, row, col, color))

  // grid = [[1,1,1],[1,1,1],[1,1,1]], row = 1, col = 1, color = 2
  // console.log('Transformed grid is ', colorBorder(grid, row, col, color))

  // grid = [[3,2,2,2],[2,3,3,3],[1,3,1,2]], row = 0, col = 1, color = 1
  // console.log('Transformed grid is ', colorBorder(grid, row, col, color))

  grid = [[1,2,1,2,1,2],[2,2,2,2,1,2],[1,2,2,2,1,2]], row = 1, col = 3, color = 1
  console.log('Transformed grid is ', colorBorder(grid, row, col, color))
  Print2D([[1,1,1,1,1,2],[1,2,1,1,1,2],[1,1,1,1,1,2]])
}

const Print2D = arr => arr.forEach(o => console.log(...o))

main()