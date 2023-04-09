class maxHeap {
  constructor (size, comparator) {
    this.heap = []
    this.elements = size || 0
    this.comparator = comparator || function (a, b) {
      return a - b``
    }
  }

  insert (val) {
    this.heap.push(val)
    this.elements++
    this.__percolateUp(this.heap.length - 1)
  }

  peek () {
    if (this.elements > 0) {
      return this.heap[0]
    }
  }

  removeMax () {
    if (this.elements > 0) {
      const max = this.heap[0]
      this.heap[0] = this.heap[this.heap.length - 1]
      this.elements--
      this.heap.pop()
      this.__maxHeapify(0)
      return max
    } else {
      return null
    }
  }

  __percolateUp (index) {
    const parent = Math.floor((index - 1) / 2)
    if (index <= 0) {

    } else if (this.heap[parent] < this.heap[index]) {
      [this.heap[parent], this.heap[index]] = [this.heap[index], this.heap[parent]]
      this.__percolateUp(parent)
    }
  }

  __maxHeapify (index) {
    const leftChild = (index * 2) + 1
    const rightChild = (index * 2) + 2
    let largest = index

    if (leftChild < this.heap.length && this.heap[largest] < this.heap[leftChild]) {
      largest = leftChild
    }

    if (rightChild < this.heap.length && this.heap[largest] < this.heap[rightChild]) {
      largest = rightChild
    }

    if (index != largest) {
      [this.heap[index], this.heap[largest]] = [this.heap[largest], this.heap[index]]
      this.__maxHeapify(largest)
    }
  }
}

// var heap = new maxHeap()
// heap.insert(12)
// heap.insert(10)
// heap.insert(-10)
// heap.insert(100)

// console.log(heap.peek())

module.exports = maxHeap
