

class SegmentTree {
  constructor(n) {
    this.size = n
    this.segment = Array(4 * n).fill(0)
  }

  __build(start, end, node, arr) {
    // base case
    if (start === end) {
      this.segment[node] = arr[start]
      return
    }

    let mid = start + ~~((end - start) / 2)
    this.__build(start, mid, (2 * node) + 1, arr)
    this.__build(mid + 1, end, (2 * node) + 2, arr)

    this.segment[node] = this.segment[(2 * node) + 1] + this.segment[(2 * node) + 2]
  }

  build (arr) {
    this.__build(0, this.size - 1, 0, arr)
  }

  __query (start, end, l, r, node) {
    // no overlap
    if (end < l || start > r) {
      return 0
    }

    // complete overlap
    if (l <= start && end <= r) {
      return this.segment[node]
    }

    // partial overlap
    let mid = start + ~~((end - start) / 2)
    let q1 = this.__query(start, mid, l, r, (2 * node) + 1)
    let q2 = this.__query(mid + 1, end, l, r, (2 * node) + 2)
    return q1 + q2 
  }

  query (l, r) {
    return this.__query(0, this.size - 1, l, r, 0)
  }

  __update(start, end, node, index, value) {
    // base
    if (start === end) {
      this.segment[node] = value
      return
    }

    let mid = start + ~~((end - start) / 2)
    if (index <= mid) {
      // left tree
      this.__update(start, mid, (2 * node) + 1, index, value)
    } else {

      // right tree
      this.__update(start, mid, (2 * node) + 2, index, value)
    }

    this.segment[node] = this.segment[(2 * node) + 1] + this.segment[(2 * node) + 2]
  }

  update (index, val) {
    return this.__update(0, this.size - 1, 0, index, val)
  }
}

const main = () => {
  const nums = [1, 2, 3, 4, 5, 6, 7, 8]
  const segment = new SegmentTree(nums.length)

  segment.build(nums)

  console.dir(segment)
  console.log(segment.query(3, 4))
  segment.update(3, 5)
  console.log(segment)
  console.log(segment.query(3, 4))
}

main()