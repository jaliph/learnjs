// https://leetcode.com/problems/smallest-range-covering-elements-from-k-lists/
/**
 * @param {number[][]} nums
 * @return {number[]}
 */
const smallestRange = function (nums) {
  const k = nums.length

  let rangeMin = -Infinity
  let rangeMax = Infinity

  let max = -Infinity
  const h = new Heap()

  for (let i = 0; i < k; i++) {
    h.push([nums[i][0], i, 0])
    max = Math.max(max, nums[i][0])
  }

  while (h.size == k) {
    const [min, list, pos] = h.pop()
    const range = max - min + 1
    if (range < (rangeMax - rangeMin + 1)) {
      rangeMax = max
      rangeMin = min
    }
    const newPos = pos + 1
    if (newPos < nums[list].length) {
      h.push([nums[list][newPos], list, newPos])
      max = Math.max(max, nums[list][newPos])
    }
  }

  return [rangeMin, rangeMax]
}

class Heap {
  constructor () {
    this.heap = []
    this.size = 0
    this.comparator = (a, b) => a[0] - b[0]
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
  nums = [[4, 10, 15, 24, 26], [0, 9, 12, 20], [5, 18, 22, 30]]
  console.log('the min range for the k list is', smallestRange(nums))

  nums = [[1, 2, 3], [1, 2, 3], [1, 2, 3]]
  console.log('the min range for the k list is', smallestRange(nums))

  nums = [[10, 10], [11, 11]]
  console.log('the min range for the k list is', smallestRange(nums))
}

main()
