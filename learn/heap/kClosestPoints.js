// https://leetcode.com/problems/k-closest-points-to-origin/

class Heap {
  constructor (comp) {
    this.heap = []
    this.size = 0
    this.comparator = comp || function (a, b) { return b[0] - a[0] }
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
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
const kClosest = function (points, k) {
  const h = new Heap((a, b) => b[0] - a[0])

  for (const point of points) {
    const dist2Origin = Math.sqrt((point[0] * point[0]) + (point[1] * point[1]))
    h.push([dist2Origin, point])

    if (h.size > k) {
      h.pop()
    }
  }

  const results = []
  while (h.size) {
    results.push(h.pop(0)[1])
  }

  return results
}

const main = () => {
  points = [[1, 3], [-2, 2]], k = 1
  console.log(`The ${k} closest points to the origin are `, kClosest(points, k))

  points = [[3, 3], [5, -1], [-2, 4]], k = 2
  console.log(`The ${k} closest points to the origin are `, kClosest(points, k))
}

main()
