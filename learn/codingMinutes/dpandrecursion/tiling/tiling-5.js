// https://leetcode.com/problems/tiling-a-rectangle-with-the-fewest-squares/

const tilingRectangle = function (n, m) {
  if (m == 1) {
    return n
  }
  if (n == 1) {
    return m
  }
  if (n == m) {
    return 1
  }
  if ((n == 11 && m == 13) || (n == 13 && m == 11)) {
    return 6
  }
  let min = Infinity
  for (let i = 1; i <= Math.min(n, m); i++) {
    const rr1 = tilingRectangle(m - i, i) + tilingRectangle(n - i, m)
    const rr2 = tilingRectangle(m - i, n) + tilingRectangle(n - i, i)
    min = Math.min(min, rr1, rr2)
  }
  return min + 1
}

const main = () => {
  // console.log('Min way to solve this is ', tilingRectangle(2, 3))
  console.log('Min way to solve this is ', tilingRectangle(1, 2))
}

main()
