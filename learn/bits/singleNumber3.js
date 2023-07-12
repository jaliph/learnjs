// https://leetcode.com/problems/single-number-iii/description/
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function(nums) {
  let xorEd = 0
  for (let num of nums) {
    xorEd = xorEd ^ num
  }

  let setBit
  for (let i = 0; i < 32; i++) {
    if (xorEd & (1 << i)) {
      setBit = i
      break
    }
  }

  // console.log(setBit)
  let group1 = []
  for (let num of nums) {
    if ((num >> setBit) & 1) {
      group1.push(num)
    }
  }

  let single = 0
  for (let num of group1) {
    single = single ^ num
  }


  return [single, xorEd ^ single]
};

const main = () => {
  nums = [1,2,1,3,2,5]
  console.log('Found the duel numbers ', singleNumber(nums))
}

main()

