// https://leetcode.com/problems/path-with-minimum-effort/

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
 * @param {number[][]} heights
 * @return {number}
 */
var minimumEffortPath = function(heights) {
  const r = heights.length
  const c = heights[0].length

  const visited = Array(r).fill().map(() => Array(c).fill(false))
  const h = new Heap((a, b) => a[0] - b[0])
  h.push([0, 0, 0])

  const paths = [[1, 0], [0, 1], [-1, 0], [0, -1]]

  while (h.size) {
    let [efforts, i, j] = h.pop()

    if (visited[i][j]) {
      continue
    }

    visited[i][j] = true

    if (i === r - 1 && j === c - 1) {
      return efforts
    }

    for (let p of paths) {
      let [ni, nj] = [i + p[0], j + p[1]]
      if (ni >= 0 && nj >= 0 && ni < r && nj < c && !visited[ni][nj]) {
        let newEffort = Math.max(efforts, Math.abs(heights[i][j] - heights[ni][nj]))
        h.push([newEffort, ni, nj])
      }
    }
  }
}


/**
 * @param {number[][]} heights
 * @return {number}
 */
var minimumEffortPathDikstra = function(heights) {
  const r = heights.length
  const c = heights[0].length
  
  // Dijkstra
  const dist = Array(r).fill().map(() => Array(c).fill(Infinity))
  const h = new Heap((a, b) => a[0] - b[0])
  dist[0][0] = 0
  h.push([0, 0, 0])
  let paths = [[1, 0], [0, 1], [-1, 0], [0, -1]]

  while (h.size) {
    let [effort, i, j] = h.pop()

    if (i === r - 1 && j === c - 1) {
      return effort
    }

    for (let p of paths) {
      let [ni, nj] = [i + p[0], j + p[1]]
      
      if (ni >= 0 && nj >= 0 && ni < r && nj < c) {
        let newEffort = Math.max(effort, Math.abs(heights[i][j] - heights[ni][nj]))
        if (newEffort < dist[ni][nj]) {
          dist[ni][nj] = newEffort
          h.push([newEffort, ni, nj])
        }
      }
    }
  }
}

/**
 * Brute - DFS
 * @param {number[][]} heights
 * @return {number}
 */
var minimumEffortPathBrute = function(heights) {
  let r = heights.length
  let c = heights[0].length

  let visited = Array(r).fill().map(() => Array(c).fill(false))

  let minEfforts = Infinity
  const DFS = (i, j, efforts, prev) => {
    if (i === r - 1 && j === c - 1) {
      minEfforts = Math.min(minEfforts, Math.max(efforts, Math.abs(prev - heights[i][j])))
    }

    if (i >= r || j >= c || i < 0 || j < 0) {
      return Infinity
    }

    if (visited[i][j]) {
      return Infinity
    }

    visited[i][j] = true
    DFS(i + 1, j, Math.max(efforts, Math.abs(heights[i][j] - prev)), heights[i][j])
    DFS(i, j + 1, Math.max(efforts, Math.abs(heights[i][j] - prev)), heights[i][j])
    DFS(i - 1, j, Math.max(efforts, Math.abs(heights[i][j] - prev)), heights[i][j])
    DFS(i, j - 1, Math.max(efforts, Math.abs(heights[i][j] - prev)), heights[i][j])
    visited[i][j] = false
    return
  }

  DFS(0, 0, 0, heights[0][0])
  return minEfforts
};

const main = () => {
  heights = [[1,2,2],[3,8,2],[5,3,5]]
  console.log('min efforts to reach dest is ', minimumEffortPath(heights))

  heights = [[1,2,1,1,1],[1,2,1,2,1],[1,2,1,2,1],[1,2,1,2,1],[1,1,1,2,1]]
  console.log('min efforts to reach dest is ', minimumEffortPath(heights))

  heights = [[1,2,3],[3,8,4],[5,3,5]]
  console.log('min efforts to reach dest is ', minimumEffortPath(heights))
  
  heights = [[4,3,4,10,5,5,9,2],[10,8,2,10,9,7,5,6],[5,8,10,10,10,7,4,2],[5,1,3,1,1,3,1,9],[6,4,10,6,10,9,4,6]]
  console.log('min efforts to reach dest is ', minimumEffortPath(heights))

}

main()



// Read: https://leetcode.com/problems/path-with-minimum-effort/solutions/4049557/97-67-optimal-dijkstra-a/?envType=daily-question&envId=2023-09-16