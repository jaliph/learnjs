/**
 * @param {number[]} nums
 * @return {boolean}
 */
let canJump = function (nums) {
  const dp = Array(nums.length).fill(-1)
  const canJumpRecur = (i) => {
    if (i >= nums.length - 1) {
      return true
    }

    if (dp[i] != -1) {
      return dp[i]
    }

    let res = false
    for (let j = 1; j <= nums[i]; j++) {
      res = res | canJumpRecur(Math.min(nums.length - 1, (i + j)))
    }
    dp[i] = res
    return res
  }

  return canJumpRecur(0)
}

/**
 * @param {number[]} nums
 * @return {boolean}
 */
let canJump = function (nums) {
  let goal = nums.length - 1

  for (let i = nums.length - 1; i >= 0; i--) {
    if (nums[i] + i >= goal) {
      goal = i
    }
  }

  return goal === 0
}

const main = () => {
  nums = [2, 3, 1, 1, 4]
  console.log('Can i jump to end.. ', canJump(nums))
}

main()
