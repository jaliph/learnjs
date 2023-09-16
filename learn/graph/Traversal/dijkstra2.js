
class Heap {
  constructor ({ comparator }) {
    this.heap = []
    this.size = 0
    this.comparator = comparator || function (a, b) { return a - b }
  }

  push (data) {
    this.heap.push(data)
    this.size = this.heap.length
    this.percolateUp(this.heap.length - 1)
  }

  peek () {
    return this.heap[0]
  }

  pop () {
    if (this.size > 0) {
      const data = this.heap.shift()
      this.size = this.heap.length
      if (this.size > 2) {
        this.heap.unshift(this.heap.pop())
        this.percolateDown(0)
      }
      return data
    }
    return null
  }

  has (data) {
    return this.heap.findIndex((o) => arrayEqual(o, data))
  }

  delete (data) {
    const index = this.has(data)
    if (index >= 0) {
      // this.heap = [...this.heap.slice(0, index), ...this.heap.slice(index + 1)]
      // this.size = this.heap.length
      // for (let i = Math.floor(this.size / 2) + 1; i >= 0 ; i--) {
      //   this.percolateDown(i)
      // }
      this.swap(index, this.heap.length - 1)
      this.heap.pop()
      this.percolateDown(index)
      return true
    }
    return false
  }

  percolateUp (index) {
    const parent = Math.floor((index - 1) / 2)
    if (parent >= 0 && this.comparator(this.heap[parent], this.heap[index]) > 0) {
      this.swap(parent, index)
      this.percolateUp(parent)
    }
  }

  percolateDown (index) {
    let parent = index

    const leftChild = (index * 2) + 1
    const rightChild = (index * 2) + 2

    if (leftChild < this.heap.length && this.comparator(this.heap[parent], this.heap[leftChild]) > 0) {
      parent = leftChild
    }

    if (rightChild < this.heap.length && this.comparator(this.heap[parent], this.heap[rightChild]) > 0) {
      parent = rightChild
    }

    if (index != parent) {
      this.swap(index, parent)
      this.percolateDown(parent)
    }
  }

  swap (i, j) {
    const temp = this.heap[i]
    this.heap[i] = this.heap[j]
    this.heap[j] = temp
  }
}

const arrayEqual = (i, j) => {
  return i.toString() == j.toString()
}

const dijkstra = (v, edges, source) => {
  const g = Array(v).fill().map(() => Array().fill([]))
  const distance = Array(v).fill(Infinity)

  for (const e of edges) {
    g[e[0]].push([e[1], e[2]])
  }

  const h = new Heap({
    comparator: (i, j) => {
      return i[1] - j[1]
    }
  })

  distance[source] = 0

  h.push([source, 0])

  while (h.size > 0) {
    const curr = h.pop()

    const to = curr[0]
    const distancetillNow = curr[1]

    for (const nei of g[to]) {
      const n_to = nei[0]
      const n_w = nei[1]

      if (distancetillNow + n_w <= distance[n_to]) {
        if (h.has([n_to, distance[n_to]])) {
          h.delete([n_to, distance[n_to]])
        }

        distance[n_to] = distancetillNow + n_w
        h.push([n_to, distance[n_to]])
      }
    }
  }

  for (const i in distance) {
    console.log(`the distance ${source} to ${i} is ${distance[i]}`)
  }
}

const main = () => {
  const edges = [[0, 1, 1], [0, 3, 7], [0, 2, 4], [1, 2, 1], [2, 3, 2], [3, 4, 3]]
  console.log('all the distances are  ', dijkstra(5, edges, 0))
}

main()
