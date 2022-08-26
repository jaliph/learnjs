
const Heap = require('./heap')
const findtheMinmumMaxProduct = (nums) => {
  let maxHeap = new Heap(0, (a, b) => a - b)
  let minHeap = new Heap(0, (a, b) => b - a)

  for (let i = 0; i < nums.length; i++) {
    let num = nums[i]
    if (maxHeap.length() === 0 || maxHeap.peek() >= num) {
      maxHeap.insert(num);
    } else {
      minHeap.insert(num);
    }

    // balance the heaps
    if (maxHeap.length() > minHeap.length() + 1) {
      minHeap.insert(maxHeap.pop());
    } else if (maxHeap.length() < minHeap.length()) {
      maxHeap.insert(minHeap.pop());
    }
  }
  // console.log(maxHeap)
  // console.log(minHeap)
  return maxHeap.peek() * minHeap.peek()
}

console.log(findtheMinmumMaxProduct([ 2, 6 ]))
console.log(findtheMinmumMaxProduct([ -12, 17, -13, 17 ]))
console.log(findtheMinmumMaxProduct([ 0, 0, 0, 1, 1, 1 ]))
console.log(findtheMinmumMaxProduct([ -15, 3, 0, 3, 6, 9 ]))