
const kosaraju = (v, edges) => {
  // straight graph
  const g = Array(v + 1).fill().map(() => Array().fill([]))
  
  // reverse graph
  const gr = Array(v + 1).fill().map(() => Array().fill([]))
  
  for (let e of edges) {
    g[e[0]].push(e[1])
    gr[e[1]].push(e[0])
  }

  // console.dir(g)

  const order = []
  let visited = []

  const DFS = (curr) => {
    visited[curr] = 1
    for (let n of g[curr]) {
      if (!visited[n] == 1) DFS(n)
    }
    order.push(curr)
  }
  
  for (let i = 1; i <= v; i++) {
    if (!visited[i] == 1)  DFS(i)
  }

  order.reverse()

  let color = []
  visited = []

  const DFS2 = (curr, cv) => {
    visited[curr] = 1
    color[curr] = cv
    for (let n of gr[curr]) {
      if(!visited[n] == 1) {
        DFS2(n, cv)
      }
    }
  }

  let cv = 1
  for (let i = 0; i < 4; i++) {
    let vertex = order[i]
    if (!visited[vertex] == 1) {
      DFS2(vertex, cv++)
    }
  }

  console.log(color)
}


const main = () => {
  const edges = [[1, 2], [2, 3], [3, 1], [3, 4]]

  console.log('the strongly connected components are ', kosaraju(4, edges))
}

main()