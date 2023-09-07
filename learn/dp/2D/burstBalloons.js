/**
 * https://leetcode.com/problems/burst-balloons
 * @param {number[]} nums
 * @return {number}
 */
var maxCoins = function(nums) {
  nums = [1, ...nums, 1]  
  const dp = new Map()
  const maxCoinsRecur = (l, r) => {
    if (l > r) {
      return 0
    }

    let key = `${l}#${r}`
    if (dp.has(key)) {
      return dp.get(key)
    }
    let res = 0
    for (let i = l; i <= r; i++) {
      let coins = nums[l - 1] * nums[i] * nums[r + 1]
      coins += maxCoinsRecur(l, i - 1)
      coins += maxCoinsRecur(i + 1, r)
      res = Math.max(res, coins)
    }

    dp.set(key, res)
    return res
  }

  return maxCoinsRecur(1, nums.length - 2)
};


var maxCoins = function(nums) {
  const n = nums.length;
  const balloons = [1, ...nums, 1];
  const dp = Array.from({ length: n + 2 }, () => Array(n + 2).fill(0));
  const getMaxCoins = (i, j) => {
    if (dp[i][j] > 0) return dp[i][j];
    let maxCoins = 0;
    for (let k = i; k <= j; k++) {
      const coins = balloons[i - 1] * balloons[k] * balloons[j + 1];
      const leftCoins = getMaxCoins(i, k - 1);
      const rightCoins = getMaxCoins(k + 1, j);
      maxCoins = Math.max(maxCoins, coins + leftCoins + rightCoins);
    }
    dp[i][j] = maxCoins;
    return maxCoins;
  };
  return getMaxCoins(1, n);
};