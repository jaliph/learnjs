// https://codeforces.com/problemset/problem/1037/D
// https://www.codingninjas.com/codestudio/library/check-if-the-given-permutation-is-a-valid-bfs-of-a-given-tree

const validBfs = (v, edges, order) => {
  const g = Array(v + 1).fill().map(() => Array().fill([]))

  for (const e of edges) {
    g[e[0]].push(e[1])
    g[e[1]].push(e[0])
  }

  const visited = []

  const set = [order[0]]
  const q = []

  q.push(set)

  i = 0

  while (q.length > 0 && i < v) {
    // if thr current element is already visited... nt possible
    if (visited[order[i]]) return false
    visited[order[i]] = 1

    // if all the elements of a level are visited, remove it
    if (q[0].length == 0) q.shift()

    // the current order[i] should be in the q[0]
    if (q[0].indexOf(order[i]) < 0) {
      return false
    }

    const s = []

    // push all the children of order[i]
    for (const n of g[order[i]]) {
      if (!visited[n]) s.push(n)
    }
    if (s.length > 0) {
      q.push([...s])
    }

    // remove the current order[i] from the q[0]

    const indexOf = q[0].indexOf(order[i])
    q[0] = [...q[0].slice(0, indexOf), ...q[0].slice(indexOf + 1)]

    // console.dir(q)

    // move to the next order[i]
    i++
  }

  return true
}

const main = () => {
  let v = 4
  let edges = [[1, 2], [1, 3], [2, 4]]
  let order = [1, 2, 3, 4]

  console.log('Is BFS Valid ? ', validBfs(v, edges, order))

  v = 4
  edges = [[1, 2], [1, 3], [2, 4]]
  order = [1, 2, 4, 3]

  console.log('Is BFS Valid ? ', validBfs(v, edges, order))
}

main()
