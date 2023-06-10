
const floodfillDFS = (mat) => {
  const r = mat.length
  const c = mat[0].length

  // instead of using visited , change the mat itself to zero
  const visited = Array(r).fill().map(() => Array(c).fill(false))

  const isValidPath = (n_i, n_j) => {
    const inBound = (n_i >= 0 && n_i < r && n_j >= 0 && n_i < c)
    if (!inBound) {
      return false
    }

    const isGround = mat[n_i][n_j] == 1
    // let ntVisited = visited[n_i][n_j] == false

    return isGround
  }

  const DFS_Resolver = (i, j) => {
    let count = 1
    // visited[i][j] = true
    mat[i][j] = 0

    const paths = [[0, 1], [0, -1], [1, 0], [-1, 0]]

    for (const p of paths) {
      const new_i = i + p[0]
      const new_j = j + p[1]

      if (isValidPath(new_i, new_j)) {
        const subProblemAns = DFS_Resolver(new_i, new_j)
        count = count + subProblemAns
      }
    }
    return count
  }

  let isLandCount = 0
  for (let i = 0; i < r; i++) {
    for (let j = 0; j < c; j++) {
      if (mat[i][j] == 0) {
        continue
      }
      if (!visited[i][j]) {
        isLandCount++
        const islandSize = DFS_Resolver(i, j)
        console.log(`island at ${i}${j} has size ${islandSize}`)
      }
    }
  }

  return isLandCount
}

const main = () => {
  const grid = [
    [0, 0, 0, 1, 1],
    [0, 1, 0, 0, 0],
    [1, 1, 0, 1, 0],
    [1, 0, 1, 1, 1],
    [0, 0, 1, 1, 0],
    [0, 0, 0, 0, 0]
  ]

  console.log('total number of islands is ', floodfillDFS(grid))
}

main()
