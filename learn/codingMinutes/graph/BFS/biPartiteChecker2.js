
const isBiPartiteChecker = (g) => {
  const v = g.length

  const color = Array(v).fill(-1)

  const isBiPartiteChecker = (v) => {
    const q = []
    q.push(v)
    color[v] = 2

    while (q.length > 0) {
      const curr = q.shift()

      for (const n of g[curr]) {
        if (color[n] == -1) {
          color[n] = 3 - color[curr]
          q.push(n)
        } else if (color[n] == color[curr]) {
          return false
        }
      }
    }
    return true
  }

  let ans = 1
  for (let i = 0; i < v; i++) {
    if (color[i] == -1) {
      ans = ans & isBiPartiteChecker(i)
    }
  }

  console.log(color)
  return ans == 0 ? 'No' : 'Yes'
}

const main = () => {
  let g = [[1, 2, 3], [0, 2], [0, 1, 3], [0, 2]]

  console.log('Is Bipartite Graph ? ', isBiPartiteChecker(g))

  g = [[1, 3], [0, 2], [1, 3], [0, 2]]

  console.log('Is Bipartite Graph ? ', isBiPartiteChecker(g))
}

main()
