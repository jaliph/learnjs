
class DSU {
  constructor (n) {
    this.parents = []
    this.ranks = []

    for (let i = 0; i <= n; i++) {
      this.parents[i] = -1
      this.ranks[i] = 1
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
      if (this.ranks[p1] < this.ranks[p2]) {
        this.parents[p1] = p2
        this.ranks[p1]++
      } else {
        this.parents[p2] = p1
        this.ranks[p2]++
      }
    }
  }
}

const detectCycle = (v, edges) => {
  const dsu = new DSU(v + 1)
  for (const e of edges) {
    const parent_1 = dsu.find(e[0])
    const parent_2 = dsu.find(e[1])

    if (parent_1 != parent_2) {
      dsu.union(parent_1, parent_2)
    } else {
      return true
    }
  }

  return false
}

const main = () => {
  const edges = [[1, 2], [2, 3], [3, 4]]
  console.log('is there a cycle ?', detectCycle(4, edges))
}

main()
