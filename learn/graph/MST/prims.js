
const Heap = require('collections/heap')
class GraphWeighed {
  constructor (isDirected) {
    this.vertices = {}
    this.isDirected = isDirected
  }

  addEdge (i, j, w) {
    if (this.vertices[i]) {
      this.vertices[i].push([j, w])
    } else {
      this.vertices[i] = [[j, w]]
    }

    if (!this.isDirected) {
      if (this.vertices[j]) {
        this.vertices[j].push([i, w])
      } else {
        this.vertices[j] = [[i, w]]
      }
    }
  }

  size () {
    return Object.keys(this.vertices).length
  }
}

const Prims = (edges) => {
  const g = new GraphWeighed()

  for (const e of edges) {
    g.addEdge(e[0], e[1], e[2])
  }

  const heap = new Heap([], null, (a, b) => {
    return b[1] - a[1]
  })

  let ans = 0
  const startVertex = 0 // can start from any vertex
  const visited = {}
  heap.push([startVertex, 0])

  while (heap.length > 0) {
    // console.log('Start of while')
    // console.log(heap.toArray())
    const currVertex = heap.pop()

    const to = currVertex[0]
    const w = currVertex[1]

    if (visited[to]) {
      // console.log('this is already visited ', to)
      continue
    }

    ans += w
    visited[to] = true

    // console.log('current is .. ', currVertex)
    // console.log(visited)

    for (const n of g.vertices[to]) {
      const n_to = n[0]
      if (!visited[n_to]) {
        // console.log('pushing', n)
        heap.push(n)
      }
    }
  }

  return ans
}

const main = () => {
  const edges = [[0, 3, 2], [0, 1, 2], [0, 2, 2], [1, 2, 2], [1, 3, 2], [2, 3, 3]]

  console.log('Minimum spanning tree using prims is ', Prims(edges))
}

main()
