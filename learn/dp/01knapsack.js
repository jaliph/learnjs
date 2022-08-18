
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

const maxV2 = (vals, wts, i, C) => {
  if (C <= 0 || i >= vals.length) {
    return 0
  }

  let iSelected = 0
  if (wts[i] <= C) {
    iSelected = vals[i] + maxV2(vals, wts, i + 1, C - wts[i])
  }

  let iNotSelected = maxV2(vals, wts, i + 1, C)
  return Math.max(iSelected, iNotSelected)
}

const maxVPureDP = (vals, wts, C) => {
  const table = Array(vals.length + 1).fill(0).map(() => Array(wts.length + 1).fill(0))

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
  console.dir(table)
  return table[vals.length][wts.length]
}

const maxVPureDP2 = (profits, weights, C) => {
  let table = Array(profits.length).fill(0).map(() => Array(C + 1).fill(0))

  for (let i = 0; i < profits.length; i++) {
    table[i][0] = 0
  }

  for (let i = 0; i <= C ; i++) {
    table[0][i] = weights[0] <= i  ? profits[0] : 0
  }

  for (let i = 1; i < weights.length; i++) {
    for (let c = 1; c <= C; c++) {
      let p1 = 0, p2 = 0
      if (weights[i] <= c) {
        p1 = profits[i] + table[i-1][c - weights[i]] 
      }
      p2 = table[i- 1][c]

      table[i][c] = Math.max(p1, p2)
    }
  }

  // TODO: Fetch Picked Items

  let totalCapacity = C
  let totalProfit = table[profits.length - 1][C]
  let items = []
  for (let i = profits.length - 1; i > 0; i--)  {
    if (totalProfit != table[i - 1][totalCapacity]) {
      items.push(weights[i])
      totalProfit -= profits[i]
      totalCapacity -= weights[i]
    }
  }
  // console.log(table)
  console.log(items)
  return table[profits.length - 1][C]
}

console.dir(maxV([150, 200, 300], [1, 4, 3], 3, 4))
console.dir(maxV2([150, 200, 300], [1, 4, 3], 0, 4))
console.dir(maxVPureDP([150, 200, 300], [1, 4, 3], 4))
var profits = [1, 6, 10, 16];
var weights = [1, 2, 3, 5];
console.log(`Total knapsack profit: ---> ${maxV2(profits, weights, 0, 7)}`);
console.log(`Total knapsack profit: ---> ${maxV2(profits, weights, 0, 6)}`);
console.log(`Total knapsack profit: ---> ${maxVPureDP2(profits, weights, 7)}`);