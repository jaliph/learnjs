// https://leetcode.com/problems/maximize-score-after-n-operations/

/**
 * @param {number[]} nums
 * @return {number}
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxScore = function(nums) {
  const gcd = (a, b) => {
    if (b === 0) {
      return a
    }
    return gcd(b, a % b)
  }

  const dp = new Map()
  const maxScoreRecur = (mask, ops) => {
    if (dp.has(mask)) {
      return dp.get(mask)
    }

    dp.set(mask, 0)
    for (let i = 0; i < nums.length - 1; i++) {
      for (let j = i + 1; j < nums.length; j++) {
        if (((mask >> i) & 1) || ((mask >> j) & 1)) {
          continue
        }
        dp.set(mask, Math.max(dp.get(mask), (gcd(nums[i], nums[j]) * ops) + maxScoreRecur((mask | (1 << i) | (1 << j)), ops + 1)))
      }
    }
    return dp.get(mask)
  }

  return maxScoreRecur(0, 1)
};

const main = () => {
  nums = [3,4,6,8]
  console.log("Max score is ", maxScore(nums))
}

main()