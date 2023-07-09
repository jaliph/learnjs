// https://leetcode.com/problems/largest-number/

/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function(nums) {
  nums.sort((a, b) => parseInt(a + '' +  b) > parseInt(b + '' + a) ? -1 : 1)

  return nums.join('')
};

const main = () => {
  nums = [10,2]
  console.log('largest number formed by them are ', largestNumber(nums))

  nums = [3,30,34,5,9]
  console.log('largest number formed by them are ', largestNumber(nums))
}

main()