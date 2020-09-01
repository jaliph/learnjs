
const recusrsioncountSubsetSum = (arr, i, sum) => {
  if (sum === 0) return 1
  if (i === 0) return 0

  if (arr[i - 1] > sum) {
    return recusrsioncountSubsetSum(arr, i - 1, sum)
  }
  let ithNumSelected = recusrsioncountSubsetSum(arr, i - 1, sum - arr[i - 1])
  let ithNumNotSelected = recusrsioncountSubsetSum(arr, i - 1, sum)
  return ithNumSelected + ithNumNotSelected
}

const countsubsetsum = (arr, sum) => {
  const table = Array.from(Array(arr.length + 1), () => new Array(sum + 1))

  for (let i = 0; i <= arr.length; i++) {
    table[i][0] = 1
  }

  for (let i = 1; i <= sum; i++) {
    table[0][i] = 0
  }

  for (let i = 1; i <= arr.length; i++) {
    for (let j = 1; j <= sum; j++) {
      if (arr[i - 1] > j) {
        table[i][j] = table[i - 1][j]
      } else {
        table[i][j] = table[i - 1][j] + table[i - 1][j - arr[i - 1]]
      }
    }
  }
  console.dir(table)
  return table[arr.length][sum]
}

const arr = [3, 34, 4, 12, 5, 2]
const sum = 12
console.log(countsubsetsum(arr, sum))
console.log(recusrsioncountSubsetSum(arr, arr.length, sum))
