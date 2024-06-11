
const increasing = (n) => {
  // base case
  if (n === 0) {
    return
  }

  // recursion
  increasing(n - 1)
  console.log(n)
}

const decreasing = (n) => {
  // base case
  if (n === 0) {
    return
  }

  // recursion
  console.log(n)
  decreasing(n - 1)
}

const main = () => {
  const n = 10
  console.log('Printing  increasing now')
  increasing(n)

  console.log('Printing  decreasing now')
  decreasing(n)
}

main()
