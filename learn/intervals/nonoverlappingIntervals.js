/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function (intervals) {
  intervals.sort((a, b) => a[0] - b[0])

  const res = [intervals[0]]
  let cnt = 0
  for (let i = 1; i < intervals.length; i++) {
    if (res[res.length - 1][1] <= intervals[i][0]) {
      res.push(intervals[i])
    } else if (res[res.length - 1][1] > intervals[i][0]) {
      res[res.length - 1][0] = Math.max(res[res.length - 1][0], intervals[i][0])
      res[res.length - 1][1] = Math.min(res[res.length - 1][1], intervals[i][1])
      cnt++
    }
  }
  return cnt++
}

const main = () => {
  intervals = [[1, 2], [2, 3], [3, 4], [1, 3]]
  console.log('Count of overlapped intervals are .. ', eraseOverlapIntervals(intervals))
}

main()

/**
 * https://leetcode.com/problems/non-overlapping-intervals/
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function (intervals) {
  intervals.sort((a, b) => a[0] - b[0])

  let prev = intervals[0]
  let cnt = 0
  for (let i = 1; i < intervals.length; i++) {
    if (prev[1] <= intervals[i][0]) {
      prev = intervals[i]
    } else if (prev[1] > intervals[i][0]) {
      prev = [Math.max(prev[0], intervals[i][0]), Math.min(prev[1], intervals[i][1])]
      cnt++
    }
  }
  return cnt++
}
