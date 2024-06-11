// https://leetcode.com/problems/sliding-window-maximum/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
const maxSlidingWindow = function (nums, k) {
  const q = []
  const results = []
  let wStart = 0
  for (let wEnd = 0; wEnd < nums.length; wEnd++) {
    while (q.length && nums[q[q.length - 1]] < nums[wEnd]) {
      q.pop()
    }
    q.push(wEnd)

    if (q[0] < wStart) {
      q.shift()
    }

    if (wEnd >= k - 1) {
      results.push(nums[q[0]])
      wStart++
    }
  }

  return results
}

const main = () => {
  nums = [1, 3, -1, -3, 5, 3, 6, 7], k = 3
  console.log('the sliding window maximum for them is ', maxSlidingWindow(nums, k))
}

main()
