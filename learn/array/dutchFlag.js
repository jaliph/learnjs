

const arr = [1,1,2,2,2,0,0,0,0]

const solveDutchFlag = (nums) => {
  let low = 0, high = nums.length - 1
  let pivot = 1
  mid = 0


  while (mid <= high) {
    if (nums[mid] < pivot) {
      swap(nums, mid, low)
      mid++
      low++
    } else if (nums[mid] > pivot) {
      swap(nums, mid, high)
      high--
    } else {
      mid++
    }
  }
}

const swap = (nums, i, j) => { 
  [nums[i], nums[j]]= [nums[j], nums[i]]
}

solveDutchFlag(arr)
console.log(arr)