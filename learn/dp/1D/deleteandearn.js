// https://leetcode.com/problems/delete-and-earn/

/**
 * @param {number[]} nums
 * @return {number}
 */
const deleteAndEarn = function (nums) {
  const counter = nums.reduce((prev, curr) => {
    prev.set(curr, (prev.get(curr) || 0) + 1)
    return prev
  }, new Map())

  nums = [...counter.keys()].sort((a, b) => a - b)

  let prev1 = 0; let prev2 = 0
  let currScore
  for (const [i, n] of nums.entries()) {
    currScore = n * counter.get(n)
    if (i > 0 && nums[i - 1] + 1 === nums[i]) {
      const temp = prev1
      prev1 = Math.max(currScore + prev2, prev1)
      prev2 = temp
    } else {
      const temp = prev1
      prev1 = currScore + prev1
      prev2 = temp
    }
  }

  return prev1
}

const main = () => {
  nums = [3, 4, 2]
  console.log('Max score with delete and earn is ', deleteAndEarn(nums))

  nums = [2, 2, 3, 3, 3, 4]
  console.log('Max score with delete and earn is ', deleteAndEarn(nums))
}

main()
