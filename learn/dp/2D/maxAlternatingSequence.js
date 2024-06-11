/**
 * https://leetcode.com/problems/maximum-alternating-subsequence-sum/
 * @param {number[]} nums
 * @return {number}
 */
var maxAlternatingSum = function (nums) {
  let sumOdd = 0; let sumEven = 0
  let tmpOdd, tmpEven
  for (let i = nums.length - 1; i >= 0; i--) {
    tmpEven = Math.max(sumOdd + nums[i], sumEven)
    tmpOdd = Math.max(sumEven - nums[i], sumOdd)

    sumOdd = tmpOdd
    sumEven = tmpEven
  }

  return sumEven
}

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxAlternatingSum = function (nums) {
  const dp = new Map()
  const alterFinder = (i, isEven) => {
    if (i === nums.length) {
      return 0
    }
    const key = `${i}#${isEven}`

    if (dp.has(key)) {
      return dp.get(key)
    }

    const total = isEven ? nums[i] : (-1 * nums[i])

    dp.set(key, Math.max(
      total + alterFinder(i + 1, !isEven),
      alterFinder(i + 1, isEven)
    ))

    return dp.get(key)
  }

  return alterFinder(0, true)
}
