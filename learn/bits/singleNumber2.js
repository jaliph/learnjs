// https://leetcode.com/problems/single-number-ii/description/

/**
 * @param {number[]} nums
 * @return {number}
 */
const singleNumber = function (nums) {
  const sums = Array(32).fill(0)

  // find sums for iterating the whole loop
  for (const num of nums) {
    for (let i = 0; i < 32; i++) {
      if (num & (1 << i)) {
        sums[i]++
      }
    }
  }

  for (let i = 0; i < 32; i++) {
    sums[i] = sums[i] % 3
  }

  let num = 0
  for (let i = 0; i < 32; i++) {
    num += (sums[i] * (1 << i))
  }

  return num
}

const main = () => {
  nums = [0, 1, 0, 1, 0, 1, 99]
  console.log('Found the single number ', singleNumber(nums))
}

main()
