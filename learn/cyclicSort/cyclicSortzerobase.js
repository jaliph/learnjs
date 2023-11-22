function cyclic_sort (nums) {
  let i = 0
  while (i < nums.length) {
    j = nums[i]
    if (nums[i] !== nums[j]) {
      [nums[i], nums[j]] = [nums[j], nums[i]]
    } else {
      i++
    }
  }
  return nums
}

console.log(cyclic_sort([0, 1, 5, 4, 2]))

