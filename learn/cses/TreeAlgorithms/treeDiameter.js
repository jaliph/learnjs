// https://cses.fi/problemset/task/1131

const readline = require('readline')
const fs = require('fs')

const r = readline.createInterface({
  // input: process.stdin,
  input: fs.createReadStream('./test_input.txt'),
  output: process.stdout,
  terminal: false
})

let i = 0
let n
const edges = []
r.on('line', function (line) {
  const vals = line.split(' ')
  if (i == 0) {
    n = parseInt(vals[0])
  } else {
    edges.push([parseInt(vals[0]), parseInt(vals[1])])
  }
  i++
  if (i == n) {
    calulateTreeDiameter(n, edges)
  }
})

// r.on('close', function () {

// });

// const calulateTreeDiameter = (n, edges) => {
//   let g = Array(n + 1).fill().map(() => Array().fill([]))
//   const fx = Array(n + 1).fill(0)
//   const gx = Array(n + 1).fill(0)

//   for (let e of edges) {
//     g[e[0]].push(e[1])
//     g[e[1]].push(e[0])
//   }

//   const DFS_Helper = (curr, par) => {
//     let max_1 = 0, max_2 = 0
//     for (let n of g[curr]) {
//       if (n != par) {
//         DFS_Helper(n, curr)
//         gx[curr] = Math.max(gx[curr], gx[n] + 1)
//         fx[curr] = Math.max(fx[curr], fx[n]) // if not passing through curr

//         if (gx[n] + 1 > max_1) {
//           max_2 = max_1
//           max_1 = gx[n] + 1
//         } else if (gx[n] + 1 > max_2) {
//           max_2 = gx[n] + 1
//         }
//       }
//     }
//     fx[curr] = Math.max(fx[curr], max_1 + max_2)
//   }

//   DFS_Helper(1, 0)
//   console.log(fx[1])
// }

const calulateTreeDiameter = (n, edges) => {
  const g = Array(n + 1).fill().map(() => Array().fill([]))
  const fx = Array(n + 1).fill(0)
  const gx = Array(n + 1).fill(0)
  const visited = Array(n + 1).fill(false)

  for (const e of edges) {
    g[e[0]].push(e[1])
    g[e[1]].push(e[0])
  }

  // console.log(g)

  let i = 0
  const q = []
  q.push(1)
  while (i < q.length) {
    const curr = q[i++]
    visited[curr] = 1

    let max_1 = 0; let max_2 = 0
    for (const n of g[curr]) {
      // console.log(curr, n, visited[n])
      // if already visited , we are ready to calculate
      if (visited[n]) {
        gx[curr] = Math.max(gx[curr], gx[n] + 1)
        fx[curr] = Math.max(fx[curr], fx[n]) // if not passing through curr

        if (gx[n] + 1 > max_1) {
          max_2 = max_1
          max_1 = gx[n] + 1
        } else if (gx[n] + 1 > max_2) {
          max_2 = gx[n] + 1
        }
      } else {
        q.push(n)
      }
    }
    fx[curr] = Math.max(fx[curr], max_1 + max_2)
  }
  console.log(gx, fx)
  console.log(fx[1])
}
