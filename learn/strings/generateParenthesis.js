// /**
//  * @param {number} n
//  * @return {string[]}
//  */
// const generateParenthesis = (n) => {
//   const res = []
//   const aux = (current = '', left = 0, right = 0) => {
//     if (left > n || right > n) {
//       return
//     }
//     if (current.length === 2 * n) {
//       res.push(current)
//       return
//     }
//     if (left >= right) {
//       aux(`${current}(`, left + 1, right)
//       aux(`${current})`, left, right + 1)
//     }
//   }
//   aux()
//   return res
// }

/**
 * @param {number} n
 * @return {string[]}
 */
const generateParenthesis = function (n) {
  const result = []
  const aux = (current, left, right) => {
    if (left === n && right === n) {
      result.push(current)
      return
    }
    if (left < right || left > n || right > n) {
      return
    }
    aux(`${current}(`, left + 1, right)
    aux(`${current})`, left, right + 1)
  }
  aux('', 0, 0)
  return result
}
