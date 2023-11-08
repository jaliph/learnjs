// https://leetcode.com/problems/koko-eating-bananas/
/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function(piles, h) {
  let l = 1, r = Math.max(...piles)

  const canEat = (banaSpeed) => {
    let hours = 0
    for (let p of piles) {
      hours += Math.ceil(p / banaSpeed)
    }
    return hours <= h
  }

  let res = r
  let mid
  while (l <= r) {
    mid = l + ~~((r - l) / 2)
    if (canEat(mid)) {
      res = Math.min(res, mid)
      r = mid - 1
    } else {
      l = mid + 1
    }
  }
  return res
};

const main = () => {
  piles = [3,6,7,11], h = 8
  console.log('Min speed to eat all the banaanas within h hours', minEatingSpeed(piles, h))

  piles = [30,11,23,4,20], h = 5
  console.log('Min speed to eat all the banaanas within h hours', minEatingSpeed(piles, h))
}

main()
