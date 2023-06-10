// https://leetcode.com/problems/house-robber-iv/

const minCapability = function (nums, k) {
  const countOfStolenHouses = (nums, k) => {
    let stolenHouses = 0; let i = 0
    while (i < nums.length) {
      if (nums[i] <= k) {
        i += 2
        stolenHouses++
      } else {
        i++
      }
    }
    return stolenHouses
  }

  let l = Math.min(...nums)
  let r = Math.max(...nums)

  while (l < r) {
    const m = l + Math.floor((r - l) / 2)
    if (countOfStolenHouses(nums, m) >= k) {
      r = m
    } else {
      l = m + 1
    }
  }
  return l
}

const main = () => {
  console.log('Min Capacity is -> ', minCapability([2, 3, 5, 9], 2))
}

main()
