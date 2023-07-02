// https://leetcode.com/problems/maximum-performance-of-a-team/

class Heap {
  constructor(comp) {
    this.heap = []
    this.size = 0
    this.comparator = comp || function(a, b) { return b[0] - a[0] }
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
 * @param {number} n
 * @param {number[]} speed
 * @param {number[]} efficiency
 * @param {number} k
 * @return {number}
 */
var maxPerformance = function(n, speed, efficiency, k) {
  let engineers = speed.map((val, i) => [val, efficiency[i]])

  engineers.sort((a, b) => b[1] - a[1])

  const h = new Heap((a, b) => a[0] - b[0])
  let speedSum = BigInt(0), result = BigInt(0)
  for (let i = 0; i < n; i++) {
    speedSum += BigInt(engineers[i][0])
    min = engineers[i][1]
    h.push(engineers[i][0])

    if (h.size > k) {
      let minSpeed = h.pop()
      speedSum -= BigInt(minSpeed)
    }

    let currResult = BigInt(speedSum) * BigInt(min)
    // console.log(currResult, result)
  
    if (currResult > result) {
      result = currResult
    }
    
  }

  return result % BigInt(10 ** 9 + 7)
};


const main = () => {
  // n = 6, speed = [2,10,3,1,5,8], efficiency = [5,4,3,9,7,2], k = 2
  // console.log('The team with max performance is ', maxPerformance(n, speed, efficiency, k))

  n = 3, speed = [2,8,2], efficiency = [2,7,1], k = 2
  console.log('The team with max performance is ', maxPerformance(n, speed, efficiency, k))
}

main()