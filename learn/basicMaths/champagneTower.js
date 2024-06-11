/**
 * https://leetcode.com/problems/champagne-tower/
 * @param {number} poured
 * @param {number} query_row
 * @param {number} query_glass
 * @return {number}
 */
var champagneTower = function (poured, query_row, query_glass) {
  if (poured == 0) {
    return 0
  }
  let prevRow = [poured]
  let nextRow
  for (i = 1; i <= query_row; i++) {
    const borderGlass = Math.max(0, (prevRow[0] - 1) / 2)
    nextRow = [borderGlass]
    for (let i = 1; i < prevRow.length; i++) {
      nextRow.push(
        Math.max(0, ((prevRow[i - 1] - 1) / 2)) +
        Math.max(0, ((prevRow[i] - 1) / 2))
      )
    }
    nextRow.push(borderGlass)
    // console.log(nextRow)
    prevRow = nextRow
  }
  return Math.min(1, prevRow[query_glass])
}

var champagneTower = function (poured, query_row, query_glass) {
  if (poured == 0) {
    return 0
  }
  let prevRow = [poured]
  let nextRow
  for (i = 0; i <= query_row; i++) {
    nextRow = Array(i + 2).fill(0)
    for (let j = 0; j <= i; j++) {
      // if the prevRow is overflowed
      if (prevRow[j] >= 1) {
        nextRow[j] += (prevRow[j] - 1) / 2
        nextRow[j + 1] += (prevRow[j] - 1) / 2
        // update the prev row, it can hold max 1
        prevRow[j] = 1
      }
    }
    if (i != query_row) { prevRow = nextRow }
  }

  return prevRow[query_glass]
}
