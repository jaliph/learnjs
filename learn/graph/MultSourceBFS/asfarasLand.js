// https://leetcode.com/problems/as-far-from-land-as-possible/
/**
 * @param {number[][]} grid
 * @return {number}
 */
const maxDistance = function (grid) {
  const r = grid.length
  const c = grid[0].length

  const q = []
  let flag = true
  for (let i = 0; i < r; i++) {
    for (let j = 0; j < c; j++) {
      if (grid[i][j] == 1) {
        q.push([i, j])
      } else {
        flag = false
      }
    }
  }

  if (q.length == 0) return -1
  if (flag) return -1

  const isValidPosition = (x, y) => {
    if (!(x < r && x >= 0 && y < c && y >= 0)) {
      return false
    }

    if (grid[x][y] == 0) {
      return true
    }
    return false
  }

  let k = 0
  let ans = 0
  while (k < q.length) {
    const [i, j] = q[k++]

    const paths = [[0, 1], [0, -1], [1, 0], [-1, 0]]
    for (const path of paths) {
      const new_i = i + path[0]
      const new_j = j + path[1]
      if (isValidPosition(new_i, new_j)) {
        grid[new_i][new_j] = grid[i][j] + 1
        ans = Math.max(ans, grid[new_i][new_j])
        q.push([new_i, new_j])
      }
    }
  }

  // Print2D(grid)
  return ans - 1
}

const Print2D = arr => arr.forEach(o => console.log(...o))

const main = () => {
  grid = [[1, 0, 1], [0, 0, 0], [1, 0, 1]]
  console.log('farthest land is ', maxDistance(grid))

  grid = [[1, 0, 0], [0, 0, 0], [0, 0, 0]]
  console.log('farthest land is ', maxDistance(grid))
}

main()
