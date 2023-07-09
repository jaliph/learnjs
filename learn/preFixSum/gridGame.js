// https://leetcode.com/problems/grid-game/

/**
 * @param {number[][]} grid
 * @return {number}
 */
var gridGame = function(grid) {
  let len = grid[0].length
  let prefix1 = Array(len).fill(0)
  let prefix2 = Array(len).fill(0)

  prefix1[0] = grid[0][0]
  prefix2[0] = grid[1][0]

  for (let i = 1; i < grid[0].length; i++) {
    prefix1[i] = grid[0][i] + prefix1[i - 1]
    prefix2[i] = grid[1][i] + prefix2[i - 1]
  }


  let res = Infinity

  for (let i = 0; i < grid[0].length; i++) {
    let top = prefix1[len - 1] - prefix1[i]
    let bottom = i <= 0 ? 0: prefix2[i - 1]
    let secondMax = Math.max(top, bottom)
    res = Math.min(res, secondMax)
  }

  return res
};


const main = () => {
  grid = [[2,5,4],[1,5,1]]
  console.log('max for second robot is ', gridGame(grid))

  grid = [[3,3,1],[8,5,2]]
  console.log('max for second robot is ', gridGame(grid))

  grid = [[1,3,1,15],[1,3,3,1]]
  console.log('max for second robot is ', gridGame(grid))
}

main()