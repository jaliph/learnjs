// https://leetcode.com/problems/longest-increasing-subsequence/

/**
 * @param {number[]} nums
 * @return {number}
 */
const lengthOfLIS = function (nums) {
  const ans = []

  const binarySearch = (target) => {
    let l = 0
    let r = ans.length

    let mid
    while (l < r) {
      mid = l + ~~((r - l) / 2)
      if (target > ans[mid]) {
        l = mid + 1
      } else {
        r = mid
      }
    }
    return l
  }

  for (const n of nums) {
    if (n > ans[ans.length - 1]) {
      ans.push(n)
    } else {
      const idx = binarySearch(n)
      // console.log(ans)
      // console.log('Index is ..', idx, ' for ', n)
      ans[idx] = n
      // console.log('after', ans)
    }
  }
  // console.log(ans)
  return ans.length
}

const main = () => {
  nums = [0, 1, 0, 3, 2, 3]
  console.log('LIS with nlogn is ', lengthOfLIS(nums))
}

main()
