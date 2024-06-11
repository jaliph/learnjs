/**
 * https://leetcode.com/problems/merge-intervals/
 * @param {number[][]} intervals
 * @return {number[][]}
 */
const merge = function (intervals) {
  intervals.sort((a, b) => a[0] - b[0])

  const res = [intervals[0]]
  for (let i = 1; i < intervals.length; i++) {
    if (res[res.length - 1][1] < intervals[i][0]) {
      res.push(intervals[i])
    } else if (res[res.length - 1][1] >= intervals[i][0]) {
      res[res.length - 1][0] = Math.min(res[res.length - 1][0], intervals[i][0])
      res[res.length - 1][1] = Math.max(res[res.length - 1][1], intervals[i][1])
    }
  }
  return res
}

const main = () => {
  intervals = [[1, 3], [2, 6], [8, 10], [15, 18]]
  console.log('Merged intervals are ', merge(intervals))

  intervals = [[1, 4], [4, 5]]
  console.log('Merged intervals are ', merge(intervals))
}

main()
