// https://leetcode.com/problems/number-of-dice-rolls-with-target-sum/
/**
 * @param {number} n
 * @param {number} k
 * @param {number} target
 * @return {number}
 */
var numRollsToTarget = function(n, k, target) {
  const MOD = 10**9 + 7

  const dp = new Map()
  const cntWays = (leftDices, tgt) => {
      // base
      if (leftDices == 0) {
          if (tgt == 0) {
              return 1
          }
          return 0
      }
      const key = `${leftDices}#${tgt}`
      if (dp.has(key)) {
          return dp.get(key)
      }

      // recur
      let count = 0
      for (let val = 1; val <= k ; val++) {
          count = (count + cntWays(leftDices - 1, tgt - val)) % MOD
      }
      dp.set(key, count)
      return count
  }

  return cntWays(n, target)
};


var numRollsToTarget2 = function(n, k, target) {
    const MOD = 10**9 + 7
    let prev = Array(target + 1).fill(0)
    prev[0] = 1

    
    for (let dice = 0; dice < n; dice++) {
        let nextRow = Array(target + 1).fill(0)
        for (let dVal = 1; dVal <= k; dVal++) {
            for (let t = 1; t <= target; t++) {
                if (t - dVal >= 0) {
                    nextRow[t] = (nextRow[t] + prev[t - dVal]) % MOD
                }
            }
        }
        console.log(nextRow)
        prev = nextRow
    }
    return prev[target]
}


numRollsToTarget2(2, 6, 7)