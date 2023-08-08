// https://leetcode.com/problems/generate-parentheses/

/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis2 = function(n) {
  let result = []
  let helper = (leftCount, rightCount, str) => {
    if (leftCount === rightCount && leftCount == n) {
      result.push(str)
      return
    }

    if (leftCount < rightCount) {
      return
    }

    if (leftCount > n || rightCount > n) {
      return
    }

    helper(leftCount + 1, rightCount, str + '(')
    helper(leftCount, rightCount + 1, str + ')')

    return
  }

  helper(0, 0, '')
  return result
};

var generateParenthesis = function(n) {
  let result = []
  let stack = []

  const helper = (open, close) => {
    // base case
    if (open === n && close === n) {
      result.push(stack.join(''))
      return
    }

    if (open < n) {
      stack.push('(')
      helper(open + 1, close)
      stack.pop()
    }

    if (close < open) {
      stack.push(')')
      helper(open, close + 1)
      stack.pop()
    }
  }

  helper(0, 0)
  return result
}


const main = () => {
  for (let i = 1; i < 9; i++) {
    console.log("Generated Parenthesis are ", generateParenthesis(i))
  }
}

main()