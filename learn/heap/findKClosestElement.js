// https://leetcode.com/problems/find-k-closest-elements/

/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
const findClosestElements = function (arr, k, x) {
  const h = new Heap()
  for (const n of arr) {
    h.push([Math.abs(n - x), n])
    // console.log(h)
    if (h.size > k) {
      const p1 = h.pop()
      if (p1[0] == h.peek()[0]) {
        h.pop()
        h.push(p1)
      }
    }
  }
  // console.log(h)
  const results = []
  while (h.size) {
    const [diff, num] = h.pop()
    results.push(num)
  }
  return results.sort()
}

class Heap {
  constructor () {
    this.heap = []
    this.size = 0
    this.comparator = (a, b) => b[0] - a[0]
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

const main = () => {
  arr = [1, 2, 3, 4, 5], k = 4, x = 3
  console.log('k closest elements near x is ', findClosestElements(arr, k, x))

  arr = [1, 2, 3, 4, 5], k = 4, x = -1
  console.log('k closest elements near x is ', findClosestElements(arr, k, x))

  arr = [12, 16, 22, 30, 35, 39, 42, 45, 48, 50, 53, 55, 56], k = 4, x = 35
  console.log('k closest elements near x is ', findClosestElements(arr, k, x))
}

main()
