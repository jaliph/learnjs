// https://leetcode.com/problems/minimum-cost-to-make-at-least-one-valid-path-in-a-grid/
/**
 * @param {number[][]} grid
 * @return {number}
 */

const minCost = function (grid) {
  const r = grid.length
  const c = grid[0].length

  const visited = Array(r).fill().map(() => [...new Array(c)].fill(false))

  const q = []
  q.push([0, 0, 0])

  const directions = [[0, 1], [0, -1], [1, 0], [-1, 0]]

  while (q.length > 0) {
    const [x, y, d] = q.shift()
    if (x == r - 1 && y == c - 1) {
      return d
    }

    if (visited[x][y]) {
      continue
    }

    visited[x][y] = true

    for (let k = 1; k <= 4; k++) {
      const n_x = x + directions[k - 1][0]
      const n_y = y + directions[k - 1][1]

      if (n_x < 0 || n_y < 0 || n_x >= r || n_y >= c) {
        continue
      }

      if (grid[x][y] == k) {
        q.unshift([n_x, n_y, d])
      } else {
        q.push([n_x, n_y, d + 1])
      }
    }
  }
  return -1
}

const main = () => {
  grid = [[1, 1, 3], [3, 2, 2], [1, 1, 4]]
  console.log('The min cost to reach the botton right end is ', minCost(grid))

  // grid = [[1,1,1,1],[2,2,2,2],[1,1,1,1],[2,2,2,2]]
  // console.log('The min cost to reach the botton right end is ', minCost(grid))

  // grid = [[1,2],[4,3]]
  // console.log('The min cost to reach the botton right end is ', minCost(grid))
}

main()
