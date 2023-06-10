// find all the ancestors of a node

const printAncestors = (n, edges) => {
  const g = Array(n + 1).fill().map(() => Array().fill([]))
  const parent = []

  for (const e of edges) {
    g[e[0]].push(e[1])
    g[e[1]].push(e[0])
  }

  const DFS_Helper = (curr, par) => {
    parent[curr] = par
    for (const child of g[curr]) {
      if (child != par) {
        DFS_Helper(child, curr)
      }
    }
  }

  DFS_Helper(1, -1)

  const print = (i) => {
    let k = i
    const parents = []
    while (k != -1) {
      parents.push(k)
      k = parent[k]
    }
    console.log('all the parents of ', i, ' :: ', parents)
  }

  for (let i = 1; i <= n; i++) {
    print(i)
  }
}

const main = () => {
  n = 5
  edges = [
    [1, 2],
    [1, 3],
    [3, 4],
    [3, 5]
  ]
  console.log('all the ancestors for every node will be printed')
  printAncestors(n, edges)
}

main()
