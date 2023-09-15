/**
 * https://leetcode.com/problems/remove-covered-intervals/
 * @param {number[][]} intervals
 * @return {number}
 */
var removeCoveredIntervals = function(intervals) {
  intervals.sort((a, b) => a[0] - b[0])

  let res = [intervals[0]]
  for (let i = 1; i < intervals.length; i++) {
    let flag = (res[res.length - 1][0] <= intervals[i][0] && 
      res[res.length - 1][1] >= intervals[i][1]) || 
        (res[res.length - 1][0] >= intervals[i][0] && 
      res[res.length - 1][1] <= intervals[i][1])
    if (flag) {
      res[res.length - 1][0] = Math.min(res[res.length - 1][0], intervals[i][0])
      res[res.length - 1][1] = Math.max(res[res.length - 1][1], intervals[i][1])
    } else {
      res.push(intervals[i])
    }
  }
  // console.log(res)
  return res.length
};