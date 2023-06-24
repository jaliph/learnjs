
class Heap {
  constructor() {
    this.heap = []
    this.size = 0
    this.comparator = (a, b) => a - b
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
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
  let h = new Heap()

  for (let n of nums) {
    h.push(n)
    
    if (h.size > k) {
      console.log('before')
      console.log(h)
      h.pop()
      console.log('after')
      console.log(h)
    }
  }
  return h.peek()
};


const main = () => {
  // nums = [3,2,1,5,6,4], k = 2
  // console.log('Kth largest element is ', findKthLargest(nums, k))

  // nums = [4, 5, 8, 2], k = 3
  // console.log('Kth largest element is ', findKthLargest(nums, k))

  nums = [3,2,3,1,2,4,5,5,6], k = 4
  console.log('Kth largest element is ', findKthLargest(nums, k))
}

main()