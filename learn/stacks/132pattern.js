// https://leetcode.com/problems/132-pattern/

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var find132pattern = function(nums) {
  let stack = []

  let currMin = nums[0]
  for (let i = 1; i < nums.length; i++) {
    while (stack.length > 0 && stack[stack.length - 1][0] <= nums[i]) {
      stack.pop()
    }

    if (stack.length > 0 && nums[i] > stack[stack.length - 1][1]) {
      return true
    }
    stack.push([nums[i], currMin])
    currMin = Math.min(currMin, nums[i])
    // console.log(stack)
  }

  return false
};

const main = () => {
  // nums = [1,2,3,4]
  // console.log('132 pattern exists... ? ', find132pattern(nums))

  nums = [3,1,4,2]
  console.log('132 pattern exists... ? ', find132pattern(nums))
}

main()