/**
 * https://leetcode.com/problems/dota2-senate
 * @param {string} senate
 * @return {string}
 */
var predictPartyVictory = function(senate) {
  let R = []
  let D = []
  for (let i = 0; i < senate.length; i++) {
    if (senate[i] === 'R') {
      R.push(i)
    } else {
      D.push(i)
    }
  }

  while (R.length && D.length) {
    let rSenate = R.shift()
    let dSenate = D.shift()
    if (rSenate < dSenate) {
      R.push(rSenate + senate.length)
    } else {
      D.push(dSenate + senate.length)
    }
  }

  return R.length ? 'Radiant' : 'Dire'
};