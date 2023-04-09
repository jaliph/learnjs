
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function (nums, target) {
  const m = new Map()
  for (const i in nums) {
    const n = nums[i]
    if (m.has(target - n)) {
      return [m.get(target - n), i]
    } else {
      m.set(n, i)
    }
  }
  return [0, 0]
}

console.log(twoSum([2, 7, 11, 15], 9))
