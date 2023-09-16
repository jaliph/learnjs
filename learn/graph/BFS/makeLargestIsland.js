// https://leetcode.com/problems/making-a-large-island/

/**
 * @param {number[][]} grid
 * @return {number}
 */
const largestIsland = function (grid) {
  const r = grid.length
  const c = grid[0].length
  const visited = Array(r).fill().map(() => Array(c).fill(0))

  const isValid = (i, j) => {
    if (i < 0 || j < 0 || i >= r || j >= c) {
      return false
    }
    return grid[i][j] == 1
  }

  const bfs = (i, j, color) => {
    const q = []
    visited[i][j] = 1
    q.push([i, j])
    const paths = [
      [0, 1], [0, -1], [1, 0], [-1, 0]
    ]

    while (q.length > 0) {
      const curr = q.shift()
      const [x, y] = curr
      colorCount[color] = (colorCount[color] || 0) + 1
      console.log(x + '-' + y, colorCount)
      grid[x][y] = color

      for (const p of paths) {
        const n_x = x + p[0]
        const n_y = y + p[1]
        if (isValid(n_x, n_y)) {
          if (!visited[n_x][n_y]) {
            visited[n_x][n_y] = 1
            q.push([n_x, n_y])
          }
        }
      }
    }
  }

  const colorCount = {}
  let ans = 0
  let count = 0
  for (let i = 0; i < r; i++) {
    for (let j = 0; j < c; j++) {
      if (!visited[i][j] && grid[i][j] == 1) {
        console.log('checking')
        bfs(i, j, ++count)
        console.log(colorCount)
        ans = Math.max(ans, colorCount[count])
      }
    }
  }

  console.log('--'.repeat(10))
  Print2D(grid)
  console.log(colorCount)

  const fetchNeighborIslands = (i, j) => {
    const set = new Set()
    const neighbors = [[0, 1], [0, -1], [1, 0], [-1, 0]]
    for (const n of neighbors) {
      const new_i = i + n[0]
      const new_j = j + n[1]
      if (new_i >= 0 && new_j >= 0 && new_i < r && new_j < c) {
        if (grid[new_i][new_j] != 0) {
          set.add(grid[new_i][new_j])
        }
      }
    }
    console.log('the neighbors of ', i, j, ' are ', set)
    return [...set]
  }

  for (let i = 0; i < r; i++) {
    for (let j = 0; j < c; j++) {
      if (grid[i][j] == 0) {
        const list = fetchNeighborIslands(i, j)
        const islandSoFar = list.reduce((p, c) => p + colorCount[c], 1)
        ans = Math.max(ans, islandSoFar)
      }
    }
  }
  return ans
}

const Print2D = arr => arr.forEach(o => console.log(...o))

const main = () => {
  grid = [[1, 0], [0, 1]]
  console.log('the largest island is ', largestIsland(grid))

  grid = [[1, 1], [1, 0]]
  console.log('the largest island is ', largestIsland(grid))

  grid = [[1, 1], [1, 1]]
  console.log('the largest island is ', largestIsland(grid))
}

main()
