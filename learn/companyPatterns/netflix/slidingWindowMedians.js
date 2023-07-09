const Heap = require('../heap/heap')

const medianSlidingWindow = (nums, k) => {
  const medians = []
  const maxHeap = new Heap(undefined, (a, b) => a - b)
  const minHeap = new Heap(undefined, (a, b) => b - a)

  const map = new Map()

  let i = 0

  while (i < k) {
    maxHeap.insert(nums[i])
    i++
  }

  for (let j = 0; j < Math.floor(k / 2); j++) {
    minHeap.insert(maxHeap.peek())
    maxHeap.removeMax()
  }

  while (true) {
    if (k & 1 === 1) {
      medians.push(maxHeap.peek())
    } else {
      medians.push((maxHeap.peek() + minHeap.peek()) * 0.5)
    }

    if (i >= nums.length) break

    let balance = 0
    const inNum = nums[i]
    const outNum = nums[i - k]

    i++

    // Set Initial Balance

    if (outNum <= maxHeap.peek()) {
      balance = balance - 1
    } else {
      balance = balance + 1
    }

    if (map.has(outNum) && map.get(outNum) > 0) {
      map.set(outNum, map.get(outNum) + 1)
    } else {
      map.set(outNum, 1)
    }
    if (maxHeap.elements > 0 || maxHeap.peek() >= inNum) {
      balance++
      maxHeap.insert(inNum)
    } else {
      balance--
      minHeap.insert(inNum)
    }

    if (balance < 0) {
      minHeap.insert(maxHeap.peek())
      maxHeap.removeMax()
      balance--
    }

    if (balance > 0) {
      maxHeap.insert(minHeap.peek())
      minHeap.removeMax()
      balance++
    }

    while (map.get(maxHeap.peek()) != null || map.get(maxHeap.peek()) > 0) {
      map.set(maxHeap.peek(), map.get(maxHeap.peek()) - 1)
      maxHeap.removeMax()
    }

    while (minHeap.elements > 0 && map.get(minHeap.peek()) != null || map.get(minHeap.peek()) > 0) {
      map.set(minHeap.peek(), map.get(minHeap.peek()) - 1)
      minHeap.removeMax()
    }
  }
  return medians
}

console.log('Example - 1')
const arr = [1, 3, -1, -3, 5, 3, 6, 7]
let k = 3
console.log('Input: array =[' + String(arr.join(',')) + '], k = ' + k)
const output = medianSlidingWindow(arr, k)
console.log('Output: Medians =[' + String(output) + ']')

console.log('\nExample - 2')
const arr2 = [1, 2]
k = 1
console.log('Input: array =[' + String(arr2.join(',')) + '], k = ' + k)
const output2 = medianSlidingWindow(arr2, k)
console.log('Output: Medians =[' + String(output2) + ']')
