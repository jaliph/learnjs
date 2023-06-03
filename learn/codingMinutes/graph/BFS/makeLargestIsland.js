// https://leetcode.com/problems/making-a-large-island/

/**
 * @param {number[][]} grid
 * @return {number}
 */
var largestIsland = function(grid) {
  let r = grid.length
  let c = grid[0].length
  let visited = Array(r).fill().map(() => Array(c).fill(0))

  const isValid = (i, j) => {
    if (i < 0 || j < 0 || i >= r || j >= c) {
      return false
    }
    return grid[i][j] == 1
  }
  
  const bfs = (i, j, color) => {
    let q = []
    visited[i][j] = 1
    q.push([i, j])
    let paths = [
      [0, 1], [0, -1], [1, 0], [-1, 0]
    ]

    while(q.length > 0) {
      let curr = q.shift()
      let [x, y] = curr
      colorCount[color] = (colorCount[color] || 0) + 1
      console.log(x+'-'+y, colorCount)
      grid[x][y] = color

      for (let p of paths) {
        let n_x = x + p[0]
        let n_y = y + p[1]
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
    let set = new Set()
    let neighbors = [[0, 1], [0, -1], [1, 0], [-1, 0]]
    for (let n of neighbors) {
      let new_i = i + n[0]
      let new_j = j + n[1]
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
        let list = fetchNeighborIslands(i, j)
        let islandSoFar = list.reduce((p, c) => p + colorCount[c], 1)
        ans = Math.max(ans, islandSoFar)
      }
    }
  }
  return ans  
};

const Print2D = arr => arr.forEach(o => console.log(...o))

const main = () => {
  grid = [[1,0],[0,1]]
  console.log('the largest island is ', largestIsland(grid))

  grid = [[1,1],[1,0]]
  console.log('the largest island is ', largestIsland(grid))

  grid = [[1,1],[1,1]]
  console.log('the largest island is ', largestIsland(grid))
}

main()