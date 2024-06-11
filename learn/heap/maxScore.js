// https://leetcode.com/problems/maximum-subsequence-score/
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
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number}
 */
const maxScore = function (nums1, nums2, k) {
  const pairs = nums1.map((val, i) => [val, nums2[i]])

  pairs.sort((a, b) => b[1] - a[1])
  const h = new Heap((a, b) => a - b)
  // console.log(pairs)

  let sum = 0; let result = -Infinity
  for (let i = 0; i < pairs.length; i++) {
    sum += pairs[i][0]
    min = pairs[i][1]
    h.push(pairs[i][0])

    // console.log(sum, min, h)

    if (h.size > k) {
      const minVal = h.pop()
      sum -= minVal
    }
    if (h.size == k) {
      // console.log(sum, min)
      result = Math.max(result, sum * min)
    }
  }

  return result
}

const main = () => {
  nums1 = [1, 3, 3, 2], nums2 = [2, 1, 3, 4], k = 3
  console.log('Max score is ', maxScore(nums1, nums2, k))
}

main()
