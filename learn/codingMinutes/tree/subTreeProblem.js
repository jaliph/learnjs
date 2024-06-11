/*
You are given a tree with n nodes rooted at 1  where each node is numbered 1 to n.

The tree is given as an array of edges where edges[i] = [ui, vi] is a bidirectional edge between node ui and node vi , and also you are given an array of queries where query[i] = ui , you have to count the number of nodes present in the subtree of  node ui for each query.

Return an array containing the answer of each query respectively.

Constraints:

    2≤ n ≤10^5

    1<= edges.length <= n-1

    1≤ queries.length ≤10^5

    1<= ui, vi <=n

Example:

Input

    n = 5

    edges = [
        [1, 2],
        [1, 3],
        [3, 4],
        [3, 5]
    ]

    queries = [ 1, 2, 3, 4, 5]

Output

    [5, 1, 3, 1, 1]

*/

const subtreeProblem = (n, edges, queries) => {
  const g = Array(n + 1).fill().map(() => Array().fill([]))

  for (const e of edges) {
    g[e[0]].push(e[1])
    g[e[1]].push(e[0])
  }

  const parents = []

  const DFS_Solver = (curr, par) => {
    let child = 1

    for (const n of g[curr]) {
      if (par != n) {
        child += DFS_Solver(n, curr)
      }
    }
    parents[curr] = child
    return child
  }

  DFS_Solver(1, 0)

  const results = []
  for (const q of queries) {
    results.push(parents[q])
  }
  return results
}

const main = () => {
  n = 5, edges = [
    [1, 2],
    [1, 3],
    [3, 4],
    [3, 5]
  ]
  queries = [1, 2, 3, 4, 5]

  console.log('Calculating the parents', subtreeProblem(n, edges, queries))
}

main()
