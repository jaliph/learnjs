// https://leetcode.com/problems/capacity-to-ship-packages-within-d-days/

/**
 * @param {number[]} weights
 * @param {number} days
 * @return {number}
 */
let shipWithinDays = function (weights, days) {
  let l = Math.max(...weights); let r = weights.reduce((prev, curr) => prev + curr, 0)

  const canShip = (cap) => {
    let ships = 1
    let currCap = 0

    for (const w of weights) {
      if (currCap + w > cap) {
        ships++
        currCap = 0
      }
      currCap += w
    }
    return ships <= days
  }

  let res = r /// Max value, we will check n see if we can reduce
  let cap
  while (l <= r) {
    cap = l + ~~((r - l) / 2)
    if (canShip(cap)) {
      res = Math.min(res, cap)
      r = cap - 1
    } else {
      l = cap + 1
    }
  }

  return res
}


const main = () => {
  weights = [1, 2, 3, 4, 5], days = 5
  console.log('Min capacity of the ships required is ', shipWithinDays(weights, days))

  weights = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], days = 5
  console.log('Min capacity of the ships required is ', shipWithinDays(weights, days))

  weights = [3, 2, 2, 4, 1, 4], days = 3
  console.log('Min capacity of the ships required is ', shipWithinDays(weights, days))
}

main()
