// https://leetcode.com/problems/count-sub-islands/

/**
 * @param {number[][]} grid1
 * @param {number[][]} grid2
 * @return {number}
 */
const countSubIslands = function (grid1, grid2) {
  const r = grid1.length
  const c = grid1[0].length

  for (let i = 0; i < r; i++) {
    for (let j = 0; j < c; j++) {
      if (grid2[i][j] == 1) {
        if (grid1[i][j] == 0) {
          grid2[i][j] = 2
        }
      }
    }
  }

  const isValid = (i, j) => {
    if (i < 0 || i >= r || j < 0 || j >= c) {
      return false
    }

    if (grid2[i][j] == 0) {
      return false
    }

    return visited[i][j] == 0
  }

  const countofIslands = (i, j) => {
    let count = 1
    visited[i][j] = 1
    const q = []

    q.push([i, j])
    const paths = [[-1, 0], [1, 0], [0, 1], [0, -1]]

    while (q.length > 0) {
      const curr = q.shift()

      console.log(curr)
      const x = curr[0]
      const y = curr[1]

      if (grid2[x][y] == 2) {
        count = 0
      }

      for (const p of paths) {
        const n_x = x + p[0]
        const n_y = y + p[1]

        if (isValid(n_x, n_y)) {
          visited[n_x][n_y] = 1
          q.push([n_x, n_y])
        }
      }
    }
    return count
  }

  let ans = 0
  const visited = Array(r).fill().map(() => Array(c).fill(0))

  for (let i = 0; i < r; i++) {
    for (let j = 0; j < c; j++) {
      if (grid2[i][j] != 0 && !visited[i][j]) {
        // console.log('Trying for ', i, j)
        // let result = countofIslands(i, j)
        // console.log('The result for ', i, j, 'is ', result)
        ans += countofIslands(i, j)
      }
    }
  }

  // Print2D(grid1)
  // console.log('--'.repeat(10))
  // Print2D(grid2)

  return ans
}

const Print2D = arr => arr.forEach(o => console.log(...o))

const main = () => {
  grid1 = [[1, 1, 1, 0, 0], [0, 1, 1, 1, 1], [0, 0, 0, 0, 0], [1, 0, 0, 0, 0], [1, 1, 0, 1, 1]], grid2 = [[1, 1, 1, 0, 0], [0, 0, 1, 1, 1], [0, 1, 0, 0, 0], [1, 0, 1, 1, 0], [0, 1, 0, 1, 0]]

  console.log('the count of sub problems are ', countSubIslands(grid1, grid2))

  grid1 = [[1, 0, 1, 0, 1], [1, 1, 1, 1, 1], [0, 0, 0, 0, 0], [1, 1, 1, 1, 1], [1, 0, 1, 0, 1]], grid2 = [[0, 0, 0, 0, 0], [1, 1, 1, 1, 1], [0, 1, 0, 1, 0], [0, 1, 0, 1, 0], [1, 0, 0, 0, 1]]
  console.log('the count of sub problems are ', countSubIslands(grid1, grid2))
}

main()
