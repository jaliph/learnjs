const searchMatrix = (matrix = [], target) => {
  if (matrix.length === 0) {
    return false
  }
  const rowLength = matrix.length
  const columnLength = matrix[0].length
  const getMiddleIndex = n => [Math.floor(n / columnLength), n % columnLength]
  let low = 0
  let high = rowLength * columnLength - 1
  while (low <= high) {
    const middle = Math.floor((low + high) / 2)
    console.log('Middle ', middle)
    const [rowIndex, columnIndex] = getMiddleIndex(middle)
    console.log(rowIndex, columnIndex)
    const current = matrix[rowIndex][columnIndex]
    if (current === target) {
      return true
    }
    if (current < target) {
      low = middle + 1
    } else {
      high = middle - 1
    }
  }
  return false
}


console.log(searchMatrix([
  [1,   3,  5,  7],
  [10, 11, 16, 20],
  [23, 30, 34, 50]
], 50))


const numberToMatrixCooridinates = (matrix) => {
  let columnLength = matrix[0].length
  for (let low = 0; low < matrix.length * matrix[0].length; low ++) {
    
    let [i , j] = [Math.floor(low / columnLength) , low % columnLength]
    console.log(`${low} -> Row is ${i}, Column is ${j}`)
  }
}

numberToMatrixCooridinates([
  [1,   3,  5,  7],
  [10, 11, 16, 20],
  [23, 30, 34, 50]
])