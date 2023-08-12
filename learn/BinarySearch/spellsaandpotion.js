// https://leetcode.com/problems/successful-pairs-of-spells-and-potions/

/**
 * @param {number[]} spells
 * @param {number[]} potions
 * @param {number} success
 * @return {number[]}
 */
var successfulPairs = function(spells, potions, success) {
  potions.sort((a, b) => a - b)
  let pCount = potions.length
  

  const countOfSuccessPairs = (spell) => {
    let l = 0
    let r = pCount

    let mid
    while (l < r) {
      mid = l + ~~((r - l) / 2)
      if (spell * potions[mid] < success) {
        l = mid + 1
      } else {
        r = mid
      }
    }
    return pCount - l
  }
  
  for (let [i, s] of spells.entries()) {
    spells[i] = countOfSuccessPairs(s)
  }

  return spells
};

const main = () => {
  spells = [5,1,3], potions = [1,2,3,4,5], success = 7
  console.log('Pair if spells are ', successfulPairs(spells, potions, success))
}

main()