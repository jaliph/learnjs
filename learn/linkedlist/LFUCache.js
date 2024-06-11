// https://leetcode.com/problems/lfu-cache/

class ListNode {
  constructor (val, next, prev) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
    this.prev = (next === undefined ? null : prev)
  }
}

class LinkedList {
  constructor () {
    this.map = new Map()
    this.Right = new ListNode(null)
    this.Left = new ListNode(null, this.Right)
    this.Right.prev = this.Left
  }

  len () {
    return this.map.size
  }

  pop (val) {
    if (this.map.has(val)) {
      const node = this.map.get(val)

      // save
      const prevNode = node.prev
      // delete
      prevNode.next = node.next
      prevNode.next.prev = prevNode
      this.map.delete(val)
    }
  }

  popleft () {
    const data = this.Left.next.val
    this.Left.next = this.Left.next.next
    this.Left.next.prev = this.Left
    this.map.delete(data)
    return data
  }

  pushRight (val) {
    const newNode = new ListNode(val, this.Right)
    newNode.prev = this.Right.prev
    newNode.prev.next = newNode
    this.Right.prev = newNode
    this.map.set(val, newNode)
  }

  update (val) {
    this.pop(val)
    this.pushRight(val)
  }
}

/**
 * @param {number} capacity
 */
const LFUCache = function (capacity) {
  this.capacity = capacity
  this.valueMap = new Map()
  this.countMap = new Map()
  this.lftCount = 1
  this.lists = []
  this.counter = (key) => {
    const count = this.countMap.get(key) || 0
    if (this.lists[count]) {
      this.lists[count].pop(key)
    }
    if (!this.lists[count + 1]) {
      this.lists[count + 1] = new LinkedList()
    }
    this.lists[count + 1].pushRight(key)
    this.countMap.set(key, count + 1)
    // console.log(this.lftCount == count, count, this.lists[count].len())
    if (this.lftCount == count && this.lists[count] && this.lists[count].len() === 0) {
      this.lftCount++
    }
  }
}

/**
 * @param {number} key
 * @return {number}
 */
LFUCache.prototype.get = function (key) {
  if (!this.valueMap.has(key)) {
    return -1
  }

  this.counter(key)
  return this.valueMap.get(key)
}

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LFUCache.prototype.put = function (key, value) {
  if (!this.valueMap.has(key) && this.valueMap.size == this.capacity) {
    // we need to evict
    // console.log(this.lists[this.lftCount])
    const evictedKey = this.lists[this.lftCount].popleft()
    this.valueMap.delete(evictedKey)
    this.countMap.delete(evictedKey)
  }

  this.valueMap.set(key, value)
  this.counter(key)
  this.lftCount = Math.min(this.countMap.get(key), this.lftCount)
}

/**
 * Your LFUCache object will be instantiated and called as such:
 * var obj = new LFUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */

const lfu = new LFUCache(2)
lfu.put(1, 1)
lfu.put(2, 2)
console.log(lfu.get(1))

lfu.put(3, 3)
console.log(lfu.get(2))
console.log(lfu.get(3))
lfu.put(4, 4)
console.log(lfu)
