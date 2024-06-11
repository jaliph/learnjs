// https://leetcode.com/problems/special-permutations

/**
 * @param {number[]} nums
 * @return {number}
 */
const specialPerm = function (nums) {
  const dp = Array(nums.length).fill().map(() => Array(1 << nums.length).fill(-1))
  const MOD = 10 ** 9 + 7

  const specialPermRecur = (curr, mask) => {
    // base case
    if (mask == (1 << nums.length) - 1) return 1

    if (dp[curr][mask] != -1) {
      return dp[curr][mask]
    }

    let ans = 0
    for (let i = 0; i < nums.length; i++) {
      if (!((mask >> i) & 1)) {
        if (nums[i] % nums[curr] == 0 || nums[curr] % nums[i] == 0) {
          ans = (ans + specialPermRecur(i, mask | (1 << i))) % MOD
        }
      }
    }
    return dp[curr][mask] = ans
  }

  let res = 0

  for (let i = 0; i < nums.length; i++) {
    res = (res + specialPermRecur(i, 1 << i)) % MOD
    // console.log(res)
  }

  return res
}

const main = () => {
  nums = [2, 3, 6]
  console.log('Special Permutations count is ', specialPerm(nums))

  nums = [1, 4, 3]
  console.log('Special Permutations count is ', specialPerm(nums))

  nums = [1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048, 4096, 8192]
  console.log('Special Permutations count is ', specialPerm(nums))
}

main()
