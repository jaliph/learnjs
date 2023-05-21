


class DSU  {
  constructor(num) {
    this.parents = []
    for (let i = 0; i <= num; i++) {
      this.parents[i] = -1
    }
  }

  find (i) {
    let temp = i
    while (this.parents[i] != -1) {
      i = this.parents[i]
    }
    // console.log(temp, ' has parent ', i)
    return i
  }

  union (i , j) {
    let p1 = this.find(i)
    let p2 = this.find(j)

    if (p1 != p2) {
      this.parents[p2] = p1
    } else {
      console.log('Same parents')
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
  return false
}


const main = () => {
  let edges = [[1,  2], [1, 3], [2, 3], [1,  4], [4, 5]]

  console.log('Cycle -< ', detectCycle(5, edges))

  edges = [[1,  2], [2, 3], [3, 4], [5,  6]]

  console.log('Cycle -< ', detectCycle(6, edges))
}

main()