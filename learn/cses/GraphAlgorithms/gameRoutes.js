// https://cses.fi/problemset/task/1681

var readline = require('readline');
var fs = require('fs')

var r = readline.createInterface({
    input: process.stdin,
    // input: fs.createReadStream('../n.txt'),
    output: process.stdout,
    terminal: false
});

let v
let edges = []
let i = 0
r.on('line', function (line) {
    var vals = line.split(" ");
    if (i == 0) {
      v = parseInt(vals[0])
    } else {
      edges.push([parseInt(vals[0]), parseInt(vals[1])])
    }
    i++
});

r.on('close', function() {
  totalWays(v, edges)
})

const totalWays = (v, edges) => {
  const g = Array(v + 1).fill().map(() => Array().fill([]))

  const gr = Array(v + 1).fill().map(() => Array().fill([]))

  const inDegree = Array(v + 1).fill(0)

  for (const e of edges) {
    g[e[0]].push(e[1])
    gr[e[1]].push(e[0])
    inDegree[e[1]]++
  }

  const q = []
  const dp = Array(v + 1).fill(0)

  for (let i = 1; i <= v; i++) {
    if (inDegree[i] == 0) {
      q.push(i)
    }
  }

  dp[1] = 1

  let i = 0
  while (i < q.length) {
    const curr = q[i++]

    for (const n of g[curr]) {
      inDegree[n]--

      if (inDegree[n] == 0) {
        q.push(n)
      }
    }

    // for all the backedges for curr .. calculate the ways to reach here
    for (const prev of gr[curr]) {
      dp[curr] = (dp[curr] + dp[prev]) % 1000000007
    }
  }

  console.log(dp[v])
}

