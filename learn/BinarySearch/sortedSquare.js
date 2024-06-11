
/**
 * @param {number[]} nums
 * @return {number[]}
 */
const sortedSquares2 = function (nums) {
  const binaryInsert = (arr, data) => {
    let l = 0
    let r = arr.length
    let mid
    while (l < r) {
      mid = l + ~~((r - l) / 2)
      if (data > arr[mid]) {
        l = mid + 1
      } else {
        r = mid
      }
    }

    arr.splice(l, 0, data)
  }

  const res = []
  let sqr
  for (const n of nums) {
    sqr = n * n
    binaryInsert(res, sqr)
  }
  return res
}

/**
 * @param {number[]} nums
 * @return {number[]}
 */
const sortedSquares = function (nums) {
  let l = 0
  let r = nums.length - 1
  const res = Array(nums.length).fill()
  let w = nums.length - 1
  while (l <= r) {
    if (Math.abs(nums[l]) < Math.abs(nums[r])) {
      res[w] = nums[r] * nums[r]
      w--
      r--
    } else {
      res[w] = nums[l] * nums[l]
      w--
      l++
    }
    // console.log(l, r, res)
  }
  return res
}

const main = () => {
  arr = [-4, -1, 0, 3, 10]
  console.log(' Sorted squares .... ', sortedSquares(arr))
}

main()
