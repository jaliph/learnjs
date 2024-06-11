/**
 * https://leetcode.com/problems/jump-game-vii/
 * @param {string} s
 * @param {number} minJump
 * @param {number} maxJump
 * @return {boolean}
 */
let canReach = function (s, minJump, maxJump) {
  let k = 0
  let q = [0]; let farthest = 0
  while (k < q.length) {
    const i = q[k++]
    const start = Math.max(i + minJump, farthest + 1) // already gone till farthest, check from very next
    // range of jumps is start, i + maxJump
    for (let j = start; j <= Math.min(s.length - 1, i + maxJump); j++) {
      if (s[j] == '0') {
        q.push(j)
        if (j === s.length - 1) {
          return true
        }
      }
    }
    farthest = i + maxJump
  }

  return false
}
