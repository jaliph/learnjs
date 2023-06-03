// https://leetcode.com/problems/check-if-move-is-legal/

/**
 * @param {character[][]} board
 * @param {number} rMove
 * @param {number} cMove
 * @param {character} color
 * @return {boolean}
 */
var checkMove = function(board, rMove, cMove, color) {
  let r = board.length
  let c = board[0].length

  // Print2D(board)
  // console.log(rMove, cMove, color)
  board[rMove][cMove] = color
  let length = 1

  

  let directions = [
    [1, 0], [-1, 0], [0, 1], [0, -1],
    [1, 1], [-1, -1], [-1, 1], [1, -1]
  ]

  const helper = (board, p_x, p_y, length, direction) => {
    p_x = direction[0] + p_x
    p_y = direction[1] + p_y
    length++
    // console.log('ander aaya', direction, p_x, p_y, r, c)
    while (0 <= p_x && p_x < r && 0 <= p_y && p_y < c) {
      // console.log(p_x, p_y, length, color)
      if (board[p_x][p_y] == '.') {
        return false;
      }
      if (board[p_x][p_y] == color) {
        return length >= 3
      }
      p_x = direction[0] + p_x
      p_y = direction[1] + p_y
      length++
    }
    return false
  }


  for (let d of directions) {
    let result = helper(board, rMove, cMove, length, d)
    if (result == true) return true
  }
  return false
};

const Print2D = arr => arr.forEach(o => console.log(...o))

const main = () => {
  board = [[".",".",".","B",".",".",".","."],[".",".",".","W",".",".",".","."],[".",".",".","W",".",".",".","."],[".",".",".","W",".",".",".","."],["W","B","B",".","W","W","W","B"],[".",".",".","B",".",".",".","."],[".",".",".","B",".",".",".","."],[".",".",".","W",".",".",".","."]], rMove = 4, cMove = 3, color = "B"

  console.log('is this a legal move', checkMove(board, rMove, cMove, color))

  board = [[".",".",".","B",".",".",".","."],[".",".",".","W",".",".",".","."],[".",".",".","W",".",".",".","."],[".",".",".","W",".",".",".","."],["W","B","B",".","W","W","W","B"],[".",".",".","B",".",".",".","."],[".",".",".","B",".",".",".","."],[".",".",".","W",".",".",".","."]], rMove = 4, cMove = 3, color = "B"

  console.log('is this a legal move', checkMove(board, rMove, cMove, color))

}

main()