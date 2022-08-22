
const LIS = (arr) => {
  const parents = Array(arr.length).fill(null)
  const increasingSubs = Array(arr.length + 1).fill(0)
  let length = 0
  let pos
  for (let i = 0; i < arr.length; i++) {
    let low = 1
    let high = length
    while (low <= high) {
      const mid = low + Math.ceil((high - low) / 2)
      // check where in increasingsubs arr[i] will sit, if less, it should sit above mid
      if (arr[increasingSubs[mid]] < arr[i]) {
        low = mid + 1
      } else {
        high = mid - 1
      }
    }
    pos = low
    parents[i] = increasingSubs[pos - 1]
    increasingSubs[pos] = i

    // change the length of the latest icreasingsubs
    if (pos > length) {
      length = pos
    }
  }
  console.dir(increasingSubs)
  console.dir(parents)

  const LIS = Array(length)
  let k = increasingSubs[length]
  for (let j = length - 1; j >= 0; j--) {
    LIS[j] = arr[k]
    k = parents[k]
  }
  for (let i = 0; i < length; i++) {
    console.log(LIS[i])
  }
}

const method2DP = (arr) => {
  const LIS = Array(arr.length).fill(1)
  for (let i = 1; i < arr.length; i++) {
    console.log ('Before', LIS)
    for (let j = 0; j < i; j++) {
      if (arr[j] < arr[i] && LIS[i] < LIS[j] + 1) {
        LIS[i] = LIS[j] + 1
      }
    }
    console.log ('After', LIS)
  }
  console.dir(LIS)
}

method2DP([3, 1, 5, 2, 6, 4, 9])
// LIS([3, 1, 5, 2, 6, 4, 9])
