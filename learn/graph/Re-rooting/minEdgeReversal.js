/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
var minEdgeReversals = function(n, edges) {
  const g = Array(n).fill().map(() => Array().fill([]))
  const gr = Array(n).fill().map(() => Array().fill([]))
  
  for (let e of edges) {
    g[e[0]].push(e[1])
    gr[e[1]].push(e[0])
  }

  const dp = new Map()
  const DFS = (curr, par) => {
    if (dp.has(`${curr}#${par}`)) {
      return dp.get(`${curr}#${par}`)
    }

    let ans = 0
    for (let n of g[curr]) {
      if (n != par) {
        ans += DFS(n, curr)
      }
    }

    for (let n of gr[curr]) {
      if (n != par) {
        ans += DFS(n, curr) + 1
      }
    }

    dp.set(`${curr}#${par}`, ans)
    return ans
  }

  return Array(n).fill(1).map((o, i) => DFS(i, -1))
};

var minEdgeReversalsBrute = function(n, edges) {
  const g = Array(n).fill().map(() => Array().fill([]))
  
  for (let e of edges) {
    g[e[0]].push([e[1], 0])
    g[e[1]].push([e[0], 1])
  }

  const BFS = (index) => {
    let sum = 0

    let q = []
    q.push(index)
    let k = 0
    let visited = []

    while (k < q.length) {
      let curr = q[k++]
      if (visited[curr]) {
        continue
      }
      visited[curr] = true
      for (let [n, w] of g[curr]) {
        if (!visited[n]) {
          sum += w
          q.push(n)
        }
      }
    }
    return sum
  }

  return Array(n).fill().map((o, i) => BFS(i))
};

const Print2D = arr => arr.forEach(o => console.log(...o))

const main = () => {
  n = 3, edges = [[1,2],[2,0]]
  console.log('Min edges reversal needed', minEdgeReversals(n, edges))

  n = 4, edges = [[2,0],[2,1],[1,3]]
  console.log('Min edges reversal needed', minEdgeReversals(n, edges))

 n = 4, edges = [[0,3],[1,2],[2,3]]
 console.log('Min edges reversal needed', minEdgeReversals(n, edges))

}

main()