
const unOrderedSet = (min, n) => {
  // base case
  if (n == 0) return 1

  // recur case
  let ans = 0
  for (let i = min; i <= n; i++) {
    ans += unOrderedSet(i, n - i)
  }

  return ans
}

const unorderedSet2 = (min, n) => {
  // base
  if (n == 0) return 1
  if (min == n) return 1 // only 1 way, eg 3, 3
  if (min > n) return 0 // no way possible

  // recur
       // take min or dun take min
  let ans = unorderedSet2(min, n - min) + unorderedSet2(min + 1, n)

  return ans
}

// this is max version of the unorderedSet2
const unorderedSetDP = (n) => {
  const dp = Array(n + 1).fill(0)
  // base case
  dp[0] = 1

  for (let i = 1; i <= n; i++) {
    for (let j = i; j <= n; j++) {
      dp[j] = dp[j] + dp[j - i]
    }
  }
  return dp[n]
}


const main = () => {
  for (let i = 1; i <= 10; i++) {
    // console.log(`The number of unordered ways to count ${i} is `, unOrderedSet(1, i))
    // console.log(`The number of unordered ways to count ${i} is `, unorderedSet2(1, i))
    console.log(`The number of unordered ways to count ${i} is `, unorderedSetDP(i))
  }
}

main()