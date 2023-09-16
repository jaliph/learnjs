// https://leetcode.com/problems/count-servers-that-communicate/

/**
 * @param {number[][]} grid
 * @return {number}
 */
const countServers = function (grid) {
  const rowMap = []
  const columnMap = []

  const r = grid.length
  const c = grid[0].length

  for (let i = 0; i < r; i++) {
    for (let j = 0; j < c; j++) {
      if (grid[i][j] == 1) {
        rowMap[i] = (rowMap[i] || 0) + 1
        columnMap[j] = (columnMap[j] || 0) + 1
      }
    }
  }

  let ans = 0
  for (let i = 0; i < r; i++) {
    for (let j = 0; j < c; j++) {
      if (grid[i][j] == 1 && (rowMap[i] > 1 || columnMap[j] > 1)) {
        console.log('came in', [i, j])
        ans++
      }
    }
  }

  console.log(rowMap)
  console.log(columnMap)
  return ans
}

const main = () => {
  grid = [[1, 0], [0, 1]]
  console.log('Count of connected servers are ', countServers(grid))

  grid = [[1, 1, 0, 0], [0, 0, 1, 0], [0, 0, 1, 0], [0, 0, 0, 1]]
  console.log('Count of connected servers are ', countServers(grid))
}

main()
