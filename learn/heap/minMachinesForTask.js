// https://www.educative.io/module/page/xGD3yRS9rp2LK46J6/10370001/6171773541548032/5451938478161920

class Heap {
  constructor (comp) {
    this.heap = []
    this.size = 0
    this.comparator = comp || function (a, b) { return a - b }
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

function tasks (tasksList) {
  // your code will replace this placeholder return statement
  let machineCount = 0
  const taskHeap = new Heap((a, b) => a[0] - b[0])
  const machineHeap = new Heap((a, b) => a[0] - b[0])
  for (const t of tasksList) {
    taskHeap.push([t[0], t[1]])
  }

  while (taskHeap.size) {
    const task = taskHeap.pop()

    if (machineHeap.size != 0 && machineHeap.peek()[0] <= task[0]) {
      machineUse = machineHeap.pop()
      machineHeap.push([task[1], machineUse[1]])
    } else {
      machineCount++
      machineHeap.push([task[1], machineCount])
    }
  }
  return machineCount
}

const main = () => {
  tasksList = [
    [1, 7],
    [8, 13],
    [5, 6],
    [10, 14],
    [6, 7]
  ]
  console.log('Min number of machines to complete the tasks are', tasks(tasksList))

  tasksList = [[0, 30], [5, 10], [15, 20]]
  console.log('Min number of machines to complete the tasks are', tasks(tasksList))
}

main()
