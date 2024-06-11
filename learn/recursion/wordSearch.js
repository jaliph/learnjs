// https://leetcode.com/problems/word-search/

/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
const exist = function (board, word) {
  const r = board.length
  const c = board[0].length

  const paths = [[0, 1], [0, -1], [1, 0], [-1, 0]]

  const visited = Array(r).fill().map(() => Array(c).fill(false))
  const dfs = (i, j, index) => {
    console.log(i, j, index)
    if (index == word.length - 1 && board[i][j] == word[index]) {
      console.log('came in')
      return true
    }

    if (board[i][j] != word[index]) {
      console.log('came in', board[i][j], word[index])
      return false
    }

    visited[i][j] = true

    for (const p of paths) {
      const [n_i, n_j] = [p[0] + i, p[1] + j]
      if (n_i >= 0 && n_j >= 0 && n_i < r && n_j < c && !visited[n_i][n_j]) {
        if (dfs(n_i, n_j, index + 1)) {
          return true
        }
      }
    }
    visited[i][j] = false
    return false
  }

  for (let i = 0; i < r; i++) {
    for (let j = 0; j < c; j++) {
      if (dfs(i, j, 0)) {
        return true
      }
    }
  }
  return false
}

const main = () => {
  // board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"
  // console.log('Does the word exist .. ? ', exist(board, word))

  board = [['a']], word = 'a'
  console.log('Does the word exist .. ? ', exist(board, word))
}

main()
