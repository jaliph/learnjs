// https://leetcode.com/problems/largest-rectangle-in-histogram/

/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function (heights) {
  let i = 1

  const s = []
  s.push([0, heights[0]])
  let maxArea = 0
  while (s.length > 0) {
    let [index, top] = s[s.length - 1]
    // for the remaining items in the stack
    if (i == heights.length) {
      maxArea = Math.max(maxArea, top * (i - index))
      s.pop()
    } else {
      // iterating the Heights
      if (top <= heights[i]) {
        s.push([i, heights[i]])
      } else {
        let prevIndex
        while (top > heights[i] && s.length > 0) {
          prevIndex = index
          maxArea = Math.max(maxArea, top * (i - index))
          s.pop()
          if (s.length > 0) {
            [index, top] = s[s.length - 1]
          }
        }
        s.push([prevIndex, heights[i]])
      }
      i++
    }
  }

  return maxArea
}

// Geeks for geeks
/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function (heights) {
  const stack = []

  let max_area = 0 // Initialize max area

  let index = 0
  while (index < heights.length) {
    if (stack.length == 0 || heights[stack[stack.length - 1]] <= heights[index]) {
      stack.push(index)
      index += 1
    } else {
      // pop the top
      const top_of_stack = stack.pop()
      console.log('-->', index, stack[stack.length - 1])
      const width = stack.length > 0 ? (index - stack[stack.length - 1] - 1) : index
      console.log(stack)
      console.log(index, heights[top_of_stack], width)

      const area = heights[top_of_stack] * width
      console.log('area', area)

      // update max area, if needed
      max_area = Math.max(max_area, area)
    }
  }
  console.log(stack)
  while (stack.length > 0) {
    const top_of_stack = stack.pop()

    console.log(index)
    const width = (stack.length > 0 ? (index - stack[stack.length - 1] - 1) : index)
    const area = heights[top_of_stack] * width

    console.log(heights[top_of_stack], width, stack)
    max_area = Math.max(max_area, area)
  }

  return max_area
}

const main = () => {
  heights = [2, 1, 5, 6, 2, 3]
  console.log('largest area computed is ', largestRectangleArea(heights))

  heights = [2, 4]
  console.log('largest area computed is ', largestRectangleArea(heights))
}

main()
