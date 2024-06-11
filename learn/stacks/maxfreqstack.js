// https://leetcode.com/problems/maximum-frequency-stack/

const FreqStack = function () {
  this.map = new Map()
  this.stacks = []
}

/**
 * @param {number} val
 * @return {void}
 */
FreqStack.prototype.push = function (val) {
  this.map.set(val, (this.map.get(val) || 0) + 1)
  const count = this.map.get(val)
  // console.log(count)
  this.stacks[count] = this.stacks[count] || []
  this.stacks[count].push(val)
}

/**
 * @return {number}
 */
FreqStack.prototype.pop = function () {
  while (!this.stacks[this.stacks.length - 1] || this.stacks[this.stacks.length - 1].length === 0) {
    this.stacks.pop()
  }
  const popped = this.stacks[this.stacks.length - 1].pop()
  this.map.set(popped, this.map.get(popped) - 1)
  return popped
}

/**
 * Your FreqStack object will be instantiated and called as such:
 * var obj = new FreqStack()
 * obj.push(val)
 * var param_2 = obj.pop()
 */

const freqStack = new FreqStack()
freqStack.push(1) // The stack is [5]
freqStack.push(1) // The stack is [5,7]
freqStack.push(1) // The stack is [5,7,5]
freqStack.push(2) // The stack is [5,7,5,7]
console.log(freqStack.pop())
console.log(freqStack.pop())
freqStack.push(2) // The stack is [5,7,5,7,4]
freqStack.push(2) // The stack is [5,7,5,7,4,5]
freqStack.push(1)
console.log(freqStack)
console.log(freqStack.pop())
console.log(freqStack.pop())
console.log(freqStack.pop())

// console.log(freqStack)

// [1], [1], [1], [2], [], [], [2], [2], [1], [], [], []
