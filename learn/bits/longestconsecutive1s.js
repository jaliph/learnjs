// https://www.geeksforgeeks.org/length-longest-consecutive-1s-binary-representation/

const longestConsecutive1s = (n) => {
  let count = 0
  while (n) {
    n = n & (n << 1)
    count++
  }
  return count
}

const main = () => {
  n = 0
  console.log('longest consecutive 1s are ', longestConsecutive1s(n))
}

main()
