
const nCr = (n, r) => {
  const pascalTriange = (n) => {
    const matrix = Array(n + 1).fill().map(() => Array(n + 1).fill(0))
  
  
    for (let i = 0; i <= n; i++) {
      for (let j = 0; j <= i; j++) {
        if (j === 0 || i === j) {
          matrix[i][j] = 1
        } else {
          matrix[i][j] = matrix[i-1][j] + matrix[i - 1][j - 1]
        }
      }
    }
    return matrix
  }

  const mat = pascalTriange(n)
  return mat[n][r]
}


const Print2D = arr => arr.forEach(o => console.log(...o))
const main = () => {
  n = 6; r = 2
  console.log('nCr is ', nCr(n, r))
}

main()


