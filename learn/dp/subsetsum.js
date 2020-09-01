
const recursionSS = (arr, i, sum) => {
  if (sum === 0) return true
  if (i === 0) return false

  if (arr[i - 1] > sum) {
    return recursionSS(arr, i - 1, sum)
  }
  const ith_Index_taken = recursionSS(arr, i - 1, sum - arr[i - 1])
  const ith_Index_not_taken = recursionSS(arr, i - 1, sum)
  return ith_Index_taken || ith_Index_not_taken
}

// REVIEW
const pureDP = (arr, sum) => {
  // let table = Array(arr.length + 1).fill(Array(sum + 1).fill(1))

  const len = arr.length

  // let table = Array(len + 1).fill(Array(sum+1).fill(0));
  let table = Array.from(Array(len + 1), () => new Array(sum + 1))

  // for sum 0 possible true
  for (let i = 0; i <= len; i++) {
    table[i][0] = true
  }

  // for no element selected all is false
  for (let j = 1; j <= sum; j++) {
    table[0][j] = false
  }

  console.dir(table)

  for (let i = 1; i <= len; i++) {
    for (let j = 1; j <= sum; j++) {
      // if (j < arr[i-1]) { // current sum is smaller the current element, dnt select it
      //   table[i][j] = table[i-1][j]
      // }

      if (j >= arr[i - 1]) {
        table[i][j] = table[i - 1][j - arr[i - 1]] || table[i - 1][j]
      } else if (j < arr[i - 1]) {
        table[i][j] = table[i - 1][j]
      }
    }
  }
  // console.dir(table)
  return table[len][sum]
}

const arr = [3, 34, 4, 12, 5, 2]
const sum = 13
console.log(pureDP(arr, sum))
// console.log(recursionSS([3, 34, 4, 12, 5, 2], 6, 91))
