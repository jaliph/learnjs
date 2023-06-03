/*
Game Routes

A game has n levels numbered 1 to n, connected by some teleporters. Your task is to get from level 1 to level n.

You are given an array teleporters  where teleporters[i]= [ui, vi]  is a directed edge from level ui to level  vi .

The game has been designed so that there are no directed cycles in the underlying graph.

Return in how many ways you can complete the game. Since, the result may be large, print it modulo 10^9 + 7 .

Constraints:

    1<= n <= 10^5

    1<= teleporters.length <= 10^5

    1<= ui, vi <= n

    Input : n = 5, teleporters = {{1,  2}, {1, 3}, {2, 3}, {1,  4}, {4, 5}}
    Output : 1


Expected Time Complexity: O(n+ E), where E represents number of edges.
*/

// https://cses.fi/problemset/task/1681
// https://usaco.guide/problems/cses-1681-game-routes/solution


const totalWays = (v, edges) => {
  let g = Array(v + 1).fill().map(() => Array().fill([]))
  
  let gr = Array(v + 1).fill().map(() => Array().fill([]))

  let inDegree = Array(v + 1).fill(0)

  for (let e of edges) {
    g[e[0]].push(e[1])
    gr[e[1]].push(e[0])
    inDegree[e[1]]++
  }

  let q = []

  for (let i = 1; i <= v; i++) {
    if (inDegree[i] == 0) q.push(i)
  }

  let dp = Array(v + 1).fill(0)
  
  // base case
  dp[1] = 1 // 1 is the starting index

  while (q.length > 0) {
    let curr = q.shift()

    for (let n of g[curr]) {
      inDegree[n]--

      if (inDegree[n] == 0) {
        q.push(n)
      }
    }

    // for all the backedges for curr .. calculate the ways to reach here
    for (let prev of gr[curr]) {
      dp[curr] = (dp[curr] + dp[prev]) % Number(1e7)
    }
  }

  return dp[v]
}



const main = () => {
  let v= 4
  let edges = [[1, 2], [2, 4], [1, 3], [3, 4], [1, 4]]

  console.log('the total number of way to finish the game is ', totalWays(v, edges))

}

main()
