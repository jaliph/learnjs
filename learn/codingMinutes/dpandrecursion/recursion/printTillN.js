
const increasing = (n) => {
  // base case
  if (n === 0) {
    return
  }

  // recursion
  increasing(n - 1)
  console.log(n)
  return 
}

const decreasing = (n) => {
  // base case
  if (n === 0) {
    return
  }

  // recursion
  console.log(n)
  decreasing(n - 1)
  return 
}

const main = () => {
  let n = 10
  console.log('Printing  increasing now')
  increasing(n)

  console.log('Printing  decreasing now')
  decreasing(n)
}

main()