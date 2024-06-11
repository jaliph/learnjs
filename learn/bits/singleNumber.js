// https://leetcode.com/problems/single-number/

/**
 * @param {number[]} nums
 * @return {number}
 */
let singleNumber = function (nums) {
  let i = 0
  for (const num of nums) {
    i = i ^ num
  }
  return i
}

const main = () => {
  nums = [2, 2, 1, 3, 4, 3, 4]
  console.log('The single number is ', singleNumber(nums))
}

main()
