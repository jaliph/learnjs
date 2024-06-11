
class Heap {
  constructor (comp) {
    this.heap = []
    this.size = 0
    this.comp = comp || function (a, b) { return a - b }
  }

  pop () {
    if (this.size > 0) {
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

  __swap (i, j) {
    [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]]
  }

  __percolateUp (i) {
    const parent = Math.floor((i - 1) / 2)
    if (parent >= 0) {
      if (this.comp(this.heap[parent], this.heap[i]) > 0) {
        this.__swap(parent, i)
        this.__percolateUp(parent)
      }
    }
  }

  __percolateDown (i) {
    const leftChild = (2 * i) + 1
    const rightChild = (2 * i) + 2

    const parent = i

    if (leftChild < this.heap.length && this.comp(this.heap[i], this.heap[leftChild]) > 0) {
      i = leftChild
    }
    if (rightChild < this.heap.length && this.comp(this.heap[i], this.heap[rightChild]) > 0) {
      i = rightChild
    }

    if (parent != i) {
      this.__swap(parent, i)
      this.__percolateDown(i)
    }
  }
}

// const h = new Heap()
// h.push(11)
// h.push(2)
// h.push(8)
// console.log(h)
// console.log(h.pop())
// console.log(h.pop())
// console.log(h)

/**
 * https://leetcode.com/problems/divide-array-in-sets-of-k-consecutive-numbers/
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
const isPossibleDivide = function (nums, k) {
  if (nums.length % k) {
    return false
  }

  const freqMap = nums.reduce((prev, curr) => {
    prev.set(curr, (prev.get(curr) || 0) + 1)
    return prev
  }, new Map())

  const h = new Heap()
  for (const k of freqMap.keys()) {
    h.push(k)
  }
  while (h.size) {
    const min = h.peek()
    for (let i = min; i < (min + k); i++) {
      if (!freqMap.has(i)) {
        return false
      }
      freqMap.set(i, freqMap.get(i) - 1)
      if (freqMap.get(i) === 0) {
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
  nums = [1, 2, 3, 3, 4, 4, 5, 6], k = 4
  console.log('Divide the Array in KConsecutive Maps ', isPossibleDivide(nums, k))
}

main()
