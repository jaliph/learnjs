// https://cses.fi/problemset/task/1132

const treeDistance = (n, edges) => {
  const g = Array(n + 1).fill().map(() => Array().fill([]))

  for (const e of edges) {
    g[e[0]].push(e[1])
    g[e[1]].push(e[0])
  }

  const gx = Array(n + 1).fill(0)
  const fx = Array(n + 1).fill(0)

  const DFS_G = (curr, par) => {
    for (const n of g[curr]) {
      if (n != par) {
        DFS_G(n, curr)
        gx[curr] = Math.max(gx[curr], gx[n] + 1)
      }
    }
  }

  DFS_G(1, 0)

  const DFS_F = (curr, par, dis_par) => {
    // find two maxes instead of the loop
    let max_1 = -1
    let max_2 = -1
    for (const n of g[curr]) {
      if (n != par) {
        if (gx[n] > max_1) {
          max_2 = max_1
          max_1 = gx[n]
        } else if (gx[n] > max_2) {
          max_2 = gx[n]
        }
      }
    }

    for (const n of g[curr]) {
      if (n != par) {
        let new_dis_par = dis_par

        // // this can be done with max_1 and max_2, we just need
        // for (let nn of g[curr]) {
        //   if (nn != par && nn != n) {
        //     new_dis_par = Math.max(gx[nn], new_dis_par)
        //   }
        // }

        if (gx[n] == max_1) { // dont take this value because we want other trees
          new_dis_par = Math.max(new_dis_par, max_2)
        } else {
          new_dis_par = Math.max(new_dis_par, max_1)
        }

        DFS_F(n, curr, new_dis_par + 1)

        // for any node in the subtree
        fx[curr] = Math.max(fx[curr], gx[n] + 1)
      }
    }
    // for complement of subtree i.e. other subtree of curr
    // final update
    fx[curr] = Math.max(fx[curr], dis_par + 1)
  }

  DFS_F(1, 0, -1)

  return fx
}

const main = () => {
  const n = 5
  const edges = [
    [1, 2],
    [1, 3],
    [3, 4],
    [3, 5]
  ]

  console.log('The max distance for each node is ', treeDistance(n, edges))
}

main()
