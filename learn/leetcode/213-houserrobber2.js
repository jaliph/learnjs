// https://leetcode.com/problems/house-robber-ii/

/**
 * @param {number[]} nums
 * @return {number}
 */
const rob = function(nums) {
  if (nums.length <= 2) {
    return 0
  }

  if (nums.length == 3) {
    return nums[1]
  }

  const l2r = Array(nums.length).fill(0)
  const r2l = Array(nums.length).fill(0)
  
  l2r[0] = nums[0]
  l2r[1] = Math.max(nums[0], nums[1])

  r2l[nums.length - 1] = nums[nums.length - 1]
  r2l[nums.length - 2] = Math.max(nums[nums.length - 1], nums[nums.length - 2])
  
  for (let i = 2; i < nums.length - 1; i++) {
    let j = nums.length - i - 1
    l2r[i] = Math.max(nums[i] + l2r[i - 2], l2r[i - 1])
    r2l[j] = Math.max(nums[j] + r2l[j + 2], r2l[j + 1])
  }

  console.log(l2r)
  console.log(r2l)
  return Math.max(l2r[nums.length - 2], r2l[1])
};


const main = () => {
  let houses = [1,2,3,1]
  console.log('Profit -> ', rob(houses))

  houses = [2,3,2]
  console.log('Profit -> ', rob(houses))

  houses = [200,3,140,20,10]
  console.log('Profit -> ', rob(houses))

}

main()