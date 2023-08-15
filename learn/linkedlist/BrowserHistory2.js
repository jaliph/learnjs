// https://leetcode.com/problems/design-browser-history/

/**
 * @param {string} homepage
 */
var BrowserHistory = function(homepage) {
  this.list = [homepage]
  this.len = 1
  this.curr = 0
};

/** 
 * @param {string} url
 * @return {void}
 */
BrowserHistory.prototype.visit = function(url) {
  if (this.curr + 1 >= this.list.length) {
    this.list.push(url)
  } else {
    this.list[this.curr + 1] = url
  }
  this.curr++
  this.len = this.curr + 1
};

/** 
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.back = function(steps) {
  this.curr = Math.max(this.curr - steps, 0)
  return this.list[this.curr]
};

/** 
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.forward = function(steps) {
  this.curr = Math.min(this.curr + steps, this.len - 1)
  return this.list[this.curr]
};

/** 
 * Your BrowserHistory object will be instantiated and called as such:
 * var obj = new BrowserHistory(homepage)
 * obj.visit(url)
 * var param_2 = obj.back(steps)
 * var param_3 = obj.forward(steps)
 */

var obj = new BrowserHistory("leetcode.com")

obj.visit("google.com")
obj.visit("facebook.com")
obj.visit("youtube.com")
console.log(obj.back(1))
console.log(obj.back(1))
console.log(obj.forward(1))
obj.visit("linkedin.com")
console.log(obj.back(2))
obj.visit("test.com")
console.log(obj)


