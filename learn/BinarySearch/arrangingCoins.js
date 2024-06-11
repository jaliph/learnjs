// https://leetcode.com/problems/arranging-coins/

/**
 * @param {number} n
 * @return {number}
 */
let arrangeCoins = function (n) {
  let l = 1
  let r = n
  let mid
  let res = 0
  while (l <= r) {
    mid = l + ~~((r - l) / 2)
    coins = (mid / 2) * (mid + 1)
    if (coins > n) { // i dont have that much coins so decrease mid
      r = mid - 1
    } else {
      res = Math.max(mid, res)
      l = mid + 1
    }
  }
  return res
}

const main = () => {
  n = 5
  console.log('max number of steps that can be made ', arrangeCoins(5))
}

main()
