
const m = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]

const rotate = (matrix = []) => {
  const n = matrix.length
  for (let i = 0; i < Math.floor(n / 2); i++) {
    const temp = matrix[i]
    matrix[i] = matrix[n - 1 - i]
    matrix[n - 1 - i] = temp
  }
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      console.log(i, j)
      const temp = matrix[i][j]
      matrix[i][j] = matrix[j][i]
      matrix[j][i] = temp
    }
  }
  return matrix
}

console.log(m)
rotate(m)
console.log(m)
