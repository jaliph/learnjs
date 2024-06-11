// https://leetcode.com/problems/number-of-sub-arrays-of-size-k-and-average-greater-than-or-equal-to-threshold/

/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} threshold
 * @return {number}
 */
const numOfSubarrays = function (arr, k, threshold) {
  let count = 0
  let wSum = 0
  let wStart = 0
  for (let wEnd = 0; wEnd < arr.length; wEnd++) {
    wSum += arr[wEnd]
    if (wEnd >= k - 1) {
      const avg = (wSum / k)
      if (avg >= threshold) {
        count++
      }
      wSum -= arr[wStart]
      wStart++
    }
  }

  return count
}

const main = () => {
  arr = [2, 2, 2, 2, 5, 5, 5, 8], k = 3, threshold = 4
  console.log('Count of subarrays with avg greather than threshold', numOfSubarrays(arr, k, threshold))

  arr = [11, 13, 17, 23, 29, 31, 7, 5, 2, 3], k = 3, threshold = 5
  console.log('Count of subarrays with avg greather than threshold', numOfSubarrays(arr, k, threshold))
}

main()
