/**
 * https://leetcode.com/problems/beautiful-towers-ii/solutions/
 * @param {number[]} maxHeights
 * @return {number}
 */
const maximumSumOfHeights = function (maxHeights) {
  let total = 0
  const leftSum = Array(maxHeights.length).fill(0)
  let stack = []

  for (let i = 0; i < maxHeights.length; i++) {
    while (stack && maxHeights[stack[stack.length - 1]] > maxHeights[i]) {
      const index = stack.pop()

      let multiplier
      if (stack.length) {
        multiplier = index - stack[stack.length - 1]
      } else {
        multiplier = index + 1
      }
      total -= maxHeights[index] * multiplier
    }
    let multiplier
    if (stack.length) {
      multiplier = i - stack[stack.length - 1] // all the indices from stack to i (inclusive i)
    } else {
      multiplier = i + 1 // all the indicies including i
    }
    total += maxHeights[i] * multiplier
    leftSum[i] = total
    stack.push(i)
  }

  stack = []
  total = 0
  result = 0

  for (let i = maxHeights.length - 1; i >= 0; i--) {
    while (stack && maxHeights[stack[stack.length - 1]] > maxHeights[i]) {
      const index = stack.pop()

      let multiplier
      if (stack.length) {
        multiplier = stack[stack.length - 1] - index
      } else {
        multiplier = maxHeights.length - index
      }
      total -= maxHeights[index] * multiplier
    }
    let multiplier
    if (stack.length) {
      multiplier = stack[stack.length - 1] - i // all the indices from stack to i (inclusive i)
    } else {
      multiplier = maxHeights.length - i // all the indicies including i
    }
    total += maxHeights[i] * multiplier
    result = Math.max(result, total + leftSum[i] - maxHeights[i])
    stack.push(i)
  }

  return result
}

const main = () => {
  maxHeights = [5, 3, 4, 1, 1]
  maximumSumOfHeights(maxHeights)
}

main()
