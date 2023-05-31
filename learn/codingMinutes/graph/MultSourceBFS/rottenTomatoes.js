// https://leetcode.com/problems/rotting-oranges/

/**
 * @param {number[][]} grid
 * @return {number}
 */
const orangesRotting = function(grid) {
  let r = grid.length
  let c = grid[0].length

  Print2D(grid)
  console.log('-'.repeat(10))

  const distance = Array(r).fill(0).map(() => Array(c).fill(0))
  // const visited = new Set()

  let q = []
  let count = 0
  for (let i = 0; i < r; i++) {
    for (let j = 0; j < c; j++) {
      if (grid[i][j] == 2) {
        q.push([i, j])
      }
      if (grid[i][j] == 1) {
        count++
      }
    }
  }

  const isValidPosition = (x, y) => {
    if (!(x < r && x >= 0 && y < c && y>= 0)) {
      return false
    }

    if (distance[x][y] == 0 && grid[x][y] == 1) {
      return true
    }

    return false
  }

  let ans = 0

  while (q.length > 0) {
    let curr = q.shift()

    let i = curr[0]
    let j = curr[1]
    
    let paths = [[0, 1], [0, -1], [1, 0], [-1, 0]]
    for (let path of paths) {
      let new_i = i + path[0]
      let new_j = j + path[1]
      if (isValidPosition(new_i, new_j)) {
        distance[new_i][new_j] = distance[i][j] + 1
        ans = Math.max(ans,  distance[new_i][new_j])
        q.push([new_i, new_j])
        count--
      }
    }
  }


  Print2D(distance)
  // console.log(visited)
  // console.log(count)
  return count > 0 ? -1 : ans
};

const Print2D = arr => arr.forEach(o => console.log(...o))

const main = () => {
  let grid = [[2,1,1],[1,1,0],[0,1,1]]
  console.log('The multisourc BFS is ', orangesRotting(grid))

  grid = [[2,1,1],[0,1,1],[1,0,1]]
  console.log('The multisourc BFS is ', orangesRotting(grid))
}

main()