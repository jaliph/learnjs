// https://leetcode.com/problems/new-21-game

/**
 * @param {number} n
* @param {number} k
* @param {number} maxPts
* @return {number}
*/
var new21Game = function(n, k, maxPts) {
 if (k == 0) {
   return 1
 }

 let windowSum = 0

 for (let i = k; i < (k + maxPts); i++) {
   if (i <= n) {
     windowSum++
   }
 }

 const dp = new Map()
 for (let i = k - 1; i >= 0; i--) {
   dp.set(i, windowSum / maxPts)

   let remove = 0

   if (i + maxPts <= n) {
     remove = (dp.get(i + maxPts) || 1)
   }
   windowSum += dp.get(i)
   windowSum -= remove
 }

 return dp.get(0)
};


var new21GameBrute = function(n, k, maxPts) {
  let cache = {}

  const calcRecur = (score) => {
    if (score >= k) {
      if (score <= n) {
        return 1
      } else {
        return 0
      }
    }

    if (cache[score] >= 0) {
      return cache[score]
    }

    let prob = 0
    for (let i = 1; i <= maxPts; i++) {
      prob += calcRecur(score + i)
    }

    cache[score] = prob / maxPts
    return cache[score]
  }
}


