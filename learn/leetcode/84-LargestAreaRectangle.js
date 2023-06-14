// https://leetcode.com/problems/largest-rectangle-in-histogram/

/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {

  let i = 1

  let s = []
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
};


const main = () => {
  heights = [2,1,5,6,2,3]
  console.log('largest area computed is ', largestRectangleArea(heights))

  heights = [2,4]
  console.log('largest area computed is ', largestRectangleArea(heights))

}

main()