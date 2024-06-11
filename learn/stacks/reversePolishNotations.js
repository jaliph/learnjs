// https://leetcode.com/problems/evaluate-reverse-polish-notation/

/**
 * @param {string[]} tokens
 * @return {number}
 */
const evalRPN = function (tokens) {
  const stack = []
  const set = new Set(['+', '-', '/', '*'])
  for (const t of tokens) {
    if (!set.has(t)) {
      stack.push(parseInt(t))
    } else {
      const prev1 = stack.pop()
      const prev2 = stack.pop()
      switch (t) {
        case '+': {
          stack.push(prev1 + prev2)
          break
        }
        case '-': {
          stack.push(prev2 - prev1)
          break
        }
        case '*': {
          stack.push(prev1 * prev2)
          break
        }
        case '/': {
          stack.push(~~(prev2 / prev1))
          break
        }
      }
    }
    console.log(stack)
  }
  return stack[0]
}

const main = () => {
  tokens = ['2', '1', '+', '3', '*']
  console.log('Evaluation result is ', evalRPN(tokens))

  tokens = ['4', '13', '5', '/', '+']
  console.log('Evaluation result is ', evalRPN(tokens))

  tokens = ['10', '6', '9', '3', '+', '-11', '*', '/', '*', '17', '+', '5', '+']
  console.log('Evaluation result is ', evalRPN(tokens))

  tokens = ['4', '3', '-']
  console.log('Evaluation result is ', evalRPN(tokens))
}

main()
