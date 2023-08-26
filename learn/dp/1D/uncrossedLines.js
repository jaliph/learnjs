// https://leetcode.com/problems/uncrossed-lines/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var maxUncrossedLines = function(nums1, nums2) { 
  let prev = Array(nums2.length + 1).fill(0)
  let dp
  for (let i = 0; i < nums1.length; i++) {
    dp = Array(nums2.length + 1).fill(0)
    for (let j = 0; j < nums2.length; j++) {
      if (nums1[i] === nums2[j]) {
        dp[j + 1] = 1 + prev[j]
      } else {
        dp[j + 1] = Math.max(dp[j], prev[j + 1])
      }
    }
    prev = dp
  }
  return prev[nums2.length]
};



var maxUncrossedLines = function(nums1, nums2) { 
  const dp = Array(nums1.length + 1).fill().map(() => Array(nums2.length + 1).fill(0))

  for (let i = 0; i < nums1.length; i++) {
    for (let j = 0; j < nums2.length; j++) {
      if (nums1[i] === nums2[j]) {
        dp[i + 1][j + 1] = 1 + dp[i][j]
      } else {
        dp[i + 1][j + 1] = Math.max(dp[i + 1][j], dp[i][j + 1])
      }
    }
  }
  return dp[nums1.length][nums2.length]
};

var maxUncrossedLinesBrute = function(nums1, nums2) { 
  const dp = new Map()
  const findMax = (i, j) => {
    if (i === nums1.length || j == nums2.length) {
      return 0
    }

    if (dp.has(i + '' + j)) {
      return dp.get(i + '' + j)
    }

    if (nums1[i] === nums2[j]) {
      dp.set(i + '' + j, 1 + findMax(i + 1, j + 1))
    } else {
      dp.set(i + '' + j, Math.max(findMax(i + 1, j), findMax(i, j + 1)))
    }
    return dp.get(i + '' + j)
  }
  return findMax(0, 0)
};

const main = () => {
  nums1 = [1,4,2], nums2 = [1,2,4]
  console.log('Max num of uncrossed lines is ', maxUncrossedLines(nums1, nums2))
}

main()