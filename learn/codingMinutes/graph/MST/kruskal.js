
class DSU {
  constructor (num) {
    this.parents = []
    this.rank = []

    for (let i = 0; i <= num; i++) {
      this.parents[i] = -1
      this.rank[i] = 1
    }
  }

  find (i) {
    if (this.parents[i] == -1) {
      return i
    }
    this.parents[i] = this.find(this.parents[i])
    return this.parents[i]
  }

  union (i, j) {
    const p1 = this.find(i)
    const p2 = this.find(j)

    if (p1 != p2) {
      if (this.rank[p1] > this.rank[p2]) {
        this.parents[p2] = p1
        this.rank[p1]++
      } else {
        this.parents[p1] = p2
        this.rank[p2]++
      }
    }
  }
}

const kruskals = (n, edges) => {
  const dsu = new DSU(n)
  edges.sort((a, b) => {
    return a[2] - b[2]
  })

  let ans = 0

  for (const e of edges) {
    if (dsu.find(e[0]) != dsu.find(e[1])) {
      dsu.union(e[0], e[1])
      ans += e[2]
    }
  }

  return ans
}

const main = () => {
  const edges = [[0, 3, 2], [0, 1, 2], [0, 2, 2], [1, 2, 2], [1, 3, 2], [2, 3, 3]]

  console.log('MST using kruskals is ', kruskals(4, edges))
}

main()
