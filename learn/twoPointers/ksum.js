// https://leetcode.com/problems/4sum/
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
const fourSum = function (nums, target) {
  nums.sort((a, b) => a - b)
  const quad = []
  const result = []
  const kSum = (k, index, target) => {
    // recur
    if (k != 2) {
      for (let i = index; i < nums.length - k + 1; i++) {
        // duplicate check
        if (i > index && nums[i] == nums[i - 1]) {
          continue
        }
        quad.push(nums[i])
        kSum(k - 1, i + 1, target - nums[i])
        quad.pop()
      }
      return
    }

    // base
    // 2 sum
    let l = index; let r = nums.length - 1
    while (l < r) {
      if (nums[l] + nums[r] > target) {
        r--
      } else if (nums[l] + nums[r] < target) {
        l++
      } else {
        result.push([...quad, nums[l], nums[r]])
        l++
        while (nums[l] == nums[l - 1] && l < r) {
          l++
        }
      }
    }
  }

  kSum(4, 0, target)
  return result
}

const main = () => {
  nums = [1, 0, -1, 0, -2, 2], target = 0
  console.log('Quad list is ', fourSum(nums, target))

  nums = [2, 2, 2, 2, 2], target = 8
  console.log('Quad list is ', fourSum(nums, target))
}

main()
