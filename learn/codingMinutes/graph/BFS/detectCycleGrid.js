

const hasCycle = (grid) => {
  let r = grid.length
  let c = grid[0].length

  if (r == 1 || c == 1) {
    return false
  }

  let visited = Array(r).fill().map(() => Array(c).fill(false))

  let parent = {}

  const isValid = (i, j, c) => {
    if (i < 0 || j < 0 || i >= r || j >= c) {
      return false
    }
    if (grid[i][j] == c) {
      return true
    }
    return false
  }
  const cycleDetector = (i, j, char) => {

    visited[i][j] = true

    let q = []
    q.push([i, j])
    parent[i + '-' + j] = [-1, -1]
    while(q.length > 0) {
      let curr = q.shift()

      let x = curr[0]
      let y = curr[1]

      // console.log('Visiting --> ',curr)
      let paths = [[-1, 0], [1, 0], [0, -1], [0, 1]]
      for (let p of paths) {
        let n_x = x + p[0]
        let n_y = y + p[1]
        if (isValid(n_x, n_y, char)) {
          // is valid to go here.. character match also within bounds..
          // console.log('is valid', [n_x, n_y])
          if (!visited[n_x][n_y]) {
            // if not visited, visit
            // console.log('visiting -> ', [n_x, n_y])
            parent[n_x + '-' + n_y] = [x, y]
            visited[n_x][n_y] = true
            q.push([n_x, n_y])
          } else if (n_x != parent[x + '-' + y][0] || n_y != parent[x + '-' + y][1]) {
            // check if they are not parent 
            // console.log('there is a cycle', [n_x, n_y], [x, y])
            return true
          }
        }
      }
    }
    return false
  }

  for (let i = 1; i < r; i++) {
    for (let j = 1; j < c; j++) {
      if (!visited[i][j]) {
        let ans = cycleDetector(i, j, grid[i][j])
        if (ans) {
          // Print2D(visited)
          return ans
        }
      }
    }
  }
  // Print2D(visited)
  return false
}

const Print2D = arr => arr.forEach(o => console.log(...o))

const main = () => {
  grid = [["c","c","c","a"],["c","d","c","c"],["c","c","e","c"],["f","c","c","c"]]
  console.log('is there a cycle ? ', hasCycle(grid))

  grid = [["a","b","b"],["b","z","b"],["b","b","a"]]
  console.log('is there a cycle ? ', hasCycle(grid))

  grid = [["b","b"],["b","b"]]
  console.log('is there a cycle ? ', hasCycle(grid))

  grid = [["a","a","a","a"],["a","b","b","a"],["a","b","b","a"],["a","a","a","a"]]
  console.log('is there a cycle ? ', hasCycle(grid))

  grid = [["b","c","d","e","a","a","a"],["a","a","a","f","a","g","a"],["a","h","a","a","a","i","a"],["a","j","k","l","m","n","a"],["a","a","a","a","a","a","a"]]
  console.log('is there a cycle ? ', hasCycle(grid))
}

main()