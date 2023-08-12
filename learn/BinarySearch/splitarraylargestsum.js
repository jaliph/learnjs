// https://leetcode.com/problems/split-array-largest-sum/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var splitArray = function(nums, k) {
  let l = Math.max(...nums), r = nums.reduce((prev, curr) => prev + curr, 0)
  
  let res = r
  let mid

  const canSplit = (maxSplit) => {
    let currSum = 0
    let splitCount = 1
    for (let n of nums) {
      if (currSum + n > maxSplit) {
        splitCount++
        currSum = 0
      }
      currSum += n
    }

    return splitCount <= k
  }

  while (l <= r) {
    mid = l + ~~((r - l) / 2)
    if (canSplit(mid)) {
      res = Math.min(res, mid)
      r = mid - 1
    } else {
      l = mid + 1
    }
  }

  return res
};

const main = () => {
  nums = [7,2,5,10,8], k = 2
  console.log('Ans is ', splitArray(nums, k))
}

main()



var splitArray2 = function(nums, k) {
  const splitArrayRecur = (i, k) => {
    // base
    if (i == nums.length) {
      if (k == 0) { 
        return 0
      } else {
        return Infinity
      }
    }

    if (k <= 0) {
      return Infinity
    }


    // recur
    let ans = Infinity, sum = 0
    for (let j = i; j < nums.length; j++) {
      sum += nums[j]
      ans = Math.min(ans, Math.max(sum, splitArrayRecur(j + 1, k - 1)))
    }
    return ans
  }
  return splitArrayRecur(0, k)
};