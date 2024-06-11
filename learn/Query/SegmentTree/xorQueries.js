
class SegmentTree {
  constructor (n) {
    this.size = n
    this.SegTree = Array(4 * n).fill(0)
  }

  __build (start, end, node, arr) {
    // base
    if (start === end) {
      this.SegTree[node] = arr[start]
      return
    }

    const mid = start + ~~((end - start) / 2)
    this.__build(start, mid, (2 * node) + 1, arr)
    this.__build(mid + 1, end, (2 * node) + 2, arr)

    this.SegTree[node] = this.SegTree[(2 * node) + 1] ^ this.SegTree[(2 * node) + 2]
  }

  build (arr) {
    this.__build(0, this.size - 1, 0, arr)
  }

  __query (start, end, l, r, node) {
    console.log(start, end, l, r)
    // no overlap
    if (start > r || end < l) {
      return 0
    }

    // overlap
    if (l <= start && end <= r) {
      return this.SegTree[node]
    }

    // partial overlap
    const mid = start + ~~((end - start) / 2)
    const q1 = this.__query(start, mid, l, r, (2 * node) + 1)
    const q2 = this.__query(mid + 1, end, l, r, (2 * node) + 2)
    return q1 ^ q2
  }

  query (l, r) {
    return this.__query(0, this.size - 1, l, r, 0)
  }
}

/**
 * https://leetcode.com/problems/xor-queries-of-a-subarray/
 * @param {number[]} arr
 * @param {number[][]} queries
 * @return {number[]}
 */
const xorQueries = function (arr, queries) {
  const segment = new SegmentTree(arr.length)
  segment.build(arr)
  console.log(segment)
  return queries.map((q) => segment.query(q[0], q[1]))
}

const main = () => {
  arr = [1, 3, 4, 8], queries = [[0, 1], [1, 2], [0, 3], [3, 3]]
  console.log('Query results.. ', xorQueries(arr, queries))
}

main()
