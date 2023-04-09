
// Find a pair from two un sorted with the minimum difff

const minDiff = (arr1, arr2) => {
  arr1.sort((a, b) => a - b)
  arr2.sort((a, b) => a - b)

  let minDiff = Infinity
  let min = 0
  let max = 0
  let i = 0, j = 0
  while (i < arr1.length && j < arr2.length) {
    let abs = Math.abs(arr1[i] - arr2[j])
    // console.log(arr1[i], arr2[j], abs)
    if (minDiff > abs) {
      minDiff = abs
      // console.log('Current', minDiff)
      // try {
      if (arr1[i] < arr2[j]) {
        min = arr1[i], max = arr2[j]
      } else {
        max = arr1[i], min = arr2[j]
      }
    }

    if (arr1[i] < arr2[j]) {
      i++
    } else {
      j++
    }
    // console.log(i, j)
  }

  // console.log('Aila', minDiff)
  return [min, max]
}

console.log('min diff is ', minDiff([23, 5, 10, 17, 30], [26, 134, 135, 14, 19]))