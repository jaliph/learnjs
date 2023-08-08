// https://leetcode.com/problems/min-stack/

var MinStack = function() {
  this.stack = []
};

/** 
* @param {number} val
* @return {void}
*/
MinStack.prototype.push = function(val) {
if (this.stack.length == 0) {
  this.stack.push([val, val])
} else {
  let prev = this.stack[this.stack.length - 1]
  this.stack.push([val, Math.min(val, prev[1])])
}
};

/**
* @return {void}
*/
MinStack.prototype.pop = function() {
let d = this.stack.pop() 
};

/**
* @return {number}
*/
MinStack.prototype.top = function() {
let d = this.stack[this.stack.length - 1]
return d[0]
};

/**
* @return {number}
*/
MinStack.prototype.getMin = function() {
let d = this.stack[this.stack.length - 1]
return d[1]
};

/** 
* Your MinStack object will be instantiated and called as such:
* var obj = new MinStack()
* obj.push(val)
* obj.pop()
* var param_3 = obj.top()
* var param_4 = obj.getMin()
*/