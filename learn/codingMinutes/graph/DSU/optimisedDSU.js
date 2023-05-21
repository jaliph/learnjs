


class DSU  {
  constructor(num) {
    this.parents = []
    this.ranks = []
    for (let i = 0; i <= num; i++) {
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

  union (i , j) {
    let p1 = this.find(i)
    let p2 = this.find(j)

    if (p1 != p2) {
      if (this.ranks[p1] < this.ranks[p2]) {
        this.parents[p1] = p2
        this.ranks[p2]++
      } else {
        this.parents[p2] = p1
        this.ranks[p1]++
      }
    }
  }
}

const detectCycle = (n, edges) => {
  const dsu = new DSU(n + 1)

  for (let e of edges) {
    let s = e[0]
    let d = e[1]

    let p1 = dsu.find(s)
    let p2 = dsu.find(d)

    if (p1 != p2) {
      dsu.union(p1, p2)
    } else {
      return true
    }
  }
  console.log(dsu)
  return false
}


const main = () => {
  let edges = [[1,  2], [1, 3], [2, 3], [1,  4], [4, 5]]

  console.log('Cycle -< ', detectCycle(5, edges))

  edges = [[2,  1], [3, 2], [4, 3], [6,  5]]
  console.log('Cycle -< ', detectCycle(6, edges))

  edges = [[1,  2], [2, 3], [2, 4], [3,  5], [5, 7], [6, 8]]
  console.log('Cycle -< ', detectCycle(9, edges))
}

main()