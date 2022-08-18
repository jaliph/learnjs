
var longestValidParentheses = function(s) {
  let  stack = [ -1 ]
  let result = -Infinity
  for (let i = 0 ; i < s.length; i++) {
    if (s[i] === '(') {
      stack.push(i)
    } else {
      if (stack.length != 0) {
        stack.pop()
      }
      if (stack.length != 0) {
        result = Math.max(result, i - stack[stack.length - 1] )
      } else {
        stack.push(i)
      }
    }
  }
  return result
}

let string = ')()())'

