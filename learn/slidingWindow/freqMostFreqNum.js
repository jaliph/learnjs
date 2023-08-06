// https://leetcode.com/problems/frequency-of-the-most-frequent-element/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxFrequency = function(nums, k) {
  nums.sort((a, b) => a - b)
  let wSum = 0
  let wStart = 0
  let max = 0
  for (let wEnd = 0; wEnd < nums.length; wEnd++) {
    wSum += nums[wEnd]

    while ((nums[wEnd] * (wEnd - wStart + 1)) - wSum > k) {
      console.log('came in', wEnd, wStart)
      wSum -= nums[wStart]
      wStart++
    }
    
    max = Math.max(max, wEnd - wStart + 1)
    console.log(max)
  }
  return max
};

const main = () => {
  // nums = [1,2,4], k = 5
  // console.log('Freq of the most frequent bit ', maxFrequency(nums, k))

  // nums = [1,4,8,13], k = 5
  // console.log('Freq of the most frequent bit ', maxFrequency(nums, k))

  nums = [3,9,6], k = 2
  console.log('Freq of the most frequent bit ', maxFrequency(nums, k))
}



main()