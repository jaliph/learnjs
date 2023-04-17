// https://leetcode.com/problems/partition-array-for-maximum-sum/


/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
const maxSumAfterPartitioning = function(arr, k) {
    const maxSumAfterPartitioningRecur = (i, arr, k, dp) => {
      // base
      if (i >= arr.length) return 0 
      // recur

      if (dp[i] != -1) return dp[i]
      let ans = 0, max = 0

      for (let j = i; j < Math.min(arr.length, i + k); j++) {
        max = Math.max(max, arr[j])
        ans = Math.max(ans, max * (j - i + 1) + maxSumAfterPartitioningRecur(j + 1, arr, k, dp))
      }
      dp[i] = ans
      return dp[i]
    }
    const dp = Array(arr.length + 1).fill(-1)
    return maxSumAfterPartitioningRecur(0, arr, k, dp)
};



const main = () => {
  console.log('The max sum after the partiton is ', maxSumAfterPartitioning([1,15,7,9,2,5,10], 3))
  console.log('The max sum after the partiton is ', maxSumAfterPartitioning([1,4,1,5,7,3,6,1,9,9,3], 4))
}

main()