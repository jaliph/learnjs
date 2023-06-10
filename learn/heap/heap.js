// if x.compareTo(y) == 1, then x > y , since y is smaller than x, you would have to move y in front of x.

// 2.compareTo(5) == 1 , Then don't move 5 in front of 2.

// if y.compareTo(x) == 1, then y > x , since y is greater than x, you would have to move y in front of x.

// 5.compareTo(2) == -1 , Move 5 in front of 2.

class maxHeap {
  constructor (array, size, comparator) {
    this.heap = array || []
    this.elements = size || 0
    this.comparator = comparator || function (a, b) {
      return b - a
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

    } else if (this.comparator(this.heap[parent], this.heap[index]) > 0) {
      [this.heap[parent], this.heap[index]] = [this.heap[index], this.heap[parent]]
      this.__percolateUp(parent)
    }
  }

  __maxHeapify (index) {
    const leftChild = (index * 2) + 1
    const rightChild = (index * 2) + 2
    let largest = index

    if (leftChild < this.heap.length && this.comparator(this.heap[largest], this.heap[leftChild]) > 0) {
      largest = leftChild
    }

    if (rightChild < this.heap.length && this.comparator(this.heap[largest], this.heap[rightChild]) > 0) {
      largest = rightChild
    }

    if (index != largest) {
      [this.heap[index], this.heap[largest]] = [this.heap[largest], this.heap[index]]
      this.__maxHeapify(largest)
    }
  }
}

const heap = new maxHeap([], null, (a, b) => b - a)
heap.insert(12)
heap.insert(10)
heap.insert(11)
heap.insert(100)

console.log(heap.removeMax())
console.log(heap.removeMax())
console.log(heap.removeMax())

module.exports = maxHeap
