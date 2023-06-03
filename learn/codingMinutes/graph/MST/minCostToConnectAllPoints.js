// https://leetcode.com/problems/min-cost-to-connect-all-points/

class Heap {
  constructor({ comparator } = {}) {
    this.heap = []
    this.size = 0
    this.comparator = comparator || function (a, b) { return b - a }
  }

  push(data) {
    this.heap.push(data)
    this.size = this.heap.length
    this.percolateUp(this.size - 1)
  }

  peek () {
    if (this.size > 0) {
      this.heap[0]
    }
    return null
  }
  
  pop () {
    if (this.size > 0) {
      let data = this.heap[0]
      this.heap[0] = this.heap[this.heap.length - 1]
      this.heap.pop()
      this.size = this.heap.length
      this.percolateDown(0)
      return data
    }
    return null
  }

  percolateUp(index) {
    let parent = Math.floor((index - 1) / 2)
    if (parent >= 0 && this.comparator(this.heap[parent], this.heap[index]) > 0) {
      let temp = this.heap[index]
      this.heap[index] = this.heap[parent]
      this.heap[parent] = temp
      this.percolateUp(parent)
    }
  }

  percolateDown(index) {
    console.log('this.percolateDown', index)
    let parent = index
    let leftChild = (2 * index) + 1
    let rightChild = (2 * index) + 2

    if (leftChild < this.heap.length && this.comparator(this.heap[parent], this.heap[leftChild]) > 0) {
      parent = leftChild
    }
    if (rightChild < this.heap.length && this.comparator(this.heap[parent], this.heap[rightChild]) > 0) {
      parent = rightChild
    }

    // check we should percolate down
    console.log(leftChild, rightChild, index, parent)
    if (index != parent) {
      console.log('percolating', index, parent)
      let temp = this.heap[index]
      this.heap[index] = this.heap[parent]
      this.heap[parent] = temp
      this.percolateDown(parent)
    }
  }
}

/**
 * @param {number[][]} points
 * @return {number}
 */
var minCostConnectPoints = function(points) {
  let v = points.length
  const g = Array(v).fill(0).map(() => Array().fill([]))

  for (let i = 0; i < v - 1; i++) {
    for (let j = i + 1; j < v; j++) {
      // calculate manhattan distance
      
      let distance = Math.abs(points[i][0] - points[j][0]) + Math.abs(points[i][1] - points[j][1])
      console.log(points[i], points[j], distance)
      g[i].push([j, distance])
      g[j].push([i, distance])
    }
  }

  const h = new Heap({
    comparator: (a, b) => {
      // min heap
      return a[1] - b[1]
    }
  })

  // startVertex, weight
  h.push([0, 0])
  let ans = 0
  let visited = {}
  while (h.size > 0) {
    // console.log('-------')
    // // console.log(h)
    // // console.log(h.size)
    console.log(h)
    let curr = h.pop()
    console.log("data:", curr)
    // // console.log(h)
    // // console.log(h.size)
    // console.log('-------')

    let to = curr[0]
    let weight = curr[1]

    if (visited[to]) {
      continue
    }

    visited[to] = true
    ans = ans + weight

    for (let n of g[to]) {
      let n_to = n[0]
      if (!visited[n_to]) {
        h.push(n)
      }
    }
    console.log(visited, ans)
  }
  return ans
};



const main = () => {
  let points = [[0,0],[2,2],[3,10],[5,2],[7,0]]
  console.log('the minimum cost of connecting the points are ', minCostConnectPoints(points))

  // points = [[3,12],[-2,5],[-4,1]]
  // console.log('the minimum cost of connecting the points are ', minCostConnectPoints(points))

  // points = [[0,0],[1,1],[1,0],[-1,1]]
  // console.log('the minimum cost of connecting the points are ', minCostConnectPoints(points))
}

main()