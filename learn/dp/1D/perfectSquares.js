// https://leetcode.com/problems/perfect-squares/

/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function(n) {
  let nums = []
  let j = 1, i = 1
  while (i <= n) {
    nums.push(i)
    j++
    i = j * j
  }
  

  let dp = Array(n + 1).fill(Infinity)
  dp[0] = 0

  for (let i = 1; i <= n; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (nums[j] <= i) {
        dp[i] = Math.min(dp[i], 1 + dp[i - nums[j]])
      }
    }
  }

  return dp[n]
};

const main = () => {
  n = 12
  console.log('min perfect squares to add to n is ', numSquares(n))
}

main()