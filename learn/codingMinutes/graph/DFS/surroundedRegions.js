// https://leetcode.com/problems/surrounded-regions/


/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function(grid) {
  const r = grid.length
  const c = grid[0].length
  
  const visited = Array(r).fill().map(() => Array(c).fill(false))


  const DFS_Helper = (x, y) => {
    if (x < 0 || y < 0 || x >= r || y >= c) {
      return
    }
    
    if (grid[x][y] == 'X') {
      return
    }

    if (visited[x][y]) {
      return
    }

    // update the value
    visited[x][y] = true

    DFS_Helper(x + 1, y)
    DFS_Helper(x, y + 1)
    DFS_Helper(x - 1, y)
    DFS_Helper(x, y - 1)
  }

  for (let i = 0; i < r; i++) {
    if (grid[i][0] == 'O') DFS_Helper(i, 0)
    if (grid[i][c - 1] == 'O') DFS_Helper(i, c - 1)
  }

  for (let j = 0; j < c; j++) {
    if (grid[0][j] == 'O') DFS_Helper(0, j)
    if (grid[r - 1][j] == 'O') DFS_Helper(r - 1, j)
  }

  // Print2D(visited)
  for (let i = 0; i < r; i++) {
    for (let j = 0; j < c; j++) {
      // console.log(i, j, !visited[i][j], grid[i][j])
      if (!visited[i][j] && grid[i][j] == 'O') {
        grid[i][j] = 'X'
      }
    }
  }
  return grid
};

const Print2D = arr => arr.forEach(o => console.log(...o))

const main = () => {
  board = [["X","X","X","X"],["X","O","O","X"],["X","X","O","X"],["X","O","X","X"]]
  console.log('surround regions' , solve(board))


  board = [["X"]]
  console.log('surround regions' , solve(board))
}

main()