// https://leetcode.com/problems/evaluate-division/

/**
 * @param {string[][]} equations
 * @param {number[]} values
 * @param {string[][]} queries
 * @return {number[]}
 */
const calcEquation = function (equations, values, queries) {
  const g = {}

  equations.forEach((e, i) => {
    g[e[0]] = g[e[0]] || []
    g[e[1]] = g[e[1]] || []
    g[e[0]].push([e[1], values[i]])
    g[e[1]].push([e[0], (1 / values[i])])
  })

  // console.log(g)

  const BFS_Helper = (src, dest) => {
    if (!g[src] || !g[dest]) {
      return -1
    }
    const visited = {}
    const q = []
    q.push([src, 1])

    let i = 0
    while (i < q.length) {
      const [curr, value] = q[i++]

      visited[curr] = true
      for (const neigh of g[curr]) {
        const [n, w] = neigh
        if (n == dest) {
          return value * w
        }
        if (!visited[n]) {
          q.push([n, value * w])
        }
      }
    }

    return -1
  }

  return queries.map((v) => BFS_Helper(v[0], v[1]))
}

const main = () => {
  equations = [['a', 'b'], ['b', 'c']], values = [2.0, 3.0], queries = [['a', 'c'], ['b', 'a'], ['a', 'e'], ['a', 'a'], ['x', 'x']]
  console.log('ans for all the queries is ', calcEquation(equations, values, queries))

  equations = [['a', 'b'], ['b', 'c'], ['bc', 'cd']], values = [1.5, 2.5, 5.0], queries = [['a', 'c'], ['c', 'b'], ['bc', 'cd'], ['cd', 'bc']]
  console.log('ans for all the queries is ', calcEquation(equations, values, queries))
}

main()
