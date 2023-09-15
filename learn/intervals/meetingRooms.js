/**
 * https://leetcode.com/problems/meeting-rooms/description/
 * https://www.lintcode.com/problem/920/
 * @param intervals: an array of meeting time intervals
 * @return: if a person could attend all meetings
 */
function canAttendMeetings(intervals) {
  intervals.sort((a, b) => {
    return a.start - b.start
  })
  let prev = intervals[0]
  for (let i = 1; i < intervals.length; i++) {
    if (prev.end <= intervals[i].start) {
      prev = intervals[i]
    } else {
      return false
    }
  }
  return true
}