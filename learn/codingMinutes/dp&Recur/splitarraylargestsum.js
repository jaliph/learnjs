// https://leetcode.com/problems/split-array-largest-sum/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const splitArray = function(nums, k) {
    const splitArrayRecur = (i, nums, k, dp) => {
      // base
      if (i === nums.length) {
        if (k === 0) return 0
        return Infinity
      }
      
      if (k <= 0) return Infinity
      // recur

      if (dp[i][k] !== -1) return dp[i][k]
      let ans = Infinity, sum = 0
      for (let j = i; j < nums.length; j++) {
        // there is partition from i .. j
        sum += nums[j] 
        ans = Math.min(ans, Math.max(sum, splitArrayRecur(j + 1, nums, k - 1, dp)))
      }
      dp[i][k] = ans
      return dp[i][k]
    }
    const dp = Array(nums.length + 1).fill(0).map(() => Array(k + 1).fill(-1))
    return splitArrayRecur(0, nums, k, dp)
};

const main = () => {
  console.log('The maximum sum for the split array is', splitArray([7,2,5,10,8], 2))
  console.log('The maximum sum for the split array is', splitArray([1,4,4], 3))
}

main()