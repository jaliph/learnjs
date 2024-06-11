// https://leetcode.com/problems/snakes-and-ladders/

/**
 * @param {number[][]} board
 * @return {number}
 */
// var snakesAndLadders = function(board) {
//   let r = board.length
//   let c = board[0].length
//   console.log(r*c)
//   let g = Array((r * c) + 1).fill().map(() => Array().fill([]))

//   let dp = {}

//   let k = -1
//   let source = 1
//   for (let i = r - 1; i >= 0; i--) {
//     if (k < 0) {
//       for (let j = 0; j < c; j++) {
//         if (board[i][j] != -1) {
//           dp[source] = board[i][j] - source
//         }
//         source++
//       }
//     } else {
//       for (let j = c - 1; j >= 0; j--) {
//         if (board[i][j] != -1) {
//           dp[source] = board[i][j] - source
//         }
//         source++
//       }
//     }
//     k *= -1
//   }

//   for (let s = 1; s <= r * c; s++) {
//     for (let d = 1; d <= 6; d++) {
//       let source = s
//       let destination = s + d
//       destination = destination + (dp[destination] || 0)
//       if (destination <= r * c) {
//         g[source].push(destination)
//       }
//     }
//   }

//   let q = []
//   q.push([1, 0])
//   let visited = {}

//   // console.log(g)

//   while (q.length) {
//     let [curr, dist] = q.pop()
//     if (curr == r * c) {
//       return dist
//     }
//     visited[curr] = true
//     for (let n of g[curr]) {
//       if (!visited[n]) {
//         // console.log(curr, '---> ', n)
//         q.push([n, dist + 1])
//       }
//     }
//   }

//   return -1
// };

const snakesAndLadders = function (board) {
  const n = board.length
  let label = 1
  const cells = new Array(n * n + 1)
  for (let i = n - 1; i >= 0; i--) {
    for (let j = 0; j < n && (n - i) % 2 == 1; j++) {
      cells[label++] = [i, j]
    }
    for (let j = n - 1; j >= 0 && (n - i) % 2 == 0; j--) {
      cells[label++] = [i, j]
    }
  }

  const minMoves = new Array(n * n + 1).fill(-1)
  minMoves[1] = 0
  const queue = [1]

  while (queue.length) {
    const curr = queue.shift()
    if (curr == n * n) return minMoves[curr]
    for (let next = curr + 1; next <= Math.min(curr + 6, n * n); next++) {
      const [i, j] = cells[next]
      let destination = next
      if (board[i][j] != -1) destination = board[i][j]
      if (minMoves[destination] == -1) {
        queue.push(destination)
        minMoves[destination] = minMoves[curr] + 1
      }
    }
  }
  return -1
}

const main = () => {
  board = [[-1, -1, -1, -1, -1, -1], [-1, -1, -1, -1, -1, -1], [-1, -1, -1, -1, -1, -1], [-1, 35, -1, -1, 13, -1], [-1, -1, -1, -1, -1, -1], [-1, 15, -1, -1, -1, -1]]
  console.log('min steps to win the game are', snakesAndLadders(board))

  board = [[-1, -1], [-1, 3]]
  console.log('min steps to win the game are', snakesAndLadders(board))

  board = [[-1, -1, -1, -1, -1, -1, -1, 4, -1, -1, -1, -1, -1, -1, -1, 261, -1, -1, 163, -1], [-1, -1, 209, -1, 66, -1, -1, -1, -1, -1, -1, -1, 362, -1, -1, 92, -1, -1, -1, -1], [-1, -1, -1, -1, 115, 389, -1, -1, -1, -1, -1, -1, -1, 181, 142, -1, -1, -1, -1, -1], [-1, -1, -1, -1, -1, -1, -1, 38, -1, -1, 253, 107, -1, -1, -1, -1, -1, -1, -1, -1], [-1, -1, -1, -1, 157, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 67, -1, 105], [253, -1, 96, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 232, -1, -1, -1, -1, -1], [98, -1, -1, -1, -1, -1, -1, 132, -1, -1, -1, 394, -1, -1, -1, -1, -1, -1, -1, 248], [212, -1, -1, -1, 248, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 373, -1, -1, -1, -1], [95, -1, -1, -1, 235, -1, 58, -1, 79, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [-1, 291, 168, 399, -1, -1, -1, -1, -1, -1, -1, 85, -1, -1, -1, -1, -1, -1, -1, -1], [-1, -1, -1, -1, -1, -1, 50, -1, -1, 205, -1, 352, 35, -1, -1, 370, 163, -1, -1, -1], [-1, 208, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 333, -1, -1, -1], [248, -1, -1, 13, -1, -1, -1, 344, -1, -1, 289, -1, -1, -1, -1, -1, 66, -1, 55, -1], [-1, -1, -1, -1, -1, -1, -1, -1, 8, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [-1, -1, -1, -1, -1, -1, 273, -1, -1, -1, -1, -1, -1, -1, -1, -1, 367, -1, 97, -1], [-1, -1, -1, -1, -1, -1, -1, -1, 381, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [-1, -1, -1, 88, 130, -1, -1, -1, 230, -1, 211, -1, -1, -1, -1, -1, -1, -1, -1, -1], [-1, -1, -1, -1, -1, 290, -1, -1, -1, -1, -1, -1, 277, 28, 167, -1, -1, 51, -1, -1], [71, -1, -1, -1, 220, -1, 313, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1], [-1, -1, -1, -1, -1, -1, -1, -1, -1, 140, -1, -1, -1, -1, -1, -1, -1, -1, -1, 151]]
  console.log('min steps to win the game are', snakesAndLadders(board))
}

main()
