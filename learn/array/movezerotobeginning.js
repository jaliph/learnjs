
const moveZerosToLeft = (arr) => {
  // base case
  if (arr.length <= 1) return

  let r = arr.length - 1
  let w = arr.length - 1

  while (r >= 0) {
    if (arr[r] != 0) {
      arr[w] = arr[r]
      w--
    }
    r--
  }

  while (w >= 0) {
    arr[w] = 0
    w--
  }
}

const numsList = [[1, 10, 20, 0, 59, 63, 0, 88, 0], [1, 0, 2, 3, 0], [0], [-1, 0, 0, -2, 9], [1, 2, 3, 4, 5], [2]]

for (let i = 0; i < numsList.length; i++) {
  console.log((i + 1) + '. Before list:\t' + (numsList[i]))
  moveZerosToLeft(numsList[i])
  console.log('   After list:\t' + (numsList[i]))
  console.log('----------------------------------------------------------------------------------------------------\n')
}
