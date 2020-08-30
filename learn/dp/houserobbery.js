
const Rob = (arr, i) => {
  if (arr.length === 0) {
    return 0
  }

  if (arr.length === 1) {
    return arr[0]
  }

  if (i < 0) {
    return 0
  }

  let ith_House_Selected = Rob(arr, i - 2) + arr[i]
  let ith_House_Not_Selected = Rob(arr, i - 1)
  return Math.max(ith_House_Selected, ith_House_Not_Selected)
}

const RobDp = (arr) => {
  let table = Array(arr.length + 1)
  table[0] = arr[0]
  table[1] = Math.max(arr[0], arr[1])
  for (let i = 2; i < arr.length; i++) {
    table[i] = Math.max(arr[i] + table[i - 2], table[i - 1])
  }
  return table[arr.length - 1]
}

const RobDpEfficient = (arr) => {
  let prev2 = arr[0]
  let prev1 = Math.max(arr[0], arr[1])
  let max = 0
  for (let i = 2; i < arr.length; i++) {
    max = prev1
    prev1 = Math.max(prev2 + arr[i], prev1)
    prev2 = max
  }
  return prev1
}

console.dir(Rob([2, 7, 9, 3, 1], 4))
console.dir(RobDp([2, 7, 9, 3, 1]))
console.dir(RobDpEfficient([2, 7, 9, 3, 1]))
