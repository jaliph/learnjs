// https://leetcode.com/problems/car-pooling/description/

class Heap {
  constructor() {
    this.heap = []
    this.size = 0
    this.comparator = (a, b) => a[2] - b[2]
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
 * @param {number[][]} trips
 * @param {number} capacity
 * @return {boolean}
 */
var carPooling = function(trips, capacity) {
  const sortedTrips = trips.sort((a, b) => {
    if (a[1] > b[1]) {
      return 1
    } else if (a[1] < b[1]) {
      return -1
    } else {
      if (a[2] > b[2]) {
        return 1
      } else {
        return -1
      }
    }
  }) 

  const h = new Heap()
  let overallCap = capacity
  for (let i = 0; i < sortedTrips.length; i++) {
    let [cap, from, to] = sortedTrips[i]
    while (h.size > 0 && h.peek()[2] <= from) {
      overallCap += h.pop()[0]
    }
    
    h.push(sortedTrips[i])
    overallCap -= cap
    if (overallCap < 0) return false
  }

  return true
}

const main = () => {
  trips = [[2,1,5],[3,3,7]], capacity = 4
  console.log('if pick and drop is possible .. ', carPooling(trips, capacity))

  trips = [[2,1,5],[3,3,7]], capacity = 5
  console.log('if pick and drop is possible .. ', carPooling(trips, capacity))

  trips = [[9,3,4],[9,1,7],[4,2,4],[7,4,5]], capacity = 23
  console.log('if pick and drop is possible .. ', carPooling(trips, capacity))
}

main()


// /**
// * @param {number[][]} trips
// * @param {number} capacity
// * @return {boolean}
// */
// var carPooling = function(trips, capacity) {
//  let timeline = {}

//  let currentCapacity = 0
//  for (let trip of trips) {
//    let [cap, from, to] = trip
//    timeline[from] = (timeline[from] || 0 ) + (cap)
//    timeline[to] = (timeline[to] || 0 ) + (-cap)
//  }

//  const newTimeLine = Object.keys(timeline).sort().reduce(
//    (obj, key) => { 
//      obj[key] = timeline[key]; 
//      return obj;
//    }, 
//    {}
//  );
 
//  for (let t in newTimeLine) {
//    let cap = newTimeLine[t]
//    currentCapacity += cap
//    if (currentCapacity > capacity) {
//      return false
//    }
//  }

//  return true
// };