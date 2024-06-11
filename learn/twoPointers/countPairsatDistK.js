// https://leetcode.com/problems/count-pairs-of-points-with-distance-k/
// https://www.youtube.com/watch?v=igPsrhEk_dw&t=276s&ab_channel=TechTalk
/**
 x1 ^ x2 + y1 ^ y2 = k

 then if
 x1 ^ x2 = j
 y1 ^ y2 =  k - j

 where j can be 0 to k,

 so the complement is
 x1 ^ j = x2
 y1 ^ (k - j) = y2

 to check in the map
 */

/**
 * @param {number[][]} coordinates
 * @param {number} k
 * @return {number}
 */
const countPairs = function (coordinates, k) {
  const map = new Map()
  let res = 0
  for (const [x, y] of coordinates) {
    for (let j = 0; j <= k; j++) {
      const x_compliment = x ^ j
      const y_complement = y ^ (k - j)
      res += map.get(`${x_compliment}#${y_complement}`) || 0
    }
    map.set(`${x}#${y}`, (map.get(`${x}#${y}`) || 0) + 1)
  }
  return res
}

/**
 * On^2
 * @param {number[][]} coordinates
 * @param {number} k
 * @return {number}
 */
const countPairsBrute = function (coordinates, k) {
  const dist = (p1, p2) => {
    return (p1[0] ^ p2[0]) + (p1[1] ^ p2[1])
  }
  let count = 0
  for (let i = 0; i < coordinates.length - 1; i++) {
    for (let j = i + 1; j < coordinates.length; j++) {
      if (dist(coordinates[i], coordinates[j]) === k) {
        count += 1
      }
    }
  }
  return count
}
