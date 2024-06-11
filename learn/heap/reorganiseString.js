// https://leetcode.com/problems/reorganize-string/

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
 * @param {string} s
 * @return {string}
 */
const reorganizeString = function (s) {
  const freqMap = [...s].reduce((obj, key) => {
    obj[key] = (obj[key] || 0) + 1
    return obj
  }, {})

  const h = new Heap((a, b) => b[0] - a[0])
  for (const key in freqMap) {
    h.push([freqMap[key], key])
  }

  let prev = null
  let res = ''
  while (h.size || prev) {
    if (prev && h.size == 0) {
      return ''
    }

    let [cnt, char] = h.pop()
    cnt--
    res = res + char

    if (prev) {
      h.push(prev)
      prev = null
    }

    if (cnt > 0) {
      prev = [cnt, char]
    }
  }

  return res
}

const main = () => {
  s = 'aab'
  console.log('Reorganised string is ', reorganizeString(s))

  s = 'aaabcccccc'
  console.log('Reorganised string is ', reorganizeString(s))
}

main()
