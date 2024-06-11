/*

You are given a tree with n nodes where each node has labels in the set {1,2,.......,n} .

The tree is given as an array of edges where edges[i] = [ui, vi, ci] is a bidirectional edge between node ui and node vi  of length ci, and also you are given an array of queries and an integer k where query[i] = [ui, vi] , you have to calculate the length of the shortest path from node ui to node  vi via vertex k for each query.

Return an array containing the answer of each query respectively.

Constraints:

    3≤ n ≤10^5

    2<= edges.length <= n-1

    1≤ queries.length ≤10^5

    1<= k <= n

    1<= c <= 10^4

    1<= ui, vi <= n

    ui != vi  , ui != k and vi != k

Example:

Input

    n = 5 , k = 1

    edges = [
        [1, 2, 1],
        [1, 3, 1],
        [2, 4, 1],
        [3, 5, 1]
    ]

    queries = [
        [2, 4],
        [2, 3],
        [4, 5]
    ]

Output

    [3, 2, 4]

Explanation

The shortest paths for the three queries are as follows:

    Query 1: Vertex 2 → Vertex 1 → Vertex 2 → Vertex 4 : Length 1+1+1=3.

    Query 2: Vertex 2 → Vertex 1 → Vertex 3 : Length 1+1=2.

    Query 3: Vertex 4 → Vertex 2 → Vertex 1 → Vertex 3 → Vertex 5 : Length 1+1+1+1=4

*/

const pathOnTree = (n, k, edges, queries) => {
  const g = Array(n + 1).fill().map(() => Array().fill([]))
  const dist = Array(n + 1).fill(0)

  for (const e of edges) {
    g[e[0]].push([e[1], e[2]])
    g[e[1]].push([e[0], e[2]])
  }

  const DFS_Solver = (curr, par, len) => {
    dist[curr] = (dist[par] || 0) + len

    for (const neighbor of g[curr]) {
      const n = neighbor[0]
      const w = neighbor[1]
      if (n != par) {
        DFS_Solver(n, curr, w)
      }
    }
  }

  DFS_Solver(k, 0, 0)

  const results = []
  for (const q of queries) {
    const ans = dist[q[0]] + dist[q[1]]
    results.push(ans)
  }
  return results
}

const main = () => {
  n = 5, k = 1

  edges = [
    [1, 2, 1],
    [1, 3, 1],
    [2, 4, 1],
    [3, 5, 1]
  ]

  queries = [
    [2, 4],
    [2, 3],
    [4, 5]
  ]
  console.log('The query responses are ', pathOnTree(n, k, edges, queries))
}

main()
