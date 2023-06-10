// https://leetcode.com/problems/minimum-number-of-days-to-disconnect-island/

/**
 * @param {number[][]} grid
 * @return {number}
 */
const minDays = function (grid) {
  const r = grid.length
  const c = grid[0].length

  const DFS_Helper = (i, j, visited) => {
    if (i < 0 || j < 0 || i >= r || j >= c) {
      return
    }

    if (visited[i][j]) {
      return
    }

    if (grid[i][j] == 0) {
      return
    }

    visited[i][j] = true
    DFS_Helper(i + 1, j, visited)
    DFS_Helper(i, j + 1, visited)
    DFS_Helper(i - 1, j, visited)
    DFS_Helper(i, j - 1, visited)
  }

  const isDisconnected = (grid) => {
    const visited = Array(r).fill().map(() => Array(c).fill(false))
    let isLandCount = 0
    for (let i = 0; i < r; i++) {
      for (let j = 0; j < c; j++) {
        if (!visited[i][j] && grid[i][j] == 1) {
          isLandCount++
          if (isLandCount >= 2) {
            return true
          }
          DFS_Helper(i, j, visited)
        }
      }
    }

    return isLandCount != 1
  }

  if (isDisconnected(grid)) {
    return 0
  } else {
    // check for each position
    for (let i = 0; i < r; i++) {
      for (let j = 0; j < c; j++) {
        if (grid[i][j] == 1) {
          grid[i][j] = 0
          if (isDisconnected(grid)) {
            return 1
          }
          grid[i][j] = 1
        }
      }
    }
    return 2
  }
}

const Print2D = arr => arr.forEach(o => console.log(...o))

const main = () => {
  grid = [[0, 1, 1, 0], [0, 1, 1, 0], [0, 0, 0, 0]]
  console.log('Min days to make the island disconnected is ', minDays(grid))
}

main()
