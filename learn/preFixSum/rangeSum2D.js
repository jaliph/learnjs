// https://leetcode.com/problems/range-sum-query-2d-immutable/

/**
 * @param {number[][]} matrix
 */
var NumMatrix = function(matrix) {
  const ROW = matrix.length
  const COL = matrix[0].length

  this.sumArray = Array(ROW + 1).fill().map(() => Array(COL + 1).fill(0))
  let above, prefix
  for (let i = 0; i < ROW; i++) {
    prefix = 0    
    for (let j = 0; j < COL; j++) {
      prefix += matrix[i][j]
      above = sumArray[i][j + 1]
      sumArray[i + 1][j + 1] = prefix + above
    }
  }
};

/** 
 * @param {number} row1 
 * @param {number} col1 
 * @param {number} row2 
 * @param {number} col2
 * @return {number}
 */
NumMatrix.prototype.sumRegion = function(row1, col1, row2, col2) {
  row1 += 1
  col1 += 1
  row2 += 1
  col2 += 1

  let downRight = this.sumArray[row2][col2]
  let topLeft = this.sumArray[row1 - 1][col1 - 1]
  let up = this.sumArray[row1 - 1][col2]
  let left = this.sumArray[row2][col1 - 1]

  return downRight - up - left + topLeft
};

/** 
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */

const Print2D = arr => arr.forEach(o => console.log(...o))

grid = [[3, 0, 1, 4, 2], [5, 6, 3, 2, 1], [1, 2, 0, 1, 5], [4, 1, 0, 1, 7], [1, 0, 3, 0, 5]]

obj = new NumMatrix(grid)