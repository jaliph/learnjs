// https://leetcode.com/problems/partition-to-k-equal-sum-subsets/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
const canPartitionKSubsets = function (nums, k) {
  nums.sort((a, b) => b - a)

  const sum = nums.reduce((prev, curr) => prev + curr, 0)

  if (sum % k !== 0) {
    return false
  }
  const target = sum / k

  const isPossible = (i, k, setSum, mask) => {
    if (k === 0) {
      return true
    }

    if (setSum === target) {
      return isPossible(0, k - 1, 0, mask)
    }

    for (let j = i; j < nums.length; j++) {
      if (!((mask >> j) & 1) && nums[j] + setSum <= target) {
        if (isPossible(j + 1, k, nums[j] + setSum, (mask | (1 << j)))) {
          return true
        }
      }
    }
    return false
  }

  return isPossible(0, k, 0, 0)
}

const canPartitionKSubsets3 = function (nums, k) {
  nums.sort((a, b) => b - a)

  const sum = nums.reduce((prev, curr) => prev + curr, 0)

  if (sum % k !== 0) {
    return false
  }
  const target = sum / k
  const used = Array(nums.length).fill(false)

  const isPossible = (i, k, subSetSum) => {
    if (k === 0) {
      return true
    }

    if (subSetSum === target) {
      return isPossible(0, k - 1, 0)
    }

    for (let j = i; j < nums.length; j++) {
      if (used[j] || (nums[j] + subSetSum > target)) {
        continue
      }

      used[j] = true
      if (isPossible(j + 1, k, nums[j] + subSetSum)) {
        return true
      }
      used[j] = false
    }
    return false
  }

  return isPossible(0, k, 0)
}

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
const canPartitionKSubsets2 = function (nums, k) {
  nums.sort((a, b) => b - a)

  const sum = nums.reduce((prev, curr) => prev + curr, 0)

  if (sum % k !== 0) {
    return false
  }
  const setSize = sum / k
  const sets = Array(k).fill(0)

  const dp = Array(nums.length).fill(-1)

  const isPossible = (i) => {
    if (i === nums.length) {
      return true
    }

    if (dp[i] != -1) {
      return dp[i]
    }

    for (let j = 0; j < k; j++) {
      if (nums[i] + sets[j] <= setSize) {
        sets[j] += nums[i]
        if (isPossible(i + 1)) {
          dp[i] = true
          return dp[i]
        }
        sets[j] -= nums[i]
      }
    }
    dp[i] = false
    return dp[i]
  }

  return isPossible(0)
}

const main = () => {
  nums = [4, 3, 2, 3, 5, 2, 1], k = 4
  console.log('Can possible do K Partitions. .. ', canPartitionKSubsets(nums, k))

  nums = [1, 2, 3, 4], k = 3
  console.log('Can possible do K Partitions. .. ', canPartitionKSubsets(nums, k))
}

main()
