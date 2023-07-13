// https://www.codechef.com/problems/DIVSUBS

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const subArrayDiv = (nums, k) => {

  // for (let i = 1; i < nums.length; i++) {
  //   nums[i] = nums[i] + nums[i - 1]
  // }
  // for (let i = 0; i < nums.length; i++) {
  //   nums[i] = nums[i] % k
  // }

  let count = 0
  for (let i = 0; i < nums.length; i++) {
    nums[i] = (count + nums[i]) % k
    count = nums[i]
  }

  console.log(nums)

  let map = new Map()
  map.set(0, true) // if 0 comes.. done
  for (let num of nums) {
    if (map.has(num)) {
      return true
    }
    map.set(num, true)
  }

  return false
}

const main = () => {
  nums = [4, 6, 10], k = 3
  console.log('Subarray exists such that it is divisible by k ', subArrayDiv(nums, k))
}

main()