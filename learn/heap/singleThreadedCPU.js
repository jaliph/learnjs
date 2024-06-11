// https://leetcode.com/problems/single-threaded-cpu/
class Heap {
  constructor (comp) {
    this.heap = []
    this.size = 0
    this.comparator = comp || function (a, b) { return a[0] - b[0] }
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
 * @param {number[][]} tasks
 * @return {number[]}
 */
const getOrder = function (tasks) {
  const taskQueue = new Heap((a, b) => a[0] - b[0])
  const enQueue = new Heap((a, b) => {
    if (a[0] === b[0]) {
      return a[1] - b[1]
    } else {
      return a[0] - b[0]
    }
  })

  for (let i = 0; i < tasks.length; i++) {
    taskQueue.push([...tasks[i], i])
  }

  const result = []
  let time = taskQueue.peek()[0]
  while (enQueue.size || taskQueue.size) {
    // get from tasks and start their entry for processing
    while (taskQueue.size && taskQueue.peek()[0] <= time) {
      task = taskQueue.pop()
      enQueue.push([task[1], task[2]])
    }

    if (enQueue.size === 0) {
      time = taskQueue.peek()[0]
    } else {
      const doneTask = enQueue.pop()
      time += doneTask[0]
      result.push(doneTask[1])
    }
  }

  return result

  // for (let i = 0; i < tasks.length; i++) {
  //   tasks[i].push(i)
  // }

  // let result = []
  // tasks.sort((a, b) => {
  //   if (a[0] === b[0]) {
  //     return a[1] - b[1]
  //   } else {
  //     return a[2] - b[2]
  //   }
  // })

  // const enQueue = new Heap((a , b) => {
  //   if (a[0] === b[0]) {
  //     return a[1] - b[1]
  //   } else {
  //     return a[0] - b[0]
  //   }
  // })
  // let i = 0, time = tasks[0][0]
  // while(enQueue.size || i < tasks.length) {
  //   while (i < tasks.length && tasks[i][0] <= time) {
  //     enQueue.push([tasks[i][1], tasks[i][2]])
  //     i++
  //   }
  //   if (enQueue.size == 0) {
  //     time = tasks[i][0]
  //   } else {
  //     let [doneTime, index] = enQueue.pop()
  //     time += doneTime
  //     result.push(index)
  //   }
  // }
  // return result
}

const main = () => {
  tasks = [[1, 2], [2, 4], [3, 2], [4, 1]]
  console.log('the order in which the tasks can be executed are ', getOrder(tasks))

  // tasks = [[7,10],[7,12],[7,5],[7,4],[7,2]]
  // console.log('the order in which the tasks can be executed are ', getOrder(tasks))

  tasks = [[19, 13], [16, 9], [21, 10], [32, 25], [37, 4], [49, 24], [2, 15], [38, 41], [37, 34], [33, 6], [45, 4], [18, 18], [46, 39], [12, 24]]
  console.log('the order in which the tasks can be executed are ', getOrder(tasks))
}

main()
