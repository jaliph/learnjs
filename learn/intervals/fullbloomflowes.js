class Heap {
  constructor (comp) {
    this.heap = []
    this.size = 0
    this.comp = comp || ((a, b) => a - b)
  }

  pop () {
    if (this.heap.length > 0) {
      const data = this.heap[0]
      this.__swap(0, this.heap.length - 1)
      this.heap.pop()
      this.__percolateDown(0)
      this.size--
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
    this.__percolateUp(this.heap.length - 1)
    this.size++
  }

  __swap (i, j) {
    [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]]
  }

  __percolateUp (i) {
    const parent = Math.floor((i - 1) / 2)
    if (parent >= 0) {
      if (this.comp(this.heap[parent], this.heap[i]) > 0) {
        this.__swap(i, parent)
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
      this.__swap(i, parent)
      this.__percolateDown(i)
    }
  }
}

/**
 * @param {number[][]} flowers
 * @param {number[]} people
 * @return {number[]}
 */
const fullBloomFlowers = function (flowers, people) {
  flowers.sort((a, b) => a[0] - b[0])
  const peops = people.map((o, i) => [o, i])
  peops.sort((a, b) => a[0] - b[0])

  const res = []
  let i = 0
  const h = new Heap((a, b) => a - b)
  for (const p of peops) {
    while (i < flowers.length && flowers[i][0] <= p[0]) {
      h.push(flowers[i][1])
      i++
    }

    while (h.size && h.peek() < p[0]) {
      h.pop()
    }

    res[p[1]] = h.size
  }

  return res
}
