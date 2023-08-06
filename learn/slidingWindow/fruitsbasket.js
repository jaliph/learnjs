// https://leetcode.com/problems/fruit-into-baskets/

/**
 * @param {number[]} fruits
 * @return {number}
 */
const fruits_into_baskets = function (fruits) {
  let wStart = 0
  const freqMap = {}
  let maxLength = -Infinity
  for (let wEnd = 0; wEnd < fruits.length; wEnd++) {
    const firstFruit = fruits[wEnd]
    if (!(firstFruit in freqMap)) {
      freqMap[firstFruit] = 0
    }
    freqMap[firstFruit]++
    while (Object.keys(freqMap).length > 2) {
      // console.log('Stuck', wStart, wEnd, freqMap)
      const secondFruit = fruits[wStart]
      freqMap[secondFruit]--
      if (freqMap[secondFruit] === 0) {
        delete freqMap[secondFruit]
      }
      wStart++
    }
    maxLength = Math.max(maxLength, wEnd - wStart + 1)
  }
  return maxLength
}

console.log(`Maximum number of fruits: ${fruits_into_baskets(['A', 'B', 'C', 'A', 'C'])}`)
console.log(`Maximum number of fruits: ${fruits_into_baskets(['A', 'B', 'C', 'B', 'B', 'C'])}`)