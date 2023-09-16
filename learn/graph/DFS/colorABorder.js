// https://leetcode.com/problems/coloring-a-border/

/**
 * @param {number[][]} grid
 * @param {number} row
 * @param {number} col
 * @param {number} color
 * @return {number[][]}
 */
var colorBorder = function(grid, row, col, color) {
  let r = grid.length
  let c = grid[0].length

  Print2D(grid)

  const DFS_Helper = (x, y, prev, next) => {
    if (x < 0 || y < 0 || x >= r || y >= c) {
      return
    }
    
    if (grid[x][y] == next) {
      return
    }

    if (grid[x][y] != prev) {
      return
    }

    grid[x][y] = next

    DFS_Helper(x + 1, y, prev, next)
    DFS_Helper(x, y + 1, prev, next)
    DFS_Helper(x - 1, y, prev, next)
    DFS_Helper(x, y - 1, prev, next)
  }

  DFS_Helper(row, col, grid[row][col], color)
  
  return grid
};

const main = () => {
  grid = [[1,1],[1,2]], row = 0, col = 0, color = 3
  console.log('Transformed grid is ', colorBorder(grid, row, col, color))

  grid = [[1,2,2],[2,3,2]], row = 0, col = 1, color = 3
  console.log('Transformed grid is ', colorBorder(grid, row, col, color))

  grid = [[1,1,1],[1,1,1],[1,1,1]], row = 1, col = 1, color = 2
  console.log('Transformed grid is ', colorBorder(grid, row, col, color))
}

const Print2D = arr => arr.forEach(o => console.log(...o))

main()