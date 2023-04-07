
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

  for (let i = 0; i <= C; i++) {
    table[0][i] = weights[0] <= i ? profits[0] : 0
  }

  for (let i = 1; i < weights.length; i++) {
    for (let c = 1; c <= C; c++) {
      let p1 = 0, p2 = 0
      if (weights[i] <= c) {
        p1 = profits[i] + table[i - 1][c - weights[i]]
      }
      p2 = table[i - 1][c]

      table[i][c] = Math.max(p1, p2)
    }
  }

  // TODO: Fetch Picked Items

  let totalCapacity = C
  let totalProfit = table[profits.length - 1][C]
  let items = []
  for (let i = profits.length - 1; i > 0; i--) {
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


const knapSack = (profits, weights, Cap) => {
  const knapSackRecur = (profits, weights, Cap, i) => {
    if (Cap <= 0) return 0
    if (i >= profits.length) return 0

    if (weights[i] > Cap) {
      return knapSackRecur(profits, weights, Cap, i + 1)
    }

    let p1_iIsSelected = profits[i] + knapSackRecur(profits, weights, Cap - weights[i], i + 1)
    let p2_iIsNotSelected = knapSackRecur(profits, weights, Cap, i + 1)
    return Math.max(p1_iIsSelected, p2_iIsNotSelected)
  }
  return knapSackRecur(profits, weights, Cap, 0)
}


console.log(`Total knapsack profit with Avi: ---> ${knapSack(profits, weights, 7)}`);




// Revision March 2023


const _01KnapSackR = (profits, weights, Capacity) => {
  const _01KnapSackRecursion = (p, w, i, C) => {
    if (i >= profits.length) return 0
    if (C <= 0) return 0

    if (w[i] > C) return _01KnapSackRecursion(p, w, i + 1, C)

    let iIsSelected = p[i] + _01KnapSackRecursion(p, w, i + 1, C - w[i])
    let iIsNotSelected = _01KnapSackRecursion(p, w, i + 1, C)
    return Math.max(iIsSelected, iIsNotSelected)
  }

  return _01KnapSackRecursion(profits, weights, 0, Capacity)
}

const _01knapsack = (profits, weights, Capacity) => {
  const t = Array(profits.length).fill(0).map(() => Array(Capacity + 1).fill(0))

  for (let p = 0; p < profits.length; p++) {
    t[p][0] = 0
  }

  for (let w = 0; w <= Capacity; w++) {
    t[0][w] = weights[0] <= w ? profits[0] : 0
  }

  for (let p = 1; p < profits.length; p++) {
    for (let c = 1; c <= Capacity; c++) {
      let p1 = 0, p2 = 0
      if (weights[p] <= c) {
        p1 = profits[p] + t[p - 1][c - weights[p]]
      }
      p2 = t[p - 1][c]
      t[p][c] = Math.max(p1, p2)
    }
  }

  let totalCapacity = Capacity
  let totalProfit = t[profits.length - 1][Capacity]
  let items = []
  for (let i = profits.length; i > 0; i--) {
    if (totalProfit !== t[i - 1][totalCapacity]) {
      items.push(weights[i])
      totalProfit = totalProfit - profits[i]
      totalCapacity = totalCapacity - weights[i]
    }
  }
  console.log(items)
  return t[profits.length - 1][Capacity]
}

// console.log('Revise ' + _01knapsack(profits, weights, 7))
// console.log('Revise ' + _01KnapSackR(profits, weights, 7))





/// REvise 2 

const _01knapsack_Revise = (weights, profits, Capacity) => {
  const t = Array(profits.length).fill(0).map(() => Array(Capacity + 1).fill(0))


  // for (let i = 0; i < profits.length; i++) {
  //   t[i][0] = 0
  // }

  for (let j = 0; j <= Capacity; j++) {
    t[0][j] = weights[0] <= j ? profits[0] : 0
  }

  for (let i = 1; i < profits.length; i++) {
    for (let c = 1; c <= Capacity; c++) {
      if (weights[i] > c) {
        t[i][c] = t[i - 1][c]
      } else {
        t[i][c] = Math.max(t[i - 1][c], profits[i] + t[i - 1][c - weights[i]])
      }
    }
  }


  Print2D(t)

  let totalCapacity = Capacity
  let totalProfit = t[profits.length - 1][Capacity]
  let items = []
  let i = profits.length
  while (i > 0) {
    if (totalProfit !== t[i - 1][totalCapacity]) {
      // This item is included.
      // console.log(profits[i])
      items.push(weights[i]);

      // Since this weight is included its
      // value is deducted
      totalProfit = totalProfit - profits[i];
      totalCapacity = totalCapacity - weights[i];
    }
    i--
  }
  if (totalCapacity > 0) {
    items.push(weights[i])
  }
  console.log(items)
  return t[profits.length - 1][Capacity]
}

const Print2D = (arr) => arr.forEach(v => console.log(...v))

// console.log('Revise R ' + _01knapsack_Revise(profits, weights, 7))
console.log('Revise R1 ' + _01knapsack_Revise([3, 6, 10, 7, 2] , [12, 10, 15, 17, 13] , 10))



