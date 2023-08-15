// https://leetcode.com/problems/design-circular-queue/

function ListNode(val, next, prev) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
  this.prev = (next===undefined ? null : prev)
}

/**
 * @param {number} k
 */
var MyCircularQueue = function(k) {
  this.space = k
  this.Right = new ListNode(null)
  this.Left = new ListNode(null, this.Right)
  this.Right.prev = this.Left
};

/** 
 * @param {number} value
 * @return {boolean}
 */
MyCircularQueue.prototype.enQueue = function(value) {
  if (this.isFull()) {
    return false
  }
  let newNode = new ListNode(value, this.Right, this.Right.prev)
  this.Right.prev.next = newNode
  this.Right.prev = newNode

  this.space--
  return true
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.deQueue = function() {
  if (this.isEmpty()) {
    return false
  }

  this.Left.next = this.Left.next.next
  this.Left.next.prev = this.Left

  this.space++
  return true
};

/**
 * @return {number}
 */
MyCircularQueue.prototype.Front = function() {
  if (this.isEmpty()) {
    return -1
  }
  return this.Left.next.val
};

/**
 * @return {number}
 */
MyCircularQueue.prototype.Rear = function() {
  if (this.isEmpty()) {
    return -1
  }
  return this.Right.prev.val
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isEmpty = function() {
  return this.Left.next === this.Right
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isFull = function() {
  return this.space === 0
};

/** 
 * Your MyCircularQueue object will be instantiated and called as such:
 * var obj = new MyCircularQueue(k)
 * var param_1 = obj.enQueue(value)
 * var param_2 = obj.deQueue()
 * var param_3 = obj.Front()
 * var param_4 = obj.Rear()
 * var param_5 = obj.isEmpty()
 * var param_6 = obj.isFull()
 */