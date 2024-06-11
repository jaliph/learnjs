/**
 * https://leetcode.com/problems/dota2-senate
 * @param {string} senate
 * @return {string}
 */
const predictPartyVictory = function (senate) {
  const R = []
  const D = []
  for (let i = 0; i < senate.length; i++) {
    if (senate[i] === 'R') {
      R.push(i)
    } else {
      D.push(i)
    }
  }

  while (R.length && D.length) {
    const rSenate = R.shift()
    const dSenate = D.shift()
    if (rSenate < dSenate) {
      R.push(rSenate + senate.length)
    } else {
      D.push(dSenate + senate.length)
    }
  }

  return R.length ? 'Radiant' : 'Dire'
}
