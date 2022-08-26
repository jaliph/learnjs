class maxHeap {
  constructor(size, comparator) {
    this.heap= []
    this.elements = size || 0
    this.comparator = comparator || function (a, b) {
      return a - b
    }
  }

  length () {
    return this.heap.length
  }

  insert(val) {
    this.heap.push(val)
    this.elements++
    this.__percolateUp(this.heap.length - 1)
    // console.log(this.heap)
  }

  peek() {
    if (this.elements > 0) {
      return this.heap[0]
    }
  }

  pop() {
    if (this.elements > 0) {
      let max = this.heap[0]
      this.heap[0] = this.heap[this.heap.length - 1]
      this.elements--
      this.heap.pop()
      this.__maxHeapify(0)
      return max
    } else {
      return null
    }
  }

  __percolateUp(index) {
    let parent = Math.floor((index - 1) / 2)
    if (index <= 0) {
      return
    // } else if (this.heap[parent] < this.heap[index]){ 
    } else if (this.comparator(this.heap[parent], this.heap[index]) < 0) {
      [this.heap[parent], this.heap[index]] = [this.heap[index], this.heap[parent]]
      this.__percolateUp(parent)
    }
  }

  __maxHeapify(index) {
    let leftChild = (index * 2) + 1
    let rightChild = (index * 2) + 2
    let largest = index

    if (leftChild < this.heap.length && this.comparator(this.heap[largest], this.heap[leftChild]) < 0) {
      largest = leftChild
    }

    if (rightChild < this.heap.length && this.comparator(this.heap[largest], this.heap[rightChild]) < 0 ) {
      largest = rightChild
    }
    
    if (index != largest) {
      [this.heap[index], this.heap[largest]] = [this.heap[largest], this.heap[index]]
      this.__maxHeapify(largest)
    }
  }
}

// var heap1 = new maxHeap()
// heap1.insert(12)
// heap1.insert(10)
// heap1.insert(-10)
// heap1.insert(100)

// console.log(heap1.peek())

// var heap2 = new maxHeap(0, (a, b) => {
//   return b - a
// })
// heap2.insert(12)
// heap2.insert(10)
// heap2.insert(100)
// heap2.insert(-10)


// console.log(heap2.peek())

module.exports = maxHeap
