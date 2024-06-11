// https://leetcode.com/problems/design-browser-history/

function ListNode (val, next, prev) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
  this.prev = (next === undefined ? null : prev)
}

/**
 * @param {string} homepage
 */
const BrowserHistory = function (homepage) {
  this.curr = new ListNode(homepage)
}

/**
 * @param {string} url
 * @return {void}
 */
BrowserHistory.prototype.visit = function (url) {
  const newNode = new ListNode(url)
  this.curr.next = newNode
  newNode.prev = this.curr
  this.curr = newNode
}

/**
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.back = function (steps) {
  let temp = this.curr

  while (temp.prev && steps > 0) {
    temp = temp.prev
    steps--
  }

  this.curr = temp
  return this.curr.val
}

/**
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.forward = function (steps) {
  let temp = this.curr

  while (temp.next && steps > 0) {
    temp = temp.next
    steps--
  }

  this.curr = temp
  return this.curr.val
}

/**
 * Your BrowserHistory object will be instantiated and called as such:
 * var obj = new BrowserHistory(homepage)
 * obj.visit(url)
 * var param_2 = obj.back(steps)
 * var param_3 = obj.forward(steps)
 */
