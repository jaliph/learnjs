//
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const threeSum = function (nums) {
  nums.sort((a, b) => a - b)

  const res = []
  const i = 0
  for (let i = 0; i < nums.length - 2; i++) {
    if (i > 0 && nums[i - 1] == nums[i]) {
      continue
    }
    let l = i + 1; let r = nums.length - 1
    while (l < r) {
      const _3Sum = nums[i] + nums[l] + nums[r]
      if (_3Sum > 0) {
        r--
      } else if (_3Sum < 0) {
        l++
      } else {
        res.push([nums[i], nums[l], nums[r]])
        l++
        while (nums[l] == nums[l - 1] && l < r) l++
      }
    }
  }

  return res
}

const main = () => {
  nums = [-1, 0, 1, 2, -1, -4]
  console.log(' 3 sums are ', threeSum(nums))
}

main()
