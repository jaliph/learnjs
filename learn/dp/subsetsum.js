
const recursionSS = (arr, i, sum) => {
  if (sum === 0) return true
  if (i === 0) return false

  if (arr[i - 1] > sum) {
    return recursionSS(arr, i - 1, sum)
  }
  let ith_Index_taken = recursionSS(arr, i - 1, sum - arr[i - 1])
  let ith_Index_not_taken =  recursionSS(arr, i - 1, sum)
  return ith_Index_taken || ith_Index_not_taken
}

// REVIEW
const pureDP = (arr, sum) => {
  const table = Array(arr.length + 1).fill(Array(sum + 1).fill(null))

  // for sum 0 possible true
  for (let i = 0; i <= arr.length; i++) {
    table[i][0] = true
  }
  // for no element selected all is false
  for (let j = 1; j <= sum; j++) {
    table[0][j] = false
  }

  for (let i = 1; i <= arr.length; i++) {
    for (let j = 1; j <= sum; j++) {
      // if (j < arr[i - 1]) { // current sum is smaller the current element, dnt select it
      //   table[i][j] = table[i - 1][j]
      // }
      if (j >= arr[i - 1]) {
        table[i][j] = table[i - 1][j - arr[i - 1]] || table[i - 1][j]
      }
      // table[i][j] = table[i][j - 1]
      // if (i >= arr[j - 1]) table[i][j] = table[i][j] || table[i - arr[j - 1]][j - 1]
    }
  }
  console.dir(table)
  return table[arr.length][sum]
}

console.log(pureDP([3, 34, 4, 12, 5, 2], 9))
console.log(recursionSS([3, 34, 4, 12, 5, 2], 6, 9))
