// https://leetcode.com/problems/top-k-frequent-elements/

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

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
const topKFrequent = function (nums, k) {
  const freqMap = nums.reduce((obj, key) => {
    obj[key] = (obj[key] || 0) + 1
    return obj
  }, {})

  const h = new Heap((a, b) => a[0] - b[0])

  for (const key in freqMap) {
    h.push([freqMap[key], key])
    if (h.size > k) {
      h.pop()
    }
  }
  const result = []
  while (h.size) {
    result.push(h.pop()[1])
  }

  return result
}

const main = () => {
  nums = [1, 1, 1, 2, 2, 3], k = 2
  console.log('the frquent are', topKFrequent(nums, k))

  nums = [1], k = 1
  console.log('the frquent are', topKFrequent(nums, k))
}

main()
