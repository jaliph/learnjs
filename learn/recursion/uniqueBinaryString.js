
/**
 * @param {string[]} nums
 * @return {string}
 */
const findDifferentBinaryString = function (nums) {
  const numSet = new Set(nums)
  // console.log(numSet)
  const len = nums[0].length

  const recur = (i, str) => {
    // base
    if (i == len) {
      // console.log(str)
      if (numSet.has(str)) {
        return false
      } else {
        return str
      }
    }

    // recur
    for (let j = 0; j < 2; j++) {
      let s
      if (j & 1) {
        s = recur(i + 1, str + '0')
        if (s) {
          return s
        }
      } else {
        s = recur(i + 1, str + '1')
        if (s) {
          return s
        }
      }
    }
  }

  return recur(0, '')
}

const main = () => {
  nums = ['01', '10']
  console.log('Unique Binary String... ', findDifferentBinaryString(nums))

  nums = ['111', '011', '001']
  console.log('Unique Binary String... ', findDifferentBinaryString(nums))
}

main()
