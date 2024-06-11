// https://leetcode.com/problems/longest-happy-string/

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
/**
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {string}
 */
const longestDiverseString = function (a, b, c) {
  const h = new Heap((a, b) => b[0] - a[0])
  const freqMap = { a, b, c }
  for (const k in freqMap) {
    if (freqMap[k] > 0) {
      h.push([freqMap[k], k])
    }
  }

  const res = []
  while (h.size) {
    let [count, char] = h.pop()
    if (res.length > 1 && res[res.length - 1] == char && res[res.length - 2] == char) {
      if (h.size == 0) {
        break
      }
      let [cnt, ch] = h.pop()
      res.push(ch)
      cnt--
      if (cnt > 0) {
        h.push([cnt, ch])
      }
    } else {
      res.push(char)
      count--
    }
    if (count > 0) {
      h.push([count, char])
    }
  }

  return res.join('')
}

const main = () => {
  a = 1, b = 1, c = 7
  console.log('Longest Happy String is ', longestDiverseString(a, b, c))

  a = 7, b = 1, c = 0
  console.log('Longest Happy String is ', longestDiverseString(a, b, c))
}

main()
