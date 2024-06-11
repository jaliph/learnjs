/**
 * https://leetcode.com/problems/remove-duplicate-letters
 * @param {string} s
 * @return {string}
 */
const removeDuplicateLetters = function (s) {
  const lastOccurences = new Map()

  for (let i = 0; i < s.length; i++) {
    lastOccurences.set(s[i], i)
  }

  const visited = new Set()

  const stack = []
  for (let i = 0; i < s.length; i++) {
    if (!visited.has(s[i])) {
      while (stack.length && stack[stack.length - 1] > s[i] && i < lastOccurences.get(stack[stack.length - 1])) {
        visited.delete(stack.pop())
      }
      // add to res
      stack.push(s[i])
      visited.add(s[i])
    }
  }

  return stack.join('')
}
