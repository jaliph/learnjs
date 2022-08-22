var maxSubArray = function(nums) {
  let maxEndingHere = nums[0]
  let maxSoFar = nums[0]
  
  let start = 0, s = 0, e = 0
  for (let i = 1; i < nums.length; i++) {
    maxEndingHere += nums[i]
    if (maxSoFar < maxEndingHere) {
      maxSoFar = maxEndingHere
      start = s
      end = i
    }

    if (maxEndingHere < 0) {
      maxEndingHere = 0
      s = i + 1
    }
  }
  return [maxSoFar, start, end]
};


console.log(maxSubArray([-2, -3, 4, -1, -2, 1, 5, -3]))