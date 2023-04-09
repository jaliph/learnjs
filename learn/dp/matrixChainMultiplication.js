
const minMultiplicationsBrute = (list) => {
  const minMultiplicationsRecur = (list, i, j) => {
    if (j - i <= 2) {
      return 0
    }

    let result = Infinity

    for (let k = i + 1; k < j - 1; k++) {
      result = Math.min(result, minMultiplicationsRecur(list, i, k + 1) + minMultiplicationsRecur(list, k, j) + list[i] * list[k] * list[j - 1])
    }
    return result
  }

  return minMultiplicationsRecur(list, 0, list.length)
}

const minMultiplications = (dims) => {
  const dp = Array(dims.length).fill(0).map(() => Array(dims.length).fill(0))

  for (let l = 2; l < dims.length; l++) {
    for (let i = 1; i < (dims.length - l + 1); i++) {
      const j = i + l - 1
      dp[i][j] = Infinity
      for (let k = i; k < j; k++) {
        const result = dp[i][k] + dp[k + 1][j] + (dims[i - 1] * dims[k] * dims[j])
        // console.log(result)
        if (dp[i][j] > result) {
          dp[i][j] = result
        }
      }
    }
  }
  // console.log(dp)
  return dp[1][dims.length - 1]
}

// Driver code
function main () {
  const dims = [
    [3, 3, 2, 1],
    [4, 3, 2, 1],
    [2, 2, 2],
    [1, 1, 1],
    [13, 16, 11, 99, 3]
  ]

  // You can uncomment the lines below and check how this recursive solution causes a time-out
  // dims.push([13, 16, 11, 99, 3, 13, 16, 11, 99, 3, 13, 16, 11, 99, 3, 13, 16, 11, 99, 3, 13, 16, 11, 99, 3, 13, 16, 11, 99, 3]);

  for (let i = 0; i < dims.length; i++) {
    console.log(i + 1 + '.\tInput dims:  [' + dims[i] + ']')
    console.log('\n\tThe least number of primitive multiplications possible: ' + minMultiplications(dims[i]))
    console.log('-'.repeat(100))
  }
}

main()
