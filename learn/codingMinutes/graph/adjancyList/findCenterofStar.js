// https://leetcode.com/problems/find-center-of-star-graph/

/**
 * @param {number[][]} edges
 * @return {number}
 */
var findCenter = function(edges) {
  class Graph {
    constructor() {
      this.vertices = {}
      this.maxDegreeIndex = 0
    }

    addEdge (i, j, isDirected) {
      if (isDirected) {
        this.vertices[i] = this.vertices[i] || []
        this.vertices[i].push(j)
      } else {
        this.vertices[i] = this.vertices[i] || []
        this.vertices[j] = this.vertices[j] || []
        this.vertices[i].push(j)
        this.vertices[j].push(i)
        if (this.vertices[i].length > this.vertices[j].length) {
          this.maxDegreeIndex = i
        } else {
          this.maxDegreeIndex = j
        }
      }
    }
  }

  const g = new Graph()

  for (let i of edges) {
    g.addEdge(i[0], i[1])
  }

  return g.maxDegreeIndex
};



const main = () => {
  console.log(findCenter([[1,2],[2,3],[4,2]]))
}

main()