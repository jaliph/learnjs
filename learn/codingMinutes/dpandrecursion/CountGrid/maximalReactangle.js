/**
 * @param {character[][]} matrix
 * @return {number}
 */
const maximalRectangle = function (matrix) {
  const r = matrix.length
  const c = matrix[0].length

  for (let j = 0; j < c; j++) {
    for (let i = 1; i < r; i++) {
      if (Number(matrix[i][j]) > 0) {
        matrix[i][j] = 1 + Number(matrix[i - 1][j])
      } else {
        matrix[i][j] = Number(matrix[i][j])
      }
    }
  }

  const maxAreaWithHistogram = (heights) => {
    let index = 0
    const s = []
    let maxArea = 0
    while (index < heights.length) {
      if (s.length == 0 || heights[s[s.length - 1]] < heights[index]) {
        s.push(index++)
      } else {
        const top = s.pop()

        const width = s.length > 0 ? (index - s[s.length - 1] - 1) : index
        maxArea = Math.max(maxArea, heights[top] * width)
      }
    }

    while (s.length > 0) {
      const top = s.pop()

      const width = s.length > 0 ? (index - s[s.length - 1] - 1) : index
      maxArea = Math.max(maxArea, heights[top] * width)
    }

    return maxArea
  }

  let largestArea = 0
  for (let i = 0; i < r; i++) {
    largestArea = Math.max(largestArea, maxAreaWithHistogram(matrix[i]))
  }

  return largestArea
}

const Print2D = arr => arr.forEach(o => console.log(...o))

const main = () => {
  matrix = [['1', '0', '1', '0', '0'], ['1', '0', '1', '1', '1'], ['1', '1', '1', '1', '1'], ['1', '0', '0', '1', '0']]

  console.log('size of largest rectangle is ', maximalRectangle(matrix))
}

main()
