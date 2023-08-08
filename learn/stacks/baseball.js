// https://leetcode.com/problems/baseball-game/

/**
 * @param {string[]} operations
 * @return {number}
 */
var calPoints = function(operations) {
  let stack = []

  for (let ops of operations) {
    if (!isNaN(ops)) {
      stack.push(Number(ops))
    } else {
      let previous = stack[stack.length - 1]
      switch (ops) {
        case '+': {
          let prev2 = stack[stack.length - 2]
          stack.push(previous + prev2)
          break;
        }
        case 'C': {
          stack.pop()
          break;
        }
        case 'D': {
          stack.push(previous * 2)
          break;
        }
      }
    }
    // console.log(stack)
  }
  return stack.reduce((prev, curr) => prev + curr, 0)
};


const main = () => {
  ops = ["5","2","C","D","+"]
  console.log('Score is ', calPoints(ops))

  ops = ["5","-2","4","C","D","9","+","+"]
  console.log('Score is ', calPoints(ops))

  ops = ["1","C"]
  console.log('Score is ', calPoints(ops))
}

main()
