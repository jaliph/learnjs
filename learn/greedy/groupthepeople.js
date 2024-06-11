/**
 * https://leetcode.com/problems/group-the-people-given-the-group-size-they-belong-to
 * @param {number[]} groupSizes
 * @return {number[][]}
 */
const groupThePeople = function (groupSizes) {
  const map = new Map()
  const res = []
  let g
  for (let i = 0; i < groupSizes.length; i++) {
    g = groupSizes[i]
    if (!map.has(g)) {
      map.set(g, [])
    }
    map.get(g).push(i)
    if (map.get(g).length === g) {
      res.push(map.get(g))
      map.delete(g)
    }
  }
  return res
}
