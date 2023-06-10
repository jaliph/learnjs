// https://leetcode.com/problems/number-of-provinces/

/**
 * @param {number[][]} isConnected
 * @return {number}
 */
const findCircleNum = function (isConnected) {
  class DSU {
    constructor (n) {
      this.parents = []
      this.ranks = []
      this.components = n
      for (let i = 0; i < n; i++) {
        this.parents[i] = -1
        this.ranks[i] = 1
      }
    }

    find (i) {
      if (this.parents[i] == -1) {
        return i
      }
      return this.parents[i] = this.find(this.parents[i])
    }

    union (i, j) {
      const p1 = this.find(i)
      const p2 = this.find(j)
      if (p1 != p2) {
        if (this.ranks[p1] < this.ranks[p2]) {
          this.parents[p1] = p2
          this.ranks[p2] = +this.ranks[p1]
        } else {
          this.parents[p2] = p1
          this.ranks[p1] = +this.ranks[p2]
        }
        this.components--
        return true
      } else {
        return false
      }
    }

    isConnected () {
      return this.components == 1
    }
  }

  const dsu = new DSU(isConnected.length)

  for (let i = isConnected.length; i >= 0; i--) {
    for (let j = i + 1; j < isConnected.length; j++) {
      if (isConnected[i][j] == 1) {
        dsu.union(i, j)
      }
    }
  }

  return dsu.components
}

const Print2D = arr => arr.forEach(o => console.log(...o))
const main = () => {
  isConnected = [[1, 1, 0], [1, 1, 0], [0, 0, 1]]
  // Print2D(isConnected)
  console.log('the nummber of provinces are ', findCircleNum(isConnected))

  isConnected = [[1, 0, 0], [0, 1, 0], [0, 0, 1]]
  console.log('the nummber of provinces are ', findCircleNum(isConnected))
}

main()
