// Given an array containing 0s and 1s, if you are allowed to replace no more than ‘k’ 0s with 1s, find the length of the longest contiguous subarray having all 1s.

// Input: Array=[0, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1], k=2
// Output: 6
// Explanation: Replace the '0' at index 5 and 8 to have the longest contiguous subarray of 1s having length 6.

const length_of_longest_substring = function(arr, k) {
  

  let wStart = 0
  let maxOnes = 0
  let maxLength = 0

  for (let wEnd = 0; wEnd < arr.length; wEnd++) {
    if(arr[wEnd] == 1) {
      maxOnes++
    }

    while((wEnd - wStart + 1 - maxOnes) > k) {
      if (arr[wStart] == 1) {
        maxOnes--
      }
      wStart++
    }

    maxLength = Math.max(maxLength, wEnd - wStart + 1)
  }

  return maxLength;
};

console.log(length_of_longest_substring([0, 1, 0, 0, 1, 1, 0, 1, 1, 0, 0, 1, 1], 3))