// https://leetcode.com/problems/next-permutation/description/

// https://dev.to/seanpgallivan/solution-next-permutation-421n

// const nextPermutation = function (N) {
//   const swap = (i, j) =>
//     [N[i], N[j]] = [N[j], N[i]]

//   const len = N.length - 1; let i
//   for (i = len - 1; N[i] >= N[i + 1];) i--
//   let j = i + 1; let k = len
//   console.log(i)
//   while (j < k) swap(j++, k--)
//   if (i >= 0) {
//     for (j = i + 1; N[i] >= N[j];) j++
//     swap(i, j)
//   }
// }

// console.log(nextPermutation([1, 2, 2, 2, 3]))
// console.log(nextPermutation([1, 5, 1]))
// console.log(nextPermutation([1, 1, 5]))

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
  const reverse = (l, r) => {
    while (l < r) {
      let temp = nums[l]
      nums[l] = nums[r]
      nums[r] = temp
      l++
      r--
    }
  }
  
  let i
  for (i = nums.length - 2; i >= 0; i--) {
    if (nums[i] < nums[i + 1]) {
      break
    }
  }

  if (i < 0) {
    nums.reverse()
  } else {
    for (let j = nums.length - 1; j > i; j--) {
      if (nums[j] > nums[i]) {
        let temp = nums[j]
        nums[j] = nums[i]
        nums[i] = temp
        break
      }
    }
    reverse(i + 1, nums.length - 1)
  }
};


const main = () => {
  nums = [1,2,3]
  nextPermutation(nums)
  console.log('next smalled permutation is ', nums)

  nums = [1, 2, 3, 5, 4]
  nextPermutation(nums)
  console.log('next smalled permutation is ', nums)

  nums = [1, 2, 3, 4]
  nextPermutation(nums)
  console.log('next smalled permutation is ', nums)
}

main()