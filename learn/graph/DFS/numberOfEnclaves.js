// https://leetcode.com/problems/number-of-enclaves/

/**
 * @param {number[][]} grid
 * @return {number}
 */
var numEnclaves = function(grid) {
  const r = grid.length
  const c = grid[0].length


  const DFS_Helper = (x, y) => {
    if (x < 0 || y < 0 || x >= r || y >= c) {
      return 0
    }
    
    if (grid[x][y] == 0) {
      return 0
    }

    // update the value
    grid[x][y] = 0

    let ans = 1
    ans += DFS_Helper(x + 1, y)
    ans += DFS_Helper(x, y + 1)
    ans += DFS_Helper(x - 1, y)
    ans += DFS_Helper(x, y - 1)
    return ans
  }

  for (let i = 0; i < r; i++) {
    if (grid[i][0] == 1) DFS_Helper(i, 0)
    if (grid[i][c - 1] == 1) DFS_Helper(i, c - 1)
  }

  for (let j = 0; j < c; j++) {
    if (grid[0][j] == 1) DFS_Helper(0, j)
    if (grid[r - 1][j] == 1) DFS_Helper(r - 1, j)
  }

  let result = 0
  for (let i = 0; i < r; i++) {
    for (let j = 0; j < c; j++) {
      if (grid[i][j] == 1) {
        // console.log('Checking in')
        result += 1
      }
    }
  }
  return result
};

const main = () => {
  grid = [[0,0,0,0],[1,0,1,0],[0,1,1,0],[0,0,0,0]]

  console.log('Size of the island is ', numEnclaves(grid))
}

main()