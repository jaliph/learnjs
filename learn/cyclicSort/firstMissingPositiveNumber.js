// https://leetcode.com/problems/first-missing-positive/

/**
 * MEX
 * @param {number[]} nums
 * @return {number}
 */
let firstMissingPositive = function (nums) {
  nums = nums.map(o => o < 0 ? 0 : o)

  for (let i = 0; i < nums.length; i++) {
    const num = Math.abs(nums[i])
    if (num > 0) {
      const index = num - 1
      if (nums[index] == 0) {
        nums[index] = -1 * (nums.length + 1)
      } else if (nums[index] > 0) {
        nums[index] = -1 * nums[index]
      }
    }
  }
  console.log(nums)

  for (let i = 1; i < nums.length + 1; i++) {
    if (nums[i - 1] >= 0) {
      return i
    }
  }

  return nums.length + 1
}

const main = () => {
  nums = [3, 4, -1, 1]
  console.log('the first missing positive number ', firstMissingPositive(nums))

  nums = [1, 2, 0]
  console.log('the first missing positive number ', firstMissingPositive(nums))
}

main()
