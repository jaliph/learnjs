// https://leetcode.com/problems/sort-integers-by-the-number-of-1-bits/

/**
 * @param {number[]} arr
 * @return {number[]}
*/
var sortByBits = function(arr) {
  const count1s = (n) => {
    let count = 0
    while (n) {
      n = n & (n - 1)
      count++
    }
    return count
  }
  return arr.sort((i, j) => {
    let ci = count1s(i)
    let cj = count1s(j)
    return ci === cj ? i - j : ci - cj
  })
};

const main = () => {
  arr = [0,1,2,3,4,5,6,7,8]
  console.log('Sorted order ', sortByBits(arr))
}

main()