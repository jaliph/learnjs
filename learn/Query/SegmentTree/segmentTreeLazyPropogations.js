

class SegmentTree {
  constructor(n) {
    this.size = n
    this.segment = Array(4 * n).fill(0)
    this.lazy = Array(4 * n).fill(0)  /// lazy to store the update lazy nodes
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

    // LAZY PART
    if (this.lazy[node] != 0) {
      this.segment[node] += this.lazy[node] * (end - start + 1)
      // if not child / leaf node
      if (start != end) {
        this.lazy[2 * node + 1] += this.lazy[node]
        this.lazy[2 * node + 2] += this.lazy[node]
      }
      this.lazy[node] = 0
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

  __update(start, end, node, l, r, value) {
    // no overlap
    if (end < l || start > r) {
      return
    }

    // LAZY PART
    if (this.lazy[node] != 0) {
      this.segment[node] += this.lazy[node] * (end - start + 1)
      // if not child / leaf node
      if (start != end) {
        this.lazy[2 * node + 1] += this.lazy[node]
        this.lazy[2 * node + 2] += this.lazy[node]
      }
      this.lazy[node] = 0
    }

    // complete overlap
    if (l <= start && end <= r) {
      this.segment[node] += value * (end - start + 1)
      // if not child / leaf node
      if (start != end) {
        this.lazy[2 * node + 1] += value
        this.lazy[2 * node + 2] += value
      }
      return
    }

    // partial overlap
    let mid = start + ~~((end - start) / 2)
    this.__update(start, mid, (2 * node) + 1, l, r, value)
    this.__update(mid + 1, end, (2 * node) + 2, l, r, value)

    this.segment[node] = this.segment[(2 * node) + 1] + this.segment[(2 * node) + 2]
    return
  }

  update (l, r, val) {
    return this.__update(0, this.size - 1, 0, l, r, val)
  }
}

const main = () => {
  const nums = [1, 2, 3, 4, 5, 6, 7, 8]
  const segment = new SegmentTree(nums.length)

  segment.build(nums)

  console.log(segment.query(0, 4))
  segment.update(0, 1, 10)
  console.log(segment.query(0, 4))
  // console.log(segment)
  // console.log(segment.query(3, 4))
}

main()