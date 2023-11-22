/**
 * https://leetcode.com/problems/eliminate-maximum-number-of-monsters/
 * @param {number[]} speed
 * @return {number}
 */
var eliminateMaximum = function(dist, speed) {
  let time = dist.map((d, i) => {
    return Math.ceil(d / speed[i])
  })

  let res = 0
  time.sort((a, b) => a - b)
  for (let min = 0; min < time.length; min++) {
    if (min >= time[min]) {
      return res
    }
    res++
  }
  
  return res
};