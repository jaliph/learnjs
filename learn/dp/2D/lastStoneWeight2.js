// https://leetcode.com/problems/last-stone-weight-ii/

/**
 * @param {number[]} stones
 * @return {number}
 */
const lastStoneWeightII = function (stones) {
  const sum = stones.reduce((prev, curr) => prev + curr, 0)
  const target = Math.ceil(sum / 2)
  const map = new Map()
  const weightFinder = (i, wt) => {
    if (wt >= target || i == stones.length) {
      return Math.abs(wt - (sum - wt))
      // we want the diff between 2 piles
      // 1 pile is wt
      // 2 pile is sum - wt
      // diff is wt - sum - wt // to ensure negation, do abs
    }

    const key = i + ':' + wt
    if (map.has(key)) {
      return map.get(key)
    }

    map.set(key, Math.min(weightFinder(i + 1, wt + stones[i]), weightFinder(i + 1, wt)))
    return map.get(key)
  }

  return weightFinder(0, 0)
}

const main = () => {
  stones = [2, 7, 4, 1, 8, 1]
  console.log('Last stone weight .. ', lastStoneWeightII(stones))

  // stones = [31,26,33,21,40]
  // console.log('Last stone weight .. ', lastStoneWeightII(stones))
}

main()
