/*
One Integer

You are given a list of integers nums. You can reduce the length of nums by taking any two integers, removing them, and appending their sum to the end. The cost of doing this is the sum of the two integers you removed.

Return the minimum total cost of reducing nums to one integer.

Note : Cost can be negative also.

Constraints

    n ≤ 100,000 where n is length of nums.

Example :

Input

    nums = [1, 2, 3, 4, 5]

Output

    33

Explanation

    We take 1 and 2 out to get [3, 4, 5, 3]

    We take 3 and 3 out to get [4, 5, 6]

    We take 4 and 5 out to get [6, 9]

    We take 6 and 9 out to get [15]

    The sum is 33 = 1 + 2 + 3 + 3 + 4 + 5 + 6 + 9

    */

class Heap {
  constructor () {
    this.heap = []
    this.size = 0
    this.comparator = (a, b) => a - b
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

const solve = (nums) => {
  const h = new Heap()

  for (const n of nums) {
    h.push(n)
  }

  while (h.size != 1) {
    const num1 = h.pop()
    const num2 = h.pop()
    h.push(num1 + num2)
  }

  return h.peek()
}

const main = () => {
  nums = [1, 2, 3, 4, 5]
  console.log('the cost of making them one one integer is ', solve(nums))
}

main()
