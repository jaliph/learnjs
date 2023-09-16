//

const colorIslands = (g) => {
  Print2D(g)
  const r = g.length
  const c = g[0].length
  const visited = Array(r).fill().map(() => Array(c).fill(0))

  const isValid = (i, j) => {
    if (i < 0 || j < 0 || i >= r || j >= c) {
      return false
    }
    return g[i][j] == 1
  }

  const bfs = (i, j, color) => {
    const q = []
    q.push([i, j])
    const paths = [
      [0, 1], [0, -1], [1, 0], [-1, 0]
    ]

    while (q.length > 0) {
      const curr = q.shift()
      const [x, y] = curr

      visited[x][y] = 1
      colorCount[color] = (colorCount[color] || 0) + 1
      g[x][y] = color
      for (const p of paths) {
        const n_x = x + p[0]
        const n_y = y + p[1]
        if (isValid(n_x, n_y)) {
          if (!visited[n_x][n_y]) {
            q.push([n_x, n_y])
          }
        }
      }
    }
  }

  const colorCount = {}
  let count = 0
  for (let i = 0; i < r; i++) {
    for (let j = 0; j < c; j++) {
      if (!visited[i][j] && g[i][j] == 1) {
        bfs(i, j, ++count)
      }
    }
  }
  console.log('--'.repeat(10))
  Print2D(g)
  console.log(colorCount)
}

const Print2D = arr => arr.forEach(o => console.log(...o))

const main = () => {
  const g = [[0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0], [0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0], [0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0], [0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0], [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0]]
  console.log(colorIslands(g))
}

main()
