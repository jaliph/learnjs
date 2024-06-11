// https://leetcode.com/problems/online-stock-span/

const StockSpanner = function () {
  this.stack = []
}

/**
 * @param {number} price
 * @return {number}
 */
StockSpanner.prototype.next = function (price) {
  let span = 1
  while (this.stack.length > 0 && price >= this.stack[this.stack.length - 1][0]) {
    const data = this.stack.pop()
    // console.log(data)
    span += data[1]
  }

  this.stack.push([price, span])
  // console.log(this.stack)
  return span
}

const obj = new StockSpanner()
console.log(obj.next(100))
console.log(obj.next(80))
console.log(obj.next(60))
console.log(obj.next(70))
console.log(obj.next(60))
console.log(obj.next(75))
// console.log(obj.next(85))
