/**
 * https://leetcode.com/problems/sort-array-by-parity/
 * @param {number[]} nums
 * @return {number[]}
 */
let sortArrayByParity = function (nums) {
  let l = 0
  let r = nums.length - 1

  while (l < r) {
    if ((nums[l] & 1) && (!(nums[r] & 1))) {
      [nums[l], nums[r]] = [nums[r], nums[l]]
      l++
      r--
    }

    if ((!(nums[l] & 1))) {
      l++
    }
    if ((nums[r] & 1)) {
      r--
    }
  }

  return nums
}

const main = () => {
  nums = [3, 1, 2, 4]
  console.log(sortArrayByParity(nums))
}

main()
