// https://leetcode.com/problems/partition-equal-subset-sum/

/**
 * @param {number[]} nums
 * @return {boolean}
 */
const canPartition = function (nums) {
  let sum = nums.reduce((prev, curr) => prev + curr, 0)
  if (sum & 1) {
    return false
  }

  sum = sum >> 1
  let dp = new Set([0])
  let newDp
  for (const n of nums) {
    newDp = new Set(dp)
    for (const possibleSums of dp) {
      newDp.add(possibleSums + n)
      if (newDp.has(sum)) {
        return true
      }
    }
    dp = newDp
  }

  return dp.has(sum)
}
