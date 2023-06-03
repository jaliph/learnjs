// https://leetcode.com/problems/number-of-operations-to-make-network-connected/

/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number}
 */
var makeConnected = function(n, connections) {
  const parents = []
  const ranks = []

  for (let i = 0; i < n; i++) {
    parents[i] = -1
    ranks[i] = 1
  }

  const find = (i) => {
    if (parents[i] == -1) {
      return i
    }
    parents[i] = find(parents[i])
    return parents[i]
  }

  const union = (i, j) => {
    let p_i = find(i)
    let p_j = find(j)

    if (p_i != p_j) {
      if (ranks[p_i] < ranks[p_j]) {
        parents[p_i] = p_j
        ranks[p_i]++
      } else {
        parents[p_j] = p_i
        ranks[p_j]++
      }
    }
  }
  
  let extraEdges = 0

  for (let e of connections) {
    let p1 = find(e[0])
    let p2 = find(e[1])

    if (p1 != p2) {
      union(p1, p2)
    } else {
      // already connected
      extraEdges++
    }
  }

  console.log(extraEdges)
  console.log(parents)
  const totalComponents = parents.reduce((prev, curr) => curr == -1 ? prev + 1 : prev, 0)
  return (totalComponents - 1) <= extraEdges ? totalComponents - 1 : -1
};

const main = () => {
  n = 4, connections = [[0,1],[0,2],[1,2]]
  console.log('Can i make the computers connected again with ', makeConnected(n, connections))

  n = 6, connections = [[0,1],[0,2],[0,3],[1,2],[1,3]]
  console.log('Can i make the computers connected again with ', makeConnected(n, connections))

}

main()
