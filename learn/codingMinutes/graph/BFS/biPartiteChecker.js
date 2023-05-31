

const isBiPartiteChecker = (v, edges) => {
  const g = Array(v).fill().map(() => Array().fill([]))

  for (let e of edges) {
    g[e[0]].push(e[1])
    g[e[1]].push(e[0])
  }

  const color = Array(v).fill(-1)

  let q = []
  let source = 0 // can be taken from g
  color[source] = 2
  q.push(source)
  
  while(q.length > 0) {
    let curr = q.shift()
    
    for (let n of g[curr]) {
      // not visited
      if (color[n] == -1) {
        color[n] = 3 - color[curr]
        q.push(n)
      } else if (color[curr] == color[n]) {
        console.log(color)
        return false
      }
    }
  }
  console.log(color)
  return true
}

const main = () => {
  let v = 4
  let edges = [[0, 1], [1, 2], [0, 3], [2, 3]]

  console.log('Is Bipartite Graph ? ', isBiPartiteChecker(v, edges))
}

main()