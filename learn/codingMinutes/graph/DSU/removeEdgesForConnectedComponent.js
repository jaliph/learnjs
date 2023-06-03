// https://leetcode.com/problems/remove-max-number-of-edges-to-keep-graph-fully-traversable/

/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
var maxNumEdgesToRemove = function(n, edges) {
  class DSU {
    constructor(v) {
      this.parents = []
      this.ranks = []
      for (let i = 0; i <= v; i++) {
        this.parents[i] = -1
        this.ranks[i] = 1
      }
    }

    find (i) {
      if (this.parents[i] == -1) {
        return i
      }
      this.parents[i] = this.find(this.parents[i])
      return this.parents[i]
    }

    union (i, j) {
      let p_i = this.find(i)
      let p_j = this.find(j)

      if (p_i != p_j) {
        if (this.ranks[p_i] < this.ranks[p_j]) {
          this.parents[p_i] = p_j
          this.ranks[p_i]++
        } else {
          this.parents[p_j] = p_i
          this.ranks[p_j]++
        }
        return true
      } else {
        return false
      }
    }
  }

  const a_DSU = new DSU(n)
  const b_DSU = new DSU(n)

  edges.sort((a, b) => {
    return b[0] - a[0]
  })

  let componentA = n
  let componentB = n
  let extraEdges = 0
  for (let e of edges) {
    if (e[0] == 3) {
      // both can travel

      let mergeA = a_DSU.union(e[1], e[2])
      let mergeB = b_DSU.union(e[1], e[2])

      // console.log(3, mergeA, mergeB, e[1], e[2])

      if (mergeA) {
        componentA--
      }

      if (mergeB) {
        componentB--
      }

      if (!mergeA && !mergeB) {
        extraEdges++
      }

    } else if (e[0] == 2) {
      
      let mergeA = a_DSU.union(e[1], e[2])
      // console.log(2, mergeA, e[1], e[2])
      
      if (mergeA) {
        componentA--
      }

      if (!mergeA) {
        extraEdges++
      }

    } else {
      let mergeB = b_DSU.union(e[1], e[2])
      // console.log(1, mergeB, e[1], e[2])
      
      if (mergeB) {
        componentB--
      }

      if (!mergeB) {
        extraEdges++
      }
    }
  }

  if (componentA != 1 || componentB != 1) {
    return -1
  }

  console.log(a_DSU)
  console.log(b_DSU)
  console.log(componentA, componentB)

  return extraEdges
};

const main = () => {
  // n = 4, edges = [[3,1,2],[3,2,3],[1,1,3],[1,2,4],[1,1,2],[2,3,4]]
  // console.log('Edges that can be removed ', maxNumEdgesToRemove(n, edges))

  // n = 4, edges = [
  //   [ 0, 1, 2 ], [ 0, 3, 4 ], [ 1, 1, 2 ], [ 1, 2, 4 ],
  //   [ 2, 1, 2 ], [ 2, 1, 3 ]
  // ]
  // console.log('Edges that can be removed ', maxNumEdgesToRemove(n, edges))

  n = 4, edges = [[3,1,2],[3,2,3],[1,1,4],[2,1,4]]
  console.log('Edges that can be removed ', maxNumEdgesToRemove(n, edges))

//   n = 4, edges = [[3,2,3],[1,1,2],[2,3,4]]
//   console.log('Edges that can be removed ', maxNumEdgesToRemove(n, edges))

}

main()