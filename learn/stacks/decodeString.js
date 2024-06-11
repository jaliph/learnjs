// https://leetcode.com/problems/decode-string/

/**
 * @param {string} s
 * @return {string}
 */
const decodeString = function (s) {
  const stack = []

  for (const ch of s) {
    if (ch == ']') {
      let curr = ''
      while (stack.length > 0 && stack[stack.length - 1] !== '[') {
        curr = stack.pop() + curr
      }
      const d = stack.pop()
      let num = ''
      while (stack.length > 0 && !isNaN(stack[stack.length - 1])) {
        num = stack.pop() + num
      }

      stack.push(curr.repeat(parseInt(num)))
    } else {
      stack.push(ch)
    }
  }

  return stack.join('')
}

const main = () => {
  s = '3[a]2[bc]'
  console.log('decoded string is ', decodeString(s))

  s = '2[abc]3[cd]ef'
  console.log('decoded string is ', decodeString(s))

  s = '3[a2[c]]'
  console.log('decoded string is ', decodeString(s))
}

main()
