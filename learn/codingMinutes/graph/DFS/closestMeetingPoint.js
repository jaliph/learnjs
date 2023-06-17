/**
 * @param {number[]} edges
 * @param {number} node1
 * @param {number} node2
 * @return {number}
 */
var closestMeetingNode = function(edges, node1, node2) {
  const n = edges.length
  const g = Array(n).fill().map(() => Array().fill([]))
  for (let i = 0; i < edges.length; i++) {
    g[i].push(edges[i])
  }


  const DFS_Helper = (curr, par, dist) =>{
    dist[curr] = (dist[par] || 0) + 1
    for (let n of g[curr] || []) {
      if (!dist[n]) {
        DFS_Helper(n, curr, dist)
      }
    }
  }

  let dist1 = []
  DFS_Helper(node1, -1, dist1)
  // console.log(dist1)
  
  let dist2 = []
  DFS_Helper(node2, -1, dist2)
  // console.log(dist2)

  let ans = -1
  let dist = Infinity
  for (let i = 0; i < n; i++) {
    if (dist1[i] && dist2[i]) {
      let max = Math.max(dist1[i], dist2[i])
      if (max < dist) {
        ans = i
        dist = max
      }
    }
  }

  return ans
};

const main = () => {
  edges = [2,2,3,-1], node1 = 0, node2 = 1
  console.log(closestMeetingNode(edges, node1, node2))

  edges = [1,2,-1], node1 = 0, node2 = 2
  console.log(closestMeetingNode(edges, node1, node2))
}

main()