// https://leetcode.com/problems/maximum-subarray-min-product/

/**
 * @param {number[]} nums
 * @return {number}
 */
const maxSumMinProduct = function (nums) {
  const MOD = 10 ** 9 + 7
  const stack = []

  let result = BigInt(0)
  let pre = 0
  const prefix = [0]
  for (let i = 0; i < nums.length; i++) {
    pre += nums[i]
    prefix[i + 1] = pre
  }
  // console.log(nums)
  // console.log(prefix)

  for (const [i, n] of nums.entries()) {
    let start = i
    while (stack.length > 0 && stack[stack.length - 1][1] > n) {
      const [idx, val] = stack.pop()
      // console.log(idx, val)
      // console.log(i, n)
      const total = BigInt(prefix[i] - prefix[idx])
      console.log(total, prefix[i], prefix[idx])
      const tmp = total * BigInt(val)
      if (result < tmp) result = tmp
      start = idx
    }
    stack.push([start, n])
  }

  while (stack.length > 0) {
    const [idx, val] = stack.pop()
    const total = BigInt(prefix[nums.length] - prefix[idx])
    const tmp = total * BigInt(val)
    if (result < tmp) result = tmp
  }

  return result % BigInt(MOD)
}

const main = () => {
  nums = [1, 2, 3, 2]
  console.log('Max sum min product value is ', maxSumMinProduct(nums))
}

main()
