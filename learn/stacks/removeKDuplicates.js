// https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string-ii/

/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
const removeDuplicates = function (s, k) {
  const stack = []
  const count = 0
  for (const ch of s) {
    if (stack.length > 0 && stack[stack.length - 1][0] === ch) {
      const [ch, count] = stack.pop()
      stack.push([ch, count + 1])
    } else {
      stack.push([ch, 1])
    }

    if (stack[stack.length - 1][1] === k) {
      stack.pop()
    }
    // console.log(stack)
  }

  let str = ''
  for (const [_, [ch, count]] of stack.entries()) {
    str += ch.repeat(count)
  }
  return str
}

const main = () => {
  s = 'deeedbbcccbdaa', k = 3
  console.log('After k consecutive deletes ... ', removeDuplicates(s, k))

  s = 'caabbbacc', k = 3
  console.log('After k consecutive deletes ... ', removeDuplicates(s, k))

  s = 'abcd', k = 2
  console.log('After k consecutive deletes ... ', removeDuplicates(s, k))

  s = 'pbbcggttciiippooaais', k = 2
  console.log('After k consecutive deletes ... ', removeDuplicates(s, k))
}

main()
