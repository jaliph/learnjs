/**
 * https://leetcode.com/problems/minimum-deletions-to-make-character-frequencies-unique/
 * @param {string} s
 * @return {number}
 */
const minDeletions = function (s) {
  const freq = [...s].reduce((prev, curr) => {
    prev.set(curr, (prev.get(curr) || 0) + 1)
    return prev
  }, new Map())

  const used = new Set()
  let deletions = 0
  for (let [k, v] of freq) {
    while (v > 0 && used.has(v)) {
      v--
      deletions++
    }
    used.add(v)
  }
  return deletions
}

const main = () => {
  s = 'aab'
  console.log('Min deletions. ', minDeletions(s))
}

main()
