// https://leetcode.com/problems/stone-game/

/**
 * @param {number[]} piles
 * @return {boolean}
 */
const stoneGame = function (piles) {
  const sum = piles.reduce((prev, curr) => prev + curr, 0)

  const dp = new Map()
  const calcAliceScore = (l, r) => {
    // base
    if (l > r) {
      return 0
    }

    const key = l + '#' + r
    if (dp.has(key)) {
      return dp.get(key)
    }

    // check if it is alice's turn. it is that turn when length of pile is evem
    const even = !((r - l) & 1)

    const left = even ? piles[l] : 0
    const right = even ? piles[r] : 0

    dp.set(key, Math.max(
      left + calcAliceScore(l + 1, r),
      right + calcAliceScore(l, r - 1)
    ))
    return dp.get(key)
  }

  return calcAliceScore(0, piles.length - 1) > ~~(sum / 2)
}
