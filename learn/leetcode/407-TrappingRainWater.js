// https://leetcode.com/problems/trapping-rain-water-ii/


class Heap {
  constructor(array, comparator) {
    this.heap = array || []
    this.comparator = comparator || function (a, b) { return a - b }
  }

  length() {
    return this.heap.length
  }

  add(element) {
    this.heap.push(element)
    this.__percolateUp(this.heap.length - 1)
  }

  peek() {
    return this.heap[0]
  }

  pop() {
    if(this.heap.length === 0) {
      return null
    } else {
      // console.log(this.heap)
      let element = this.heap[0]
      this.heap[0] = this.heap[this.heap.length - 1]
      this.heap.pop()
      this.__percolateDown(0)
      // console.log(this.heap)
      return element
    }    
  }

  __percolateUp(index) {
    let parent = Math.floor((index - 1) / 2)
    if (index <= 0) {
      return
    } else if (this.comparator(this.heap[parent], this.heap[index]) > 0) {
      this.__swap(parent, index)
      this.__percolateUp(parent)
    }
  }

  __percolateDown(index) {
    let leftChild = (index * 2) + 1
    let rightChild = (index * 2) + 2

    let largest = index
    if (leftChild < this.heap.length && this.comparator(this.heap[largest], this.heap[leftChild]) > 0 ) {
      largest = leftChild
    }

    if (rightChild < this.heap.length && this.comparator(this.heap[largest], this.heap[rightChild],) > 0 ) {
      largest = rightChild
    }
    if (largest !== index) {
      this.__swap(largest, index)
      this.__percolateDown(largest)
    }
  }

  __swap (i, j) {
    let temp = this.heap[i]
    this.heap[i] = this.heap[j]
    this.heap[j] = temp
  }
}

/**
 * @param {number[][]} heightMap
 * @return {number}
 */
// const Heap = require("collections/heap");
var trapRainWater = function(heightMap) {
  const row = heightMap.length
  const col = heightMap[1].length

  // It must be 2D to store water
  if (row == 1 || col == 1) return 0 

  const visited = new Array(row).fill(0).map(() => Array(col).fill(false))

  const minHeap = new Heap([], (a, b) => a[0] - b[0])

  for (let i = 0; i < row; i++) {
    // console.log('Came in')
    minHeap.add([heightMap[i][0], i, 0])
    minHeap.add([heightMap[i][col - 1], i, col - 1])
    visited[i][0] = true
    visited[i][col - 1] = true
  }
  for (let j = 1; j < col - 1; j++) {
    minHeap.add([heightMap[0][j], 0, j])
    minHeap.add([heightMap[row - 1][j], row  - 1, j])
    visited[0][j] = true
    visited[row - 1][j] = true
  }

  let water_trapped = 0

  let directions = [[1, 0], [0, 1], [-1, 0], [0, -1]]

  while(minHeap.length() > 0) {
    let curCell = minHeap.pop()
    directions.forEach(dir => {
      let i = curCell[1] + dir[0]
      let j = curCell[2] + dir[1]
      // console.log(curCell, i, j)
      // check it can be visited
      if (i > 0 && i < row - 1 && j > 0 && j < col - 1 && visited[i][j] === false) {  
        let water = Math.max(0, curCell[0] - heightMap[i][j])
        water_trapped += water
        minHeap.add([Math.max(heightMap[i][j], curCell[0]), i, j])
        visited[i][j] = true
      }
    })
  }
  return water_trapped
};


const main = () => {
  // const map = [
  //   [12,13,1,12],
  //   [13,4,13,12],
  //   [13,8,10,12],
  //   [12,13,12,12],
  //   [13,13,13,13]
  // ]
  // const map = [[1,4,3,1,3,2],[3,2,1,3,2,4],[2,3,3,2,3,1]]
  // const map = [[3,3,3,3,3],[3,2,2,2,3],[3,2,1,2,3],[3,2,2,2,3],[3,3,3,3,3]]
  const map = [[12,13,1,12],[13,4,13,12],[13,8,10,12],[12,13,12,12],[13,13,13,13]] // 14
  console.log('Rain water trapped in the map is ', trapRainWater(map))

}

main()

