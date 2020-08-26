let array = [1, 14, 5, 20, 4, 2, 54, 20, 87, 98, 3, 1, 32]


const threeWayPartitioner = (arr) => {
  let l = 0
  let m = 0
  let h = arr.length - 1
  while (m < h) {
    let pivot = arr[h]
    if (arr[m] > arr[h]) {
      swap(arr, m, h)
      m++
    }
    if
  }
}

const swap = (arr, x, y) => {
  const temp = arr[x]
  arr[x] = arr[y]
  arr[y] = temp
}
