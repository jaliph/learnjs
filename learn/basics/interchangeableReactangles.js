// https://leetcode.com/problems/number-of-pairs-of-interchangeable-rectangles/

/**
 * @param {number[][]} rectangles
 * @return {number}
 */
var interchangeableRectangles = function(rectangles) {
  let count = rectangles.reduce((prev, rect) => {
    let key = rect[0] / rect[1]
    prev[key] = (prev[key] || 0) + 1
    return prev
  }, {})    


  let res = 0
  for (let i in count) {
    let cnt = count[i]
    if (cnt > 1) {
      console.log(cnt)
      res += (cnt * (cnt - 1)) / 2
    }

  }
  return res
};

const main = () => {
  rectangles = [[4,8],[3,6],[10,20],[15,30]]
  console.log('Count of interchangeable reactangles are ', interchangeableRectangles(rectangles))
}

main()