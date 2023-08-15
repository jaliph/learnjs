// https://leetcode.com/problems/find-the-duplicate-number/

/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
  let slow = 0
  let fast = 0

  while (true) {
    slow = nums[slow]
    fast = nums[nums[fast]]
    if (slow === fast) {
      break
    }
  }

  let head = 0
  while (true) {
    head = nums[head]
    slow = nums[slow]
    if (slow === head) {
      break
    }
  }

  return slow
};


const main = () => {
  nums = [1,3,4,2,2]
  console.log('Duplicate number in the array is .. ', findDuplicate(nums))
}

main()