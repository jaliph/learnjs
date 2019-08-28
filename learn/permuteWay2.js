const swap = (arr, i, j) => {
  [arr[i], arr[j]] = [arr[j], arr[i]]
}

let permutes = []

const permute = (arr, i, j) => {
  if (i == j) {
    permutes.push(arr.join(''))
  } else {
    for (let p = i; p <= j; p++) {
      swap(arr, p, i)

      permute(arr, ++i, j)

      swap(arr, p, i)
    }
  }
}

permute('hello'.split(''), 0, 'hello'.split('').length - 1)
console.dir(permutes)
