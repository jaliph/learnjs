// https://leetcode.com/problems/process-tasks-using-servers/

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
 * @param {number[]} servers
 * @param {number[]} tasks
 * @return {number[]}
 */
var assignTasks = function(servers, tasks) {
  let available = new Heap((a, b) => a[0] !== b[0] ? a[0] - b[0] : a[1] - b[1])
  let unavailable = new Heap((a, b) => a[0] - b[0])

  for (let i = 0; i < servers.length; i++) {
    available.push([servers[i], i])
  }

  let results = []
  let time = 0
  for (let i = 0; i < tasks.length; i++) {
    time = Math.max(time, i)

    if (available.size === 0) {
      time = unavailable.peek()[0]
    }
    // whatever is processed.. make it available again
    while (unavailable.size && unavailable.peek()[0] <= time) {
      let [timeFree, weight, index] = unavailable.pop()
      available.push([weight, index])
    }

    // process
    let [weight, index] = available.pop()
    results.push(index)
    unavailable.push([time + tasks[i], weight, index])
  }
  return results
}


const main = () => {
  servers = [3,3,2], tasks = [1,2,3,2,1,2]
  console.log('Tasks done by servers are ', assignTasks(servers, tasks))
}

main()