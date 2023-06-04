

class GraphWeighted {
  constructor(isDirected) {
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
  
  size() {
    return Object.keys(this.vertices).length
  }
}


const dijkstras = (n, edges, source) => {
  const g = new GraphWeighted()
  
  const dist = Array(n + 1).fill(Infinity)
  const set = new Set()
  for (let e of edges) {
    g.addEdge(e[0], e[1], e[2])
  }

  // add the source node and its distance
  dist[source] = 0
  set.add([0, 0])

  while (set.size > 0) {
    
    // pop from the set
    let currVertexData = set.values().next().value
    

    let distanceTillNow = currVertexData[1]
    let vertex = currVertexData[0]

    // console.log(currVertexData)
    set.delete(currVertexData)

    // iterate through each neighbor
    for (let n of g.vertices[vertex]) {
      let n_nbr = n[0]
      let edge = n[1]

      if (distanceTillNow + edge < dist[n_nbr]) {
        // if the existing neighbour and his distance is present remove, we need to update
        if (set.has([n_nbr, dist[n_nbr]])) {
          set.delete([n_nbr, dist[n_nbr]])
        }

        dist[n_nbr] = distanceTillNow + edge
        set.add([n_nbr, dist[n_nbr]])
      }
    }
  }

  for (let i in dist) {
    console.log(`the distance to ${i} is ${dist[i]}`)
  }

}




const main = () => {
  let edges = [[0, 1, 1], [0, 3, 7], [0, 2, 4], [1, 2, 1], [2, 3, 2], [3, 4, 3]]

  console.log('Distance via dikjstra is ', dijkstras(5, edges, 0))
}

main()