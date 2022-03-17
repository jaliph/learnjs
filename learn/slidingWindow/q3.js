function smallest_subarray_sum(s, arr) {
  let wStart = 0, wSum = 0
  let minLength = Infinity
  for(let wEnd = 0; wEnd < arr.length; wEnd++) {
    wSum += arr[wEnd]
    while (wSum >= s) {
      minLength = Math.min(minLength, wEnd - wStart + 1)
      wSum -= arr[wStart]
      wStart++
    }
  }
  if (minLength === Infinity) {
    return 0
  }
  return minLength
}

console.log(`Smallest subarray length: ${smallest_subarray_sum(7, [2, 1, 5, 2, 3, 2])}`);
console.log(`Smallest subarray length: ${smallest_subarray_sum(7, [2, 1, 5, 2, 8])}`);
console.log(`Smallest subarray length: ${smallest_subarray_sum(8, [3, 4, 1, 1, 6])}`);