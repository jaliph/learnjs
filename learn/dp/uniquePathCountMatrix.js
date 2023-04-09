
const findUniquePathBrute = (m) => {
  const r = m.length
  const c = m[0].length

  const findUniquePathRecur = (m, r, c, i, j) => {
    if (i == r || j == c) {
      return 0
    }
    if (m[i][j] == 1) {
      return 0
    }

    if (i == r - 1 && j == c - 1) {
      return 1
    }

    return findUniquePathRecur(m, r, c, i + 1, j) + findUniquePathRecur(m, r, c, i, j + 1)
  }

  return findUniquePathRecur(m, r, c, 0, 0)
}

const findUniquePath = (m) => {
  const r = m.length
  const c = m[0].length

  const dp = Array(r).fill(0).map(() => Array(c).fill(0))

  for (let i = 0; i < r; i++) {
    dp[i][0] = m[i][0] > 0 ? 0 : 1
  }
  for (let j = 1; j < c; j++) {
    dp[0][j] = m[0][j] > 0 ? 0 : 1
  }

  for (let i = 1; i < r; i++) {
    for (let j = 1; j < c; j++) {
      if (m[i][j] == 1) {
        dp[i][j] = 0
      } else {
        dp[i][j] = dp[i - 1][j] + dp[i][j - 1]
      }
    }
  }

  return dp[r - 1][c - 1]
}

// Driver code
const main = function main () {
  const inputs = [
    [[0, 1], [0, 0]],
    [[0, 0, 0], [0, 0, 0], [0, 0, 0]],
    [[0, 0, 0], [0, 1, 0], [0, 0, 0]],
    [[0, 0, 0], [1, 1, 1], [0, 0, 0]],
    [[0, 0, 0, 0], [1, 0, 1, 0], [1, 0, 0, 0], [0, 1, 0, 0]]
  ]

  // Let's uncomment this to see the benefit of using dynamic programming with tabulation

  // inputs.push([[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]);

  let printedOutput = ''
  for (let i = 0; i < inputs.length; i++) {
    printedOutput = (i + 1) + '.\tMatrix: ' + inputs[i] + '\n\n\tNumber of unique paths: '
    const paths = findUniquePath(inputs[i])
    console.log(printedOutput + paths)
    console.log('-'.repeat(100))
  }
}

main()
