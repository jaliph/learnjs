const array = [1, 14, 5, 20, 4, 2, 54, 20, 87, 98, 3, 1, 32]

const maxDiffCalc = (arr) => {
  let minElement = arr[0]
  let maxDiff = 0
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] - minElement > maxDiff) {
      maxDiff = arr[i] - minElement
    }
    if (arr[i] < minElement) {
      minElement = arr[i]
    }
  }
  console.dir(maxDiff)
}

maxDiffCalc(array)
