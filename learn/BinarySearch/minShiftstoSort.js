/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumRightShifts = function (nums) {
  if (nums.length == 1) {
      return 0
  }
  let prev = nums[0]
  const isSorted = (arr) => {
    console.log('check sirt for', arr)
      if (arr.length == 1 || arr.length == 0)
          return 1;

      for (let i = 1; i < arr.length; i++) {
          if (arr[i - 1] > arr[i]) {
              return false
          }
      }
      return true
  }
  for (let i = 1; i < nums.length; i++) {
      if (prev > nums[i]) {
        if (!(isSorted(nums.slice(i))) || (prev < nums[nums.length - 1])) {
            return -1
        } else {
            return nums.length - i
        }
      }
      prev = nums[i]
  }
  return 0
};

const main = () => {
  nums = [12,28,63,56,69,67,83,37,82,70]
  console.log('Min shifts .. ', minimumRightShifts(nums))

}

main()