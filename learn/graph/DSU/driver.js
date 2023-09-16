class DSU {
  constructor (num) {
    this.parents = []
    for (let i = 0; i <= num; i++) {
      this.parents[i] = -1
    }
  }

  find (i) {
    const temp = i
    while (this.parents[i] != -1) {
      i = this.parents[i]
    }
    // console.log(temp, ' has parent ', i)
    return i
  }

  union (i, j) {
    const p1 = this.find(i)
    const p2 = this.find(j)

    if (p1 != p2) {
      this.parents[p2] = p1
    } else {
      console.log('Same parents')
    }
  }
}

const detectCycle = (n, edges) => {
  const dsu = new DSU(n + 1)

  for (const e of edges) {
    const s = e[0]
    const d = e[1]

    const p1 = dsu.find(s)
    const p2 = dsu.find(d)

    if (p1 != p2) {
      dsu.union(p1, p2)
    } else {
      return true
    }
  }
  return false
}

const main = () => {
  let edges = [[1, 2], [1, 3], [2, 3], [1, 4], [4, 5]]

  console.log('Cycle -< ', detectCycle(5, edges))

  edges = [[1, 2], [2, 3], [3, 4], [5, 6]]

  console.log('Cycle -< ', detectCycle(6, edges))
}

main()
