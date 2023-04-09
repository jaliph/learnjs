
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

// console.dir(minimumJumps([1, 4, 3, 7, 1, 2, 6, 7, 10]))

// https://www.educative.io/courses/grokking-dynamic-programming-a-deep-dive-using-javascript/R8JMyx88y9L
const findMinJumpsBrute = (steps) => {
  const findMinJumpsRecur = (steps, i) => {
    // last index or more
    if (i >= steps.length - 1) {
      return 0
    }

    let jumps = Infinity

    // check for all the index i + 1 to allowed steps
    for (let j = i + 1; j <= i + steps[i]; j++) {
      jumps = Math.min(jumps, findMinJumpsRecur(steps, j) + 1)
    }

    return jumps
  }
  return findMinJumpsRecur(steps, 0)
}

const findMinJumps = (steps) => {
  const dp = Array(steps.length).fill(Infinity)

  dp[0] = 0

  for (let i = 1; i < steps.length; i++) {
    for (let j = 0; j < i; j++) {
      if (i <= steps[j] + j && dp[j] !== Infinity) {
        dp[i] = Math.min(dp[i], dp[j] + 1)
        break
      }
    }
  }

  return dp[steps.length - 1]
}

// Driver code
const main = function () {
  const inputs = [[7], [1, 0], [2, 3, 1, 1, 4], [2, 1, 1, 1, 4], [1, 1, 3, 6, 9, 3, 0, 1, 3]]

  // You can uncomment the line below and check how this recursive solution causes a time-out
  // inputs.push([2, 9, 4, 6, 1, 4, 7, 10, 0, 3, 9, 7, 4, 10, 5, 9, 3, 9, 7, 7, 10, 1, 8, 5, 9, 3, 1, 5, 9, 7, 7, 6, 3, 9, 7, 0, 1, 9, 9, 0, 9, 4, 9, 6, 2, 9, 3, 7, 6, 4]);

  for (let i = 0; i < inputs.length; i++) {
    console.log(i + 1 + '.  [' + inputs[i] + ']')
    console.log('Minimum jumps to reach the end: ' + findMinJumps(inputs[i]))
    console.log('-'.repeat(100) + '\n')
  }
}

main()
