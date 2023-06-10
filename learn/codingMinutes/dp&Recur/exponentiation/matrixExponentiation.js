
const MOD = 1e9 + 7

const Fib = (n) => {
  const mat = [[0, 0], [0, 0]]

  const makeIdentity = (mat) => {
    for (let i = 0; i < mat.length; i++) {
      mat[i][i] = 1
    }
  }

  const multiply = (mat1, mat2) => {
    const result = [[0, 0], [0, 0]]
    for (let i = 0; i < mat1.length; i++) {
      for (let j = 0; j < mat2[0].length; j++) {
        for (let k = 0; k < mat1.length; k++) {
          res[i][j] = res[i][j] + (m1[i][k] * m2[k][j])
          res[i][j] = res[i][j] % MOD // to stop overflow
        }
      }
    }

    return result
  }

  const T = [
    [1, 0],
    [0, 0]
  ]

  const res = makeIdentity(mat)

  if (n <= 2) {
    return n
  }

  n = n - 2

  while (n) {
    if (n & 1) res = multiply(res, T)
    T = multiply(T, T)
    n = n >> 1
  }

  return (res[0][0] + res[0][1]) % MOD
}

const main = () => {
  const n = 5
  console.log(Fib(n))
}

main()
