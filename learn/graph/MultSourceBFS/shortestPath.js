// https://leetcode.com/problems/shortest-bridge/

/**
 * @param {number[][]} grid
 * @return {number}
 */
const shortestBridge = function (grid) {
  // Print2D(grid)

  const r = grid.length
  const c = grid[0].length

  const DFS = (coord, path) => {
    const [x, y] = coord

    // base cases
    if (x < 0 || y < 0 || x >= r || y >= c) {
      return
    }

    if (grid[x][y] != 1) return

    path.push([x, y])
    grid[x][y] = 2

    DFS([x + 1, y], path)
    DFS([x - 1, y], path)
    DFS([x, y + 1], path)
    DFS([x, y - 1], path)
  }

  const set = []
  let breakFlag = false
  // find an island and mark their position to start multiBFS
  for (let i = r - 1; i >= 0; i--) {
    for (let j = c - 1; j >= 0; j--) {
      if (grid[i][j] == 1) {
        DFS([i, j], set)
        breakFlag = true
        break
      }
    }
    if (breakFlag) break
  }

  // console.log(set)
  // Print2D(grid)

  const distance = Array(r).fill().map(() => Array(c).fill(0))
  // multiSourceBFS from this set
  const multSourceBFS = () => {
    const isValid = (i, j) => {
      if (i >= 0 && j >= 0 && i < r && j < c) {
        if (distance[i][j] == 0 && (grid[i][j] == 0 || grid[i][j] == 1)) {
          return true
        }
      }
      return false
    }

    const paths = [[1, 0], [-1, 0], [0, 1], [0, -1]]

    while (set.length > 0) {
      const curr = set.shift()
      const [x, y] = curr
      // console.log('Trversin ', curr)
      for (const p of paths) {
        const n_x = x + p[0]
        const n_y = y + p[1]
        if (isValid(n_x, n_y)) {
          if (grid[n_x][n_y] == 1) {
            return distance[x][y]
          }
          distance[n_x][n_y] = distance[x][y] + 1
          set.push([n_x, n_y])
        }
      }
      // Print2D(distance)
      // console.log('---'.repeat(100))
    }
  }

  // let ans = multSourceBFS()
  // Print2D(distance)
  return multSourceBFS()
}

const Print2D = arr => arr.forEach(o => console.log(...o))

const main = () => {
  grid = [[0, 0, 1], [0, 0, 1], [1, 0, 1]]
  console.log('shortest bridge is -> ', shortestBridge(grid))

  grid = [[0, 1, 0], [0, 0, 0], [0, 0, 1]]
  console.log('shortest bridge is -> ', shortestBridge(grid))

  grid = [[1, 0], [0, 1]]
  console.log('shortest bridge is -> ', shortestBridge(grid))
}

main()
