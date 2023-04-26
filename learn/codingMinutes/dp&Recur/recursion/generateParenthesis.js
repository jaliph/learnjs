
const generateParenthesis1 = (n) => {
  const genParenthesisRecur = (n, i, open, close, str) => {
    if (i === 2 * n) {
      result.push(str)
    }

    if (open < n) {
      genParenthesisRecur(n, i + 1, open + 1, close, str + '(')
    }

    if (open > close) {
      genParenthesisRecur(n, i + 1, open, close + 1, str + ')')
    }
  }
  const result = []
  genParenthesisRecur(n, 0, 0, 0, '')
  return result
}

const generateParenthesis2 = (n) => {
  const genParenthesisRecur = (n, open, close, str) => {
    if (open === n && close === n && open === close) {
      result.push(str)
    }

    if (open < close || open > n || close > n) {
      return
    }
    genParenthesisRecur(n, open + 1, close, str + '(')
    genParenthesisRecur(n, open, close + 1, str + ')')
  }
  const result = []
  genParenthesisRecur(n, 0, 0, '')
  return result
}

const main = () => {
  const n = 4
  console.log('All Possible Parenthesis are : ', generateParenthesis1(n))
  console.log('All Possible Parenthesis are : ', generateParenthesis2(n))
}

main()
