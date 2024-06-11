
const binaryInsert = (nums, val) => {
  let l = 0
  let r = nums.length - 1
  let mid
  while (l <= r) {
    mid = l + Math.floor((r - l) / 2)
    if (nums[mid] === val) {
      l = mid
      break
    } else if (nums[mid] > val) {
      l = mid + 1
    } else {
      r = mid - 1
    }
  }
  nums.splice(l, 0, val)
}

nums = []
binaryInsert(nums, 2)
binaryInsert(nums, 1)
binaryInsert(nums, 4)
binaryInsert(nums, 2)
binaryInsert(nums, 3)
console.log(nums)
