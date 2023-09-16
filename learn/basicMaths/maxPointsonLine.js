/**
 * https://leetcode.com/problems/max-points-on-a-line/
 * @param {number[][]} points
 * @return {number}
 */
var maxPoints = function(points) {
  let res = 1

  let calcSlope = (p1, p2) => {
    if (p1[0] == p2[0]) {
      return Infinity
    } else {
      return ((p1[1] - p2[1]) / (p1[0] - p2[0]))
    }
  }

  for (let i = 0; i < points.length; i++) {
    let map = new Map()
    for (let j = i + 1; j < points.length; j++) {
      let slope = calcSlope(points[i], points[j])
      map.set(slope, (map.get(slope) || 0) + 1)
      res = Math.max(res, map.get(slope) + 1)
    }
  }

  return res
};
