
// https://leetcode.com/problems/redundant-connection/

/**
 * @param {number[][]} edges
 * @return {number[]}
 */
const findRedundantConnection = function (edges) {
  class DSU {
    constructor (v) {
      this.parents = []
      this.ranks = []
      for (let i = 0; i <= v; i++) {
        this.parents[i] = -1
        this.ranks[i] = 1
      }
      this.disconnectedComponents = v
    }

    find (i) {
      if (this.parents[i] == -1) {
        return i
      }
      return this.parents[i] = this.find(this.parents[i])
    }

    union (i, j) {
      const p1 = this.find(i)
      const p2 = this.find(j)

      if (p1 != p2) {
        if (this.ranks[p1] < this.ranks[p2]) {
          this.parents[p1] = p2
          this.ranks[p2]++
        } else {
          this.parents[p2] = p1
          this.ranks[p1]++
        }
        this.disconnectedComponents--
        return true
      }
      return false
    }

    isConnected () {
      return this.disconnectedComponents == 1
    }
  }

  const dsu = new DSU(edges.length)

  let redudantEdge
  for (const e of edges) {
    if (!dsu.union(e[0], e[1])) {
      redudantEdge = e
    }
  }

  return redudantEdge
}

const main = () => {
  edges = [[1, 2], [1, 3], [2, 3]]
  console.log('the redundant edge is ', findRedundantConnection(edges))

  edges = [[1, 2], [2, 3], [3, 4], [1, 4], [1, 5]]
  console.log('the redundant edge is ', findRedundantConnection(edges))
}

main()
