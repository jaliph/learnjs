// https://leetcode.com/problems/lru-cache/

function ListNode (key, val, next) {
  this.key = (key === undefined ? 0 : key)
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
  this.prev = (next === undefined ? null : next)
}

/**
 * @param {number} capacity
 */
const LRUCache = function (capacity) {
  this.capacity = capacity
  this.cache = new Map()
  this.Left = new ListNode(null, null)
  this.Right = new ListNode(null, null)
  this.Left.next = this.Right
  this.Right.prev = this.Left

  this.remove = (node) => {
    const prev = node.prev
    const nxt = node.next

    prev.next = nxt
    nxt.prev = prev
  }

  this.insert = (node) => {
    const prev = this.Right.prev
    const nxt = this.Right

    prev.next = node
    nxt.prev = node

    node.prev = prev
    node.next = nxt
  }
}

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
  if (this.cache.has(key)) {
    const node = this.cache.get(key)
    this.remove(node)
    this.insert(node)
    return node.val
  }
  return -1
}

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
  if (this.cache.has(key)) {
    const node = this.cache.get(key)
    node.val = value
    this.remove(node)
    this.insert(node)
    this.cache.set(key, node)
    return
  }
  const node = new ListNode(key, value)
  this.insert(node)
  this.cache.set(key, node)

  if (this.capacity < this.cache.size) {
    const evicted = this.Left.next
    this.cache.delete(evicted.key)
    this.remove(evicted)
  }
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */

const capacity = 2
lRUCache = new LRUCache(capacity)
lRUCache.put(2, 1)
lRUCache.put(2, 2)
console.log(lRUCache.get(2))
lRUCache.put(3, 3)
console.log(lRUCache)
