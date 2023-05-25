// https://leetcode.com/problems/max-area-of-island/

/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
  const r = grid.length
  const c = grid[0].length
  let visited = Array(r).fill(0).map(() => Array(c).fill(false))

  const pathTraversal = (i, j, r, c) => {
    let q = []
    let distanceTraversed = 0
    visited[i][j] = true
    q.push([i, j])

    const isValid = (i, j) => {
      return (i >= 0 && i < r && j >= 0 && j < c) && grid[i][j] == 1
    }

    const paths = [[-1, 0], [0, 1], [0, -1], [1, 0]]

    while (q.length > 0) {
      let curr = q.shift()
      distanceTraversed++
      for (let p of paths) {
        let newPosition = [curr[0] + p[0], curr[1] + p[1]]
        if (isValid(newPosition[0], newPosition[1]) && !visited[newPosition[0]][newPosition[1]]) {
          visited[newPosition[0]][newPosition[1]] = true
          q.push(newPosition)
        }
      }
    }

    return distanceTraversed
  }

  let ans = 0
  

  for (let i = 0; i < r; i++) {
    for (let j = 0; j < c; j++) {
      if (grid[i][j] == 0) continue
      else {
        if (!visited[i][j]) {
          let area = pathTraversal(i, j, r, c)
          // console.log(i, j, '->>', area)
          // console.log('------')
          ans = Math.max(ans, area)
        }
      }
    }
  }

  return ans
};


const main = () => {
  let g = [[0,0,1,0,0,0,0,1,0,0,0,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,1,1,0,1,0,0,0,0,0,0,0,0],[0,1,0,0,1,1,0,0,1,0,1,0,0],[0,1,0,0,1,1,0,0,1,1,1,0,0],[0,0,0,0,0,0,0,0,0,0,1,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,0,0,0,0,0,0,1,1,0,0,0,0]]
  console.log(maxAreaOfIsland(g))
}

main()