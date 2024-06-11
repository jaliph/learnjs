// https://leetcode.com/problems/validate-stack-sequences/

/**
 * @param {number[]} pushed
* @param {number[]} popped
* @return {boolean}
*/
const validateStackSequences = function (pushed, popped) {
  const stack = []

  let po = 0
  for (const pu of pushed) {
    stack.push(pu)
    while (po < popped.length && stack[stack.length - 1] == popped[po]) {
      stack.pop()
      po++
    }
    // console.log(stack)
  }

  return stack.length === 0
}

const main = () => {
  pushed = [1, 2, 3, 4, 5], popped = [4, 5, 3, 2, 1]
  console.log('Is valid ? ', validateStackSequences(pushed, popped))

  pushed = [1, 2, 3, 4, 5], popped = [4, 3, 5, 1, 2]
  console.log('Is valid ? ', validateStackSequences(pushed, popped))
}

main()
