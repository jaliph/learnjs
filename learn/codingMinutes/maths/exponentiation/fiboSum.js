// https://www.spoj.com/problems/FIBOSUM/

const MOD = 10**9 + 7

/**
 * @param {number} a 
 * @param {number} b 
 * @returns {number}
 */
const mul = (a, b) => {
  return ((a % MOD) * (b % MOD)) % MOD
}

/**
 * @param {number[][]} mat1 
 * @param {number[][]} mat2 
 * @returns {number[][]}
 */
const matrixMultiplication = (mat1, mat2) => {
  const R1 = mat1.length
  const C1 = mat1[0].length

  const R2 = mat2.length
  const C2 = mat2[0].length

  if (C1 != R2) {
    throw new Error('Invalid matrices, mulitplication not possible..')
  }

  const result = Array(R1).fill().map(() => Array(C2).fill(0))

  for (let i = 0; i < R1; i++) {
    for (let j = 0; j < C2; j++) {
      // for every common row and col
      for (let k = 0; k < R2; k++) {
        result[i][j] += mul(mat1[i][k], mat2[k][j])
      }
    }
  }

  return result
}

const FiboSum = (n) => {
  let T = [
    [1, 1, 1],
    [0, 1, 1],
    [0, 1, 0]
  ]

  if (n === -1 || n === 0) {
    return 0
  }

  if (n === 1) {
    return 1
  }
  
  const result = power(T, n - 1, 3)
  // Print2D(result)

  return (result[0][0] + result[0][1]) % MOD
}

const power = (a, b, size) => {
  let identityMatrix = Array(size).fill().map(() => Array(size).fill(0))
  for (let i = 0; i < size; i++) {
    identityMatrix[i][i] = 1
  }
  while(b) {
    if (b & 1) {
      identityMatrix = matrixMultiplication(identityMatrix, a)
    }
    a = matrixMultiplication(a, a)
    b = b >> 1
  }
  return identityMatrix
}


const Print2D = arr => arr.forEach(o => console.log(...o))

const main = () => {
  // for (let i = 1; i <= 10; i++) {
  //   console.log(i, 'th Fib is ', Fib(i))
  // }
  console.log(FiboSum(5) - FiboSum(2))
  console.log(FiboSum(3) - FiboSum(-1))
  console.log(FiboSum(19) - FiboSum(9))
}

main()

// const main = () => {
//   let mat1 = [
//     [1, 1],
//     [2, 2]
//   ]
//   let mat2 = [
//     [1, 1],
//     [2, 2]
//   ]
//   console.log('Matrix multiplication between them is ', matrixMultiplication(mat1, mat2))
// }

// main()