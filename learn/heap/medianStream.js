class Heap {
  constructor (comp) {
    this.heap = []
    this.size = 0
    this.comparator = comp || function (a, b) { return a - b }
  }

  swap (i, j) {
    const temp = this.heap[i]
    this.heap[i] = this.heap[j]
    this.heap[j] = temp
  }

  peek () {
    return this.heap[0]
  }

  pop () {
    if (this.size > 0) {
      const data = this.heap[0]
      this.heap[0] = this.heap[this.size - 1]
      this.heap.pop()
      this.percolateDown(0)
      this.size--
      return data
    }
  }

  push (data) {
    this.heap.push(data)
    this.size++
    this.percolateUp(this.heap.length - 1)
  }

  percolateDown (i) {
    const leftChild = (i * 2) + 1
    const rightChild = (i * 2) + 2

    const parent = i
    if (leftChild < this.heap.length && this.comparator(this.heap[i], this.heap[leftChild]) > 0) {
      i = leftChild
    }
    if (rightChild < this.heap.length && this.comparator(this.heap[i], this.heap[rightChild]) > 0) {
      i = rightChild
    }

    if (i != parent) {
      this.swap(i, parent)
      this.percolateDown(i)
    }
  }

  percolateUp (i) {
    const parent = Math.floor((i - 1) / 2)
    if (parent >= 0 && this.comparator(this.heap[parent], this.heap[i]) > 0) {
      this.swap(parent, i)
      this.percolateUp(parent)
    }
  }
}

const MedianFinder = function () {
  this.maxHeap = new Heap((a, b) => b - a)
  this.minHeap = new Heap((a, b) => a - b)
  this.balance = () => {
    if (this.maxHeap.size > this.minHeap.size + 1) {
      this.minHeap.push(this.maxHeap.pop())
    } else if (this.minHeap.size > this.maxHeap.size) {
      this.maxHeap.push(this.minHeap.pop())
    }
  }
}

/**
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function (num) {
  if (this.maxHeap.size == 0 || this.maxHeap.peek() >= num) {
    this.maxHeap.push(num)
  } else {
    this.minHeap.push(num)
  }
  this.balance()
}

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function () {
  if (this.maxHeap.size == this.minHeap.size + 1) {
    return this.maxHeap.peek()
  } else {
    return (this.maxHeap.peek() + this.minHeap.peek()) / 2
  }
}

const obj = new MedianFinder()
obj.addNum(10)
obj.addNum(1)
obj.addNum(2)
obj.addNum(4)
console.log(obj.maxHeap)
console.log(obj.minHeap)
console.log(obj.findMedian())
