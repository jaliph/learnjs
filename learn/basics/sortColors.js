// https://leetcode.com/problems/sort-colors/


/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// var sortColors = function(nums) {
//   let buckets = nums.reduce((prev, key) => {
//     prev.set(key, (prev.get(key) || 0) + 1)
//     return prev
//   }, new Map())

//   let colors = Array.from(buckets.keys()).sort()

//   let i = 0
//   for (let color of colors) {
//     let count = buckets.get(color)
//     while (count-- > 0) {
//       nums[i++] = color
//     }
//   }

//   return nums
// };

// Dutch National Flag
var sortColors = function(nums) {
  let p0 = 0
  let curr = 0
  let p2 = nums.length - 1

  let tmp

  while (curr < p2) {
    if (nums[curr] === 0) {
      tmp = nums[p0]
      nums[p0++] = nums[curr]
      nums[curr++] = tmp
    } else if (nums[curr] === 2) {
      tmp = nums[curr]
      nums[curr] = nums[p2]
      nums[p2--] = tmp
    } else {
      curr++
    }
  }

  return nums
};


const main = () => {
  nums = [2,0,2,1,1,0]
  console.log('Bucket sort .. ', sortColors(nums))
}

main()