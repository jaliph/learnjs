// https://neetcode.io/problems/islands-and-treasure
// https://leetcode.com/problems/walls-and-gates/description/

const islandsAndTreasure = (grid) => {
  const INF = (1 << 31) * -1 - 1
  const R = grid.length
  const C = grid[0].length
  const visited = Array(R).fill(1).map(() => Array(C).fill(0))

  const q = [] // [x, y, distance]
  for (let i = 0; i < R; i++) {
    for (let j = 0; j < C; j++) {
      if (grid[i][j] === 0) {
        visited[i][j] = 1
        q.push([i, j, 0])
      }
    }
  }

  const paths = [[1, 0], [-1, 0], [0, 1], [0, -1]]
  let k = 0
  while (k < q.length) {
    const curr = q[k++]

    const x = curr[0]
    const y = curr[1]
    const d = curr[2]
    if (grid[x][y] === INF) {
      grid[x][y] = d
    }

    for (const path of paths) {
      const nx = x + path[0]
      const ny = y + path[1]

      if (nx >= 0 && ny >= 0 && nx < R && ny < C) {
        if (visited[nx][ny] === 0 && grid[nx][ny] !== -1) {
          visited[nx][ny] = 1
          q.push([nx, ny, d + 1])
        }
      }
    }
  }
  return grid
}

const Print2D = arr => arr.forEach(o => console.log(...o))

const main = () => {
  let grid = [
    [2147483647,-1,0,2147483647],
    [2147483647,2147483647,2147483647,-1],
    [2147483647,-1,2147483647,-1],
    [0,-1,2147483647,2147483647]
  ]
  islandsAndTreasure(grid)
  Print2D(grid)
}

main()