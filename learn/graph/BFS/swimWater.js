// https://leetcode.com/problems/swim-in-rising-water/

/**
 * @param {number[][]} grid
 * @return {number}
 */
var swimInWater = function(grid) {
  let r = grid.length
  let c = grid[0].length

  let h = new Heap((a, b) => a[0] - b[0])
  let visited = {}

  h.push([grid[0][0], 0, 0])

  let paths = [[1, 0], [-1, 0], [0, 1], [0, -1]]
  let ans = Infinity
  while (h.size) {
    let [value, x, y] = h.pop()
    // console.log([value, x, y])
    visited[x + '' + y] = true

    for (let p of paths) {
      let n_x = x + p[0]
      let n_y = y + p[1]

      if (n_x >= 0 && n_x < r && n_y >= 0 && n_y < c) {
        if ((n_x == r - 1) && (n_y == c - 1)) {
          // console.log(ans, value, grid[n_x][n_y])
          ans = Math.min(ans, Math.max(value, grid[n_x][n_y]))
        }
        if (!visited[n_x + '' + n_y]) {
          visited[n_x + '' + n_y] = true
          h.push([Math.max(value, grid[n_x][n_y]), n_x, n_y])
        }
      }
    }
  }
  return ans
};

class Heap {
  constructor (comparator) {
    this.heap = []
    this.size = 0
    this.comparator = comparator || function (a, b) { return a - b }
  }

  pop() {
    if (this.size > 0) {
      let data = this.heap[0]
      this.heap[0] = this.heap[this.size - 1]
      this.heap.pop()
      this.heapifyDown(0)
      this.size--
      return data
    }
  }

  has (data) {
    return this.getIndex(data) >= 0
  }

  getIndex (data) {
    return this.heap.findIndex((o) => {
      if (o.length != data.length) return false
      for (let i = 0; i < o.length; i++) {
        if (o[i] != data[i]) {
          return false;
        }
      }
      return true
    })
  }

  remove (data) {
    let index = this.getIndex(data)
    if (index >= 0) {
      let data = this.heap[index]
      this.heap[index] = this.heap[this.heap.length - 1]
      this.heap.pop()
      this.size--
      this.heapifyDown(index)
      return data
    }
    return null
  }

  push(data) {
    this.heap.push(data)
    this.size++
    this.heapifyUp(this.size - 1)
  }

  swap(i, j) {
    let temp = this.heap[i]
    this.heap[i] = this.heap[j]
    this.heap[j] = temp
  }

  heapifyDown (i) {
    let leftChild = (2 * i) + 1
    let rightChild = (2 * i) + 2
    let parent = i
    
    if (leftChild < this.heap.length && this.comparator(this.heap[i], this.heap[leftChild]) > 0) {
      i = leftChild
    }

    if (rightChild < this.heap.length && this.comparator(this.heap[i], this.heap[rightChild]) > 0) {
      i = rightChild
    }

    if (i != parent) {
      this.swap(i, parent)
      this.heapifyDown(i)
    }
  }

  heapifyUp (i) {
    let parent = Math.floor((i - 1) / 2)
    if (parent >= 0 && this.comparator(this.heap[parent], this.heap[i]) > 0) {
      this.swap(i, parent)
      this.heapifyUp(parent)
    }
  }
}

const main = () => {
  grid = [[0,1,2,3,4],[24,23,22,21,5],[12,13,14,15,16],[11,17,18,19,20],[10,9,8,7,6]]
  console.log('min time to swim to end is ', swimInWater(grid))

  grid = [[0,2],[1,3]]
  console.log('min time to swim to end is ', swimInWater(grid))
}

main()