
const minimumJumps = (arr) => {
  let steps = arr[0]
  let ladder = arr[0]
  let jump = 1
  for (let level = 1; level < arr.length; level++) {
    if (level === arr.length - 1) {
      return jump
    }
    if (level + arr[level] >= ladder) {
      ladder = level + arr[level]
    }
    steps--
    if (steps === 0) {
      jump++
      steps = ladder - level
    }
  }
  return jump
}

console.dir(minimumJumps([1, 4, 3, 7, 1, 2, 6, 7, 10]))
