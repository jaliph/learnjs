// https://leetcode.com/problems/range-sum-query-mutable/

/**
 * @param {number[]} nums
 */
const NumArray = function (nums) {
  this.size = nums.length
  this.SegmentTree = Array(4 * this.size).fill(0)

  this.__build = (start, end, node) => {
    // base
    if (start === end) {
      this.SegmentTree[node] = nums[start]
      return
    }

    const mid = start + ~~((end - start) / 2)
    this.__build(start, mid, 2 * node + 1)
    this.__build(mid + 1, end, 2 * node + 2)

    this.SegmentTree[node] = this.SegmentTree[2 * node + 1] + this.SegmentTree[2 * node + 2]
  }

  this.__update = (start, end, node, index, value) => {
    // base
    if (start === end) {
      this.SegmentTree[node] = value
      return
    }

    const mid = start + ~~((end - start) / 2)
    if (index <= mid) {
      this.__update(start, mid, 2 * node + 1, index, value)
    } else {
      this.__update(mid + 1, end, 2 * node + 2, index, value)
    }

    this.SegmentTree[node] = this.SegmentTree[2 * node + 1] + this.SegmentTree[2 * node + 2]
  }

  this.__query = (start, end, l, r, node) => {
    // non overlapping
    if (start > r || end < l) {
      return 0
    }

    // overlap
    if (l <= start && end <= r) {
      return this.SegmentTree[node]
    }

    // partial overlap
    const mid = start + ~~((end - start) / 2)
    return this.__query(start, mid, l, r, 2 * node + 1) + this.__query(mid + 1, end, l, r, 2 * node + 2)
  }

  this.__build(0, this.size - 1, 0)
}

/**
 * @param {number} index
 * @param {number} val
 * @return {void}
 */
NumArray.prototype.update = function (index, val) {
  this.__update(0, this.size - 1, 0, index, val)
}

/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function (left, right) {
  return this.__query(0, this.size - 1, left, right, 0)
}

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * obj.update(index,val)
 * var param_2 = obj.sumRange(left,right)
 */
