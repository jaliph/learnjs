// https://leetcode.com/problems/island-perimeter/

/**
 * @param {number[][]} grid
 * @return {number}
 */
const islandPerimeter = function (grid) {
  const r = grid.length
  const c = grid[0].length

  const visited = Array(r).fill(0).map(() => Array(c).fill(false))

  const findPerimeter = (i, j) => {
    // base case
    // out of bounds
    if (i < 0 || j < 0 || i >= r || j >= c) return 1
    // or is water
    if (grid[i][j] == 0) return 1

    // is already visited
    if (visited[i][j]) return 0

    visited[i][j] = true
    let ans = 0

    ans += findPerimeter(i + 1, j)
    ans += findPerimeter(i - 1, j)
    ans += findPerimeter(i, j + 1)
    ans += findPerimeter(i, j - 1)

    return ans
  }

  for (let i = 0; i < r; i++) {
    for (let j = 0; j < c; j++) {
      if (grid[i][j] == 1) {
        // because there is only 1 island
        return findPerimeter(i, j)
      }
    }
  }
}

const Print2D = arr => arr.forEach(o => console.log(...o))
const main = () => {
  const grid = [[0, 1, 0, 0], [1, 1, 1, 0], [0, 1, 0, 0], [1, 1, 0, 0]]
  Print2D(grid)
  console.log('The perimeter is ', islandPerimeter(grid))
}

main()
