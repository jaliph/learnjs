
// Given an array, find the average of all subarrays of ‘K’ contiguous elements in it.
// Array: [1, 3, 2, 6, -1, 4, 1, 8, 2], K=5

function find_averages_of_subarrays(K, arr) {
  let results = []
  let windowSum = 0.0
  let windowStart= 0
  for (let windowEnd = 0; windowEnd < arr.length ; windowEnd++) {
    windowSum += arr[windowEnd]

    if (windowEnd >= K - 1) {
      results.push(windowSum / K)
      windowSum = windowSum - arr[windowStart]
      windowStart++
    }
  }
  return results
}

const result = find_averages_of_subarrays(5, [1, 3, 2, 6, -1, 4, 1, 8, 2]);
console.log(`Averages of subarrays of size K: ${result}`);


