// https://leetcode.com/problems/triples-with-bitwise-and-equal-to-zero/description/

/**
 * @param {number[]} nums
 * @return {number}
 */
let countTriplets = function (nums) {
  let count = 0
  const map = {}
  for (const n1 of nums) {
    for (const n2 of nums) {
      map[n1 & n2] = (map[n1 & n2] || 0) + 1
    }
  }

  for (const n3 of nums) {
    for (const t in map) {
      const n1n2 = parseInt(t)
      if ((n3 & n1n2) === 0) {
        count += map[t]
      }
    }
  }
  return count
}

const main = () => {
  nums = [2, 1, 3]
  console.log('Count of all the triplets where the a 0 b 0 c ==0 ', countTriplets(nums))

  nums = [0, 0, 0]
  console.log('Count of all the triplets where the a 0 b 0 c ==0 ', countTriplets(nums))
}

main()
