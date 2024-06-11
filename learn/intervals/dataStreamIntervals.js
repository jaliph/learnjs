// https://leetcode.com/problems/data-stream-as-disjoint-intervals/
const SummaryRanges = function () {
  this.list = []
  this.binaryInsert = (data) => {
    let l = 0; let r = this.list.length
    let mid
    while (l < r) {
      mid = l + ~~((r - l) / 2)
      if (this.list[mid] === data) {
        return
      } else if (this.list[mid] < data) {
        l = mid + 1
      } else {
        r = mid
      }
    }
    this.list.splice(l, 0, data)
  }
}

/**
 * @param {number} value
 * @return {void}
 */
SummaryRanges.prototype.addNum = function (value) {
  this.binaryInsert(value)
}

/**
 * @return {number[][]}
 */
SummaryRanges.prototype.getIntervals = function () {
  const res = []
  for (const i of this.list) {
    if (res.length && res[res.length - 1][1] + 1 === i) {
      res[res.length - 1][1] = i
    } else {
      res.push([i, i])
    }
  }
  return res
}

/**
 * Your SummaryRanges object will be instantiated and called as such:
 * var obj = new SummaryRanges()
 * obj.addNum(value)
 * var param_2 = obj.getIntervals()
 */
