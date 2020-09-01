
const maxV = (vals, wts, i, C) => {
  if (i === 0) {
    return 0
  }
  if (C <= 0) {
    return 0
  }
  if (wts[i - 1] > C) {
    return maxV(vals, wts, i - 1, C)
  }
  const ith_item_selected = vals[i - 1] + maxV(vals, wts, i - 1, C - wts[i - 1])
  const ith_item_not_selected = maxV(vals, wts, i - 1, C)
  return Math.max(ith_item_selected, ith_item_not_selected)
}

const maxVPureDP = (vals, wts, C) => {
  const table = Array(vals.length + 1).fill(Array(wts.length + 1).fill(0))

  let i, c
  for (i = 0; i <= vals.length; i++) {
    for (c = 0; c <= wts.length; c++) {
      if (i <= 0 || c <= 0) {
        table[i][c] = 0
      } else if (c < wts[i - 1]) {
        table[i][c] = table[i - 1][c]
      } else {
        table[i][c] = Math.max(vals[i - 1] + table[i - 1][c - wts[i - 1]], table[i - 1][c])
      }
    }
  }
  return table[vals.length][wts.length]
}

console.dir(maxV([150, 200, 300], [1, 4, 3], 3, 4))
console.dir(maxVPureDP([150, 200, 300], [1, 4, 3], 4))
