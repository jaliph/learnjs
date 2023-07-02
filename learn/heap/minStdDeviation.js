// https://leetcode.com/problems/minimize-deviation-in-array

class Heap {
  constructor(comp) {
    this.heap = []
    this.size = 0
    this.comparator = comp || function (a, b) { return a - b }
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
 * @return {number}
 */
var minimumDeviation = function(nums) {
  const h = new Heap((a, b) => a[0] - b[0])

  let max = -Infinity
  for (let n of nums) {
    let tmp = n
    while (n % 2 === 0) {
      n /= 2
    }
    h.push([n, Math.max(tmp, 2 * n)])
    max = Math.max(max, n)
  }
  console.log(h, max)

  let diff = Infinity
  while (h.size == nums.length) {
    console.log(h)
    let [n, nMax] = h.pop()
    console.log(diff, max, n)
    diff = Math.min(diff, max - n)
    
    
    
    if (n < nMax) {    // odd, newVal will be 2 * n..=
      h.push([n * 2, nMax])
      max = Math.max(max, n * 2)
    }
  }

  return diff
};

const main = () => {
  nums = [1,2,3,4]
  console.log('min Std Deviation is ', minimumDeviation(nums))


  nums = [4,1,5,20,3]
  console.log('min Std Deviation is ', minimumDeviation(nums))

}

main()