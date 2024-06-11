// https://leetcode.com/problems/max-consecutive-ones-iii/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const longestOnes = function (nums, k) {
  let max = 0
  let countZero = 0
  let wStart = 0
  for (let wEnd = 0; wEnd < nums.length; wEnd++) {
    if (nums[wEnd] == 0) {
      countZero++
    }
    if (countZero <= k) {
      max = Math.max(max, wEnd - wStart + 1)
    } else if (countZero > k) {
      if (nums[wStart] == 0) {
        countZero--
      }
      wStart++
    }
  }
  return max
}

const main = () => {
  nums = [1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0], k = 2
  console.log('longest number of 1s after k flips', longestOnes(nums, k))
}

main()
