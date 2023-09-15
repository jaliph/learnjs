/**
 * https://leetcode.com/problems/insert-interval/
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
  let res = []
  for (let i = 0; i < intervals.length; i++) {
    if (newInterval[1] < intervals[i][0]) {
      res.push(newInterval)
      return [...res, ...intervals.slice(i)]
    } else if (newInterval[0] > intervals[i][1]) {
      res.push(intervals[i])
    } else {
      newInterval = [Math.min(newInterval[0], intervals[i][0]), Math.max(newInterval[1], intervals[i][1])]
    }
  }
  res.push(newInterval)
  return res
};

const main = () => {
  intervals = [[1,3],[6,9]], newInterval = [2,5]
  console.log('after insert ... ', insert(intervals, newInterval))
}

main()




const insert1 = function (intervals, newInterval) {
  const result = []
  let i = 0
  while (i < intervals.length && intervals[i][1] < newInterval[0]) {
    result.push(intervals[i])
    i++
  }

  while (i < intervals.length && intervals[i][0] <= newInterval[1]) {
    newInterval[0] = Math.min(intervals[i][0], newInterval[0])
    newInterval[1] = Math.max(intervals[i][1], newInterval[1])
    i++
  }
  result.push(newInterval)

  while (i < intervals.length) {
    result.push(intervals[i])
    i++
  }
  return result
}

// console.log(insert())