// https://leetcode.com/problems/sliding-window-median/

class Heap {
  constructor (comp) {
    this.heap = []
    this.size = 0
    this.comparator = comp || function (a, b) { return a - b }
  }

  pop () {
    if (this.size) {
      const data = this.heap[0]
      this.swap(0, this.heap.length - 1)
      this.heap.pop()
      this.size--
      this._percolateDown(0)
      return data
    }
  }

  peek () {
    if (this.size) {
      return this.heap[0]
    }
  }

  push (data) {
    this.heap.push(data)
    this.size++
    this._percolateUp(this.heap.length - 1)
  }

  _percolateDown (index) {
    const leftChild = (2 * index) + 1
    const rightChild = (2 * index) + 2
    const parent = index
    if (leftChild < this.heap.length && this.comparator(this.heap[index], this.heap[leftChild]) > 0) {
      index = leftChild
    }
    if (rightChild < this.heap.length && this.comparator(this.heap[index], this.heap[rightChild]) > 0) {
      index = rightChild
    }

    if (parent != index) {
      this.swap(parent, index)
      this._percolateDown(index)
    }
  }

  _percolateUp (index) {
    const parent = Math.floor((index - 1) / 2)
    if (parent >= 0 && this.comparator(this.heap[parent], this.heap[index]) > 0) {
      this.swap(parent, index)
      this._percolateUp(parent)
    }
  }

  swap (i, j) {
    const temp = this.heap[i]
    this.heap[i] = this.heap[j]
    this.heap[j] = temp
  }
}

/**
 * @param {number[]} nums
* @param {number} k
* @return {number[]}
*/
const medianSlidingWindow = function (nums, k) {
  const maxHeap = new Heap((a, b) => b - a)
  const minHeap = new Heap((a, b) => a - b)
  const isEven = k % 2 === 0
  const result = []

  for (let i = 0; i < k; i++) {
    maxHeap.push(nums[i])
  }

  for (let i = 0; i < Math.floor(k / 2); i++) {
    minHeap.push(maxHeap.pop())
  }

  const outNumMap = new Map()
  const outgoingNum = {}
  let balance = 0
  let i = k
  while (true) {
    if (isEven) { result.push((parseFloat(maxHeap.peek()) + parseFloat(minHeap.peek())) * 0.5) } else { result.push(parseFloat(maxHeap.peek())) }

    if (i >= nums.length) {
      break
    }

    const outNum = nums[i - k]
    const inNum = nums[i]
    i++

    if (maxHeap.peek() >= outNum) {
      balance--
    } else {
      balance++
    }

    outNumMap.set(outNum, (outNumMap.get(outNum) || 0) + 1)

    if (maxHeap.size > 0 && inNum <= maxHeap.peek()) {
      balance++
      maxHeap.push(inNum)
    } else {
      balance--
      minHeap.push(inNum)
    }

    // rebalance based on the balance variable
    if (balance < 0) {
      maxHeap.push(minHeap.pop())
    } else if (balance > 0) {
      minHeap.push(maxHeap.pop())
    }

    // reset
    balance = 0
    // remove top positions
    while (outNumMap.has(maxHeap.peek()) && outNumMap.get(maxHeap.peek()) > 0) {
      const removeData = maxHeap.pop()
      outNumMap.set(removeData, outNumMap.get(removeData) - 1)
    }

    while (minHeap.size > 0 && outNumMap.has(minHeap.peek()) && outNumMap.get(minHeap.peek()) > 0) {
      const removeData = minHeap.pop()
      outNumMap.set(removeData, outNumMap.get(removeData) - 1)
    }
  }

  return result
}

const main = () => {
  nums = [1, 3, -1, -3, 5, 3, 6, 7], k = 3
  console.log('sliding window median are ', medianSlidingWindow(nums, k))

  // nums = [1,2,3,4,2,3,1,4,2], k = 3
  // console.log('sliding window median are ', medianSlidingWindow(nums, k))
}

main()
