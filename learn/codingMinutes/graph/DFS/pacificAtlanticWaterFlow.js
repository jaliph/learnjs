// https://leetcode.com/problems/pacific-atlantic-water-flow/

/**
 * @param {number[][]} heights
 * @return {number[][]}
 */
const pacificAtlantic = function (heights) {
  const r = heights.length
  const c = heights[0].length

  const pac = Array(r).fill().map(() => Array(c).fill(0))
  const atl = Array(r).fill().map(() => Array(c).fill(0))

  const DFSHelper = (coord, parent, visited) => {
    const [x, y] = coord
    if (x < 0 || y < 0 || x >= r || y >= c) {
      return
    }
    if (visited[x][y] == 1) return

    if (parent) {
      const [p_x, p_y] = parent
      // i need to go to higher heights from the shore line
      if (heights[x][y] < heights[p_x][p_y]) {
        // console.log('Came in', heights[x][y] < heights[p_x][p_y], heights[x][y], heights[p_x][p_y])
        return
      }
    }

    // console.log(coord, 'is the child of' , parent)
    visited[x][y] = 1

    DFSHelper([x + 1, y], [x, y], visited)
    DFSHelper([x - 1, y], [x, y], visited)
    DFSHelper([x, y + 1], [x, y], visited)
    DFSHelper([x, y - 1], [x, y], visited)
  }

  // north and south side
  for (let i = 0; i < c; i++) {
    DFSHelper([0, i], [0, i], pac)
    DFSHelper([r - 1, i], [r - 1, i], atl)
  }

  for (let i = 0; i < r; i++) {
    DFSHelper([i, 0], [i, 0], pac)
    DFSHelper([i, c - 1], [i, c - 1], atl)
  }

  const result = []

  for (let i = 0; i < r; i++) {
    for (let j = 0; j < c; j++) {
      if (pac[i][j] == 1 && atl[i][j] == 1) {
        result.push([i, j])
      }
    }
  }
  return result
}

const Print2D = arr => arr.forEach(o => console.log(...o))

const main = () => {
  heights = [[1, 2, 2, 3, 5], [3, 2, 3, 4, 4], [2, 4, 5, 3, 1], [6, 7, 1, 4, 5], [5, 1, 1, 2, 4]]
  console.log('the set of corordinates are ', pacificAtlantic(heights))

  heights = [[1]]
  console.log('the set of corordinates are ', pacificAtlantic(heights))
}

main()
