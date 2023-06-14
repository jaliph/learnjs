// https://cses.fi/problemset/task/1133

const treeDistance = (v, edges) => {
  const g = Array(v + 1).fill().map(() => Array().fill([]))

  for (let e of edges) {
    g[e[0]].push(e[1])
    g[e[1]].push(e[0])
  }

  const gx = Array(v + 1).fill(0)
  const hx = Array(v + 1).fill(0)
  const fx = Array(v + 1).fill(0)

  const DFS_G = (curr, par) => {
    for (let n of g[curr]) {
      if (n!= par) {
        DFS_G(n, curr)
        gx[curr] += gx[n] + hx[n]
        hx[curr] += hx[n]
      }
    }
    hx[curr] += 1
  }

  DFS_G(1, 0)

  // console.log(hx)
  // console.log(gx)

  
  const DFS_F = (curr, par, sum_par) => {

    for (let n of g[curr]) {
      if (n != par) {
        let new_sum_par = sum_par + (v - hx[curr])

        let current_child_values = gx[n] + hx[n]
        new_sum_par += (gx[curr] - (current_child_values))

        DFS_F(n, curr, new_sum_par)
        
        // for any node in the subtree
        fx[curr] += (gx[n] + hx[n])
      }
    }
    // for complement of subtree i.e. other subtree of curr
    // final update
    fx[curr] += sum_par + (v - hx[curr])
  }

  DFS_F(1, 0, 0)

  return fx
}

const main = () => {
  let n = 5
  let edges = [
    [1, 2],
    [1, 3],
    [3, 4],
    [3, 5]
  ]

  console.log('The max distance for each node is ', treeDistance(n, edges))
}

main()