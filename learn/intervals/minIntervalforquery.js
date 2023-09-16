class Heap {
  constructor(comp) {
    this.heap = []
    this.size = 0
    this.comp = comp || ((a, b) => a - b)
  }

  pop() {
    if (this.heap.length > 0) {
      let data = this.heap[0]
      this.__swap(0, this.heap.length - 1)
      this.heap.pop()
      this.__percolateDown(0)
      this.size--
      return data
    } else {
      return false
    }
  }

  peek() {
    return this.heap[0]
  }

  push(data) {
    this.heap.push(data)
    this.__percolateUp(this.heap.length - 1)
    this.size++
  }

  __swap(i, j) {
    [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]]
  }

  __percolateUp(i) {
    let parent = Math.floor((i - 1) / 2)
    if (parent >= 0) {
      if (this.comp(this.heap[parent], this.heap[i]) > 0) {
        this.__swap(i, parent)
        this.__percolateUp(parent)
      }
    }
  }

  __percolateDown(i) {
    let leftChild = (2 * i) + 1
    let rightChild = (2 * i) + 2

    let parent = i
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
 * https://leetcode.com/problems/minimum-interval-to-include-each-query/
 * @param {number[][]} intervals
 * @param {number[]} queries
 * @return {number[]}
 */
var minInterval = function(intervals, queries) {
  intervals.sort((a, b) => a[0] - b[0])

  origQ = [...queries]
  queries.sort((a, b) => a - b)

  let i = 0
  let res = new Map()
  const h = new Heap((a, b) => a[0] - b[0])
  for (let q of queries) {
    while (i < intervals.length && intervals[i][0] <= q) {
      h.push([intervals[i][1] - intervals[i][0] + 1, intervals[i][1]])
      i++
    }

    while (h.size && h.peek()[1] < q) {
      h.pop()
    }
    console.log(h)
    res.set(q, (h.size ? h.peek()[0] : -1))
  }

  return origQ.map((q) => res.get(q))
};

const main = () => {
  intervals = [[1,4],[2,4],[3,6],[4,4]], queries = [2,3,4,5]
  console.log('min interval for a query is ', minInterval(intervals, queries))
}

main()