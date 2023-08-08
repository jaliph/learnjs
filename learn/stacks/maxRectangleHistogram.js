// https://leetcode.com/problems/largest-rectangle-in-histogram/
/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
  let maxArea = 0
  let stack = []
  let start
  for (let [i, h] of heights.entries()) {
    start = i
    while (stack.length > 0 && stack[stack.length - 1][1] > h) {
      let [index, height] = stack.pop()
      maxArea = Math.max(maxArea, height * (i - index))
      start = index
    }
    stack.push([start, h])
  }

  while (stack.length > 0) {
    let [i, h] = stack.pop()
    maxArea = Math.max(maxArea, h * (heights.length - i))
  }

  return maxArea
};


const main = () => {
  heights = [2,1,5,6,2,3]
  console.log('Max area is ', largestRectangleArea(heights))
}

main()