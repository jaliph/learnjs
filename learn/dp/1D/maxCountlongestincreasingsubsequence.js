// https://leetcode.com/problems/number-of-longest-increasing-subsequence/

/**
 * @param {number[]} nums
 * @return {number}
 */
const findNumberOfLIS = function (nums) {
  const dp = []

  let reslen = 0; let resCount = 0

  for (let i = nums.length - 1; i >= 0; i--) {
    let maxLen = 1; let maxCnt = 1
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] > nums[i]) {
        const [len, count] = dp[j]
        // console.log(j, dp[j])
        if (maxLen < 1 + len) {
          maxLen = 1 + len
          maxCnt = count
        } else if (len + 1 == maxLen) {
          maxCnt += count
        }
      }
    }

    if (reslen < maxLen) {
      reslen = maxLen
      resCount = maxCnt
    } else if (reslen == maxLen) {
      resCount += maxCnt
    }
    dp[i] = [maxLen, maxCnt]
  }

  return resCount
}

const main = () => {
  nums = [1, 3, 5, 4, 7]
  console.log('number of longest increasing subsequences ', findNumberOfLIS(nums))
}

main()
