
class FenwickTree {
  constructor (n) {
    this.size = n + 1 // 1 base so need 1 extra
    this.fn = Array(this.size).fill(0)
  }

  add (index, value) {
    index++  // 1 base index
    while (index < this.size) {
      this.fn[index] += value
      index += (index & -index) 
    }
  }

  __sum (index) {
    index++ // 1 base index
    let sum = 0
    while (index) {
      sum += this.fn[index]
      index -= (index & -index)
    }
    return sum
  }

  sum (l, r) {
    return this.__sum(r) - this.__sum(l - 1) 
  }
}

const main = () => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8]
  const fenwick = new FenwickTree(arr.length)
  for (let [i, n] of arr.entries()) {
    fenwick.add(i, n)
  }
  console.log(fenwick)
  console.log(fenwick.sum(0, 1))
  console.log(fenwick.sum(6, 7))
}

main()