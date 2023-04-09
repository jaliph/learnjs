const isSorted = (arr) => {
  const isSortedRecur = (arr, i) => {
    if (i == arr.length - 1) {
      return true
    }

    if (arr[i] <= arr[i + 1] && isSortedRecur(arr, i + 1)) {
      return true
    }
    return false
  }
  return isSortedRecur(arr, 0)
}

console.log('Whether arr is sorted', isSorted([1, 2, 3]))
