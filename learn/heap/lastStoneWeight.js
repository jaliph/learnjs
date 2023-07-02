// https://leetcode.com/problems/last-stone-weight/

class Heap {
  constructor() {
    this.heap = []
    this.size = 0
    this.comparator = (a, b) => b - a
  }

  swap (i, j) {
    let temp = this.heap[i]
    this.heap[i] = this.heap[j]
    this.heap[j] = temp
  }

  peek() {
    return this.heap[0]
  }

  pop() {
    if (this.size > 0) {
      let data = this.heap[0]
      this.heap[0] = this.heap[this.size - 1]
      this.heap.pop()
      this.percolateDown(0)
      this.size--
      return data
    }
  }

  push(data) {
    this.heap.push(data)
    this.size++
    this.percolateUp(this.heap.length - 1)
  }

  percolateDown (i) {
    let leftChild = (i * 2) + 1
    let rightChild = (i * 2) + 2

    let parent = i
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
    let parent = Math.floor((i - 1) / 2)
    if (parent >= 0 && this.comparator(this.heap[parent], this.heap[i]) > 0) {
      this.swap(parent, i)
      this.percolateUp(parent)
    }
  }
}

/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function(stones) {
  if (stones.length == 1) {
    return stones[0]
  }
  const h = new Heap()
  for (let s of stones) {
    h.push(s)
  }
  while (h.size > 1) {
    let s1 = h.pop()
    let s2 = h.pop()
    if (s1 != s2) {
      h.push(Math.abs(s1 - s2))
    }
  } 
  if (h.size) {
    return h.pop()
  } else {
    return 0
  }
};

const main = () => {
  stones = [2,7,4,1,8,1]
  console.log('remaining stones is ', lastStoneWeight(stones))
}

main()