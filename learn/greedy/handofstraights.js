
class Heap {
  constructor (comp) {
    this.heap = []
    this.size = 0
    this.comparator = comp || function (a, b) { return a - b }
  }

  pop () {
    if (this.heap.length > 0) {
      const data = this.heap[0]
      this.heap[0] = this.heap[this.heap.length - 1]
      this.heap.pop()
      this.size--
      this.__percolateDown(0)
      return data
    } else {
      return false
    }
  }

  peek () {
    return this.heap[0]
  }

  push (data) {
    this.heap.push(data)
    this.size++
    this.__percolateUp(this.heap.length - 1)
  }

  __percolateDown (i) {
    const leftChild = (2 * i) + 1
    const rightCild = (2 * i) + 2

    const parent = i
    if (leftChild < this.heap.length && this.comparator(this.heap[i], this.heap[leftChild]) > 0) {
      i = leftChild
    }
    if (rightCild < this.heap.length && this.comparator(this.heap[i], this.heap[rightCild]) > 0) {
      i = rightCild
    }
    if (i != parent) {
      this.__swap(parent, i)
      this.__percolateDown(i)
    }
  }

  __percolateUp (i) {
    const parent = Math.floor((i - 1) / 2)
    if (parent >= 0) {
      if (this.comparator(this.heap[parent], this.heap[i]) > 0) {
        this.__swap(parent, i)
        this.__percolateUp(parent)
      }
    }
  }

  __swap (i, j) {
    const temp = this.heap[i]
    this.heap[i] = this.heap[j]
    this.heap[j] = temp
  }
}

/**
 * https://leetcode.com/problems/hand-of-straights/
 * @param {number[]} hand
 * @param {number} groupSize
 * @return {boolean}
 */
const isNStraightHand = function (hand, groupSize) {
  if (hand.length % groupSize) {
    return false
  }
  const freq = new Map()
  for (const n of hand) {
    freq.set(n, (freq.get(n) || 0) + 1)
  }

  const h = new Heap()
  for (const n of freq.keys()) {
    h.push(n)
  }

  while (h.size > 0) {
    const n = h.peek()
    console.log(n)
    for (let i = n; i < n + groupSize; i++) {
      if (!freq.has(i)) {
        return false
      }
      freq.set(i, freq.get(i) - 1)
      if (freq.get(i) === 0) {
        if (i !== h.peek()) {
          return false
        }
        h.pop()
      }
    }
  }
  return true
}

const main = () => {
  hand = [1, 2, 3, 6, 2, 3, 4, 7, 8], groupSize = 3
  console.log('Possible ... ? ', isNStraightHand(hand, groupSize))
}

main()
