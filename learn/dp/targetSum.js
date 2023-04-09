// https://www.educative.io/courses/grokking-dynamic-programming-a-deep-dive-using-javascript/mE6JwgA1v00

const findTargetSumWaysBrute = (arr, T) => {
  const findTargetSumWaysRecur = (arr, target, sum, i) => {
    if (i === arr.length) {
      if (target === sum) {
        return 1
      }
      return 0
    }
    return findTargetSumWaysRecur(arr, T, sum + arr[i], i + 1) + findTargetSumWaysRecur(arr, T, sum - arr[i], i + 1)
  }
  return findTargetSumWaysRecur(arr, T, 0, 0)
}

const findTargetSumWaysMemoise = (arr, T) => {
  const total = arr.reduce((i, j) => i + j, 0)
  const t = Array(arr.length).fill(0).map(() => Array(2 * total + 1).fill(-1))
  const findTargetSumWaysRecur = (arr, t, target, total, sum, i) => {
    if (i === arr.length) {
      if (sum == target) {
        return 1
      }
      return 0
    }

    if (t[i][total + sum] != -1) {
      return t[i][total + sum]
    }

    t[i][total + sum] = findTargetSumWaysRecur(arr, t, target, total, sum + arr[i], i + 1) +
    findTargetSumWaysRecur(arr, t, target, total, sum - arr[i], i + 1)

    return t[i][total + sum]
  }

  return findTargetSumWaysRecur(arr, t, T, 2 * total + 1, 0, 0)
}

const findTargetSumWays = (arr, T) => {
  const total = arr.reduce((i, j) => i + j, 0)

  // console.log(total)
  const t = Array(arr.length).fill(0).map(() => Array(2 * total + 1).fill(0))

  t[0][total - arr[0]] = 1
  t[0][total + arr[0]] = 1

  // console.log(t[0])
  for (let i = 1; i < arr.length; i++) {
    for (let j = -total; j <= total; j++) {
      // console.log(t[i][total + j], i, total+j)
      if (t[i - 1][total + j] > 0) {
        // console.log('Came in')
        t[i][total + j + arr[i]] += t[i - 1][total + j]
        t[i][total + j - arr[i]] += t[i - 1][total + j]
      } else {
        // console.log('Came here 2')
      }
    }
  }

  // console.log(t)
  return t[arr.length - 1][total + T]
}

// Driver code
function main () {
  const arrs = [[1], [3, 3, 3, 3], [2, 3, 4, 6, 8, 12], [2, 2, 2, 4, 4, 4, 8, 8, 8]]
  const targets = [1, 6, 15, 18]

  // You can uncomment the lines below and check how this recursive solution causes a time-out

  // arrs.push([2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3,
  //            2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3]);
  // targets.push(42);

  for (let i = 0; i < arrs.length; ++i) {
    const a = '[' + arrs[i].join(', ') + ']'
    console.log(i + 1 + '.\t Input array: ' + a)
    console.log('\t Target: ', targets[i])
    console.log('\t Number of ways in which we can find the target sum: ', findTargetSumWaysMemoise(arrs[i], targets[i]))
    console.log('-'.repeat(100))
  }
}

main()
