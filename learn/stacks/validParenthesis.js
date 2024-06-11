// https://leetcode.com/problems/valid-parentheses/
/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = function (s) {
  const stack = []
  const set1 = new Set(['{', '(', '['])
  for (const ch of s) {
    // console.log(ch)
    if (set1.has(ch)) {
      stack.push(ch)
    } else {
      if (ch === ')') {
        if (stack.length > 0 && stack[stack.length - 1] === '(') {
          stack.pop()
        } else {
          return false
        }
      } else if (ch === '}') {
        if (stack.length > 0 && stack[stack.length - 1] === '{') {
          stack.pop()
        } else {
          return false
        }
      } else if (ch === ']') {
        if (stack.length > 0 && stack[stack.length - 1] === '[') {
          stack.pop()
        } else {
          return false
        }
      }
    }
  }

  return stack.length === 0
}

const main = () => {
  s = '()[]{}'
  console.log('Is valid .. ?', isValid(s))

  s = '(]'
  console.log('Is valid .. ?', isValid(s))

  s = '({{{}}()})'
  console.log('Is valid .. ?', isValid(s))

  s = '}'
  console.log('Is valid .. ?', isValid(s))

  s = '(])'
  console.log('Is valid .. ?', isValid(s))
}

main()
