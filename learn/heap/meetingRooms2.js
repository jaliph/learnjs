// https://www.lintcode.com/problem/919/

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

const minMeetingRooms = (intervals) => {
  const intervalHeap = new Heap((a, b) => a[0] - b[0])
  const meetingRoomHeap = new Heap((a, b) => a[0] - b[0])

  for (const i of intervals) {
    intervalHeap.push([i[0], i[1]])
  }

  let meetingRoomNumber = 0
  while (intervalHeap.size) {
    const interval = intervalHeap.pop()

    if (meetingRoomHeap.size != 0 && meetingRoomHeap.peek()[0] <= interval[0]) {
      const currentMeetingRoom = meetingRoomHeap.pop()
      meetingRoomHeap.push([interval[1], currentMeetingRoom[1]])
    } else {
      meetingRoomNumber++
      meetingRoomHeap.push([interval[1], meetingRoomNumber])
    }
  }

  return meetingRoomNumber
}

const main = () => {
  intervals = [[0, 30], [5, 10], [15, 20]]
  console.log('minimum meeting rooms required is ', minMeetingRooms(intervals))
}

main()
