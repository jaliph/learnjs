
// https://www.hackerrank.com/challenges/a-chessboard-game-1/problem
const winPosition = (x, y) => {
  const dp = Array(16).fill(0).map(() => Array(16).fill(-1))
  const winPositionRecur = (x, y) => {
    // base
    if (x < 1 || x > 15 || y < 1 || y > 15) {
      return true
    }

    if (dp[x][y] != -1) {
      return dp[x][y]
    }

    // recur
    let ans = true
    ans &= winPositionRecur(x - 2, y + 1)
    ans &= winPositionRecur(x - 2, y - 1)
    ans &= winPositionRecur(x + 1, y - 2)
    ans &= winPositionRecur(x - 1, y - 2)

    dp[x][y] = !ans
    return dp[x][y]
  }
  return winPositionRecur(x, y)
}

const main = () => {
  for (const i of [
    [5, 2],
    [5, 3],
    [8, 8]]) {
    console.log('The winning state is ', winPosition(i[0], i[1]))
  }
}

main()
