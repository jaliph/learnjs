/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const minOperations = function (nums, k) {
  const set = new Set(Array(k).fill(0).map((v, i) => i + 1))
  for (let i = nums.length - 1; i >= 0; i--) {
    set.delete(nums[i])
    if (set.size === 0) {
      return nums.length - i
    }
  }
  return nums.length
}

nums = [3, 2, 5, 3, 1], k = 3
console.log(minOperations(nums, k))

nums = [3, 1, 5, 4, 2], k = 5
console.log(minOperations(nums, k))
