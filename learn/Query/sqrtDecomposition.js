
const findRangeSum = (nums, queries) => {
  const m = ~~(Math.sqrt(nums.length)) + 1
  const b = Array(m).fill(0) // Root segments

  for (const i in nums) {
    b[~~(i / m)] += nums[i]
  }

  const res = []

  for (const q of queries) {
    const l = q[0]; const r = q[1]
    let i = l
    let ans = 0
    while (i <= r) {
      if (i % m === 0 && i + m - 1 <= r) {
        // lies completely inside the [l...r]
        // i % m // start of block if === 0
        // i + m // strat of next block, i + m - 1 is end of the block
        ans += b[i / m]
        i += m
      } else {
        ans += nums[i]
        i++
      }
    }
    res.push(ans)

    // update with x at i
    // /b[i/m] += x - a[i] // increment the extra value in the segment
    // a[i] = x
  }
  return res
}

const main = () => {
  const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9]; const queries = [[1, 1], [0, 1]]
  console.log('Value for each queries is .. ', findRangeSum(nums, queries))
}

main()
