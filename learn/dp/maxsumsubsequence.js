// non adjacent

const findMaxSumSubsequence = (arr) => {
  let result = Array(arr.length).fill(0)

  result[0] = arr[0]
  result[1] = Math.max(arr[1], arr[0])

  for (let i = 2; i < arr.length; i++) {
    result[i] = Math.max(arr[i], Math.max(result[i - 1], arr[i] + result[i - 2]))
  }
  console.dir(result)
}


let nums1 = [1, 2, 9, 4, 5, 0, 4, 11, 6];
console.log("   The maximum sum is: " + findMaxSumSubsequence(nums1));

let nums2 = [-5, 2, 1, -3, -4, 2, 1, -3, 7];
console.log("   The maximum sum is: " + findMaxSumSubsequence(nums2));


let nums3 = [1, -1, 6, -4, 2, 2];
console.log("   The maximum sum is: " + findMaxSumSubsequence(nums3));