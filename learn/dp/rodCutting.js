
function rodCuttingBrute (lengths, prices, n) {
  const rodCuttingRecur = (lengths, prices, n, i) => {
    if (i === prices.length) return 0

    if (n === 0) return 0

    if (lengths[i] > n) {
      return rodCuttingRecur(lengths, prices, n, i + 1)
    }
    let p1 = 0; let p2 = 0

    p1 = prices[i] + rodCuttingRecur(lengths, prices, n - lengths[i], i)
    p2 = rodCuttingRecur(lengths, prices, n, i + 1)

    return Math.max(p1, p2)
  }
  return rodCuttingRecur(lengths, prices, n, 0)
}

const rodCutting = (lengths, prices, n) => {
  const t = Array(prices.length).fill(0).map(() => Array(n + 1).fill(0))

  for (let j = 0; j <= n; j++) {
    // t[0][j] = lengths[0] <= j ? Math.floor(j / lengths[0]) * prices[0] : 0
    if (lengths[0] <= j) {
      t[0][j] = prices[0] + t[0][j - lengths[0]]
    }
  }

  console.log(t)

  for (let i = 1; i < lengths.length; i++) {
    for (let j = 1; j <= n; j++) {
      if (lengths[i] > j) {
        t[i][j] = t[i - 1][j]
      } else {
        let p1 = 0; let p2 = 0
        p1 = t[i - 1][j]
        p2 = t[i][j - lengths[i]] + prices[i]
        t[i][j] = Math.max(p1, p2)
      }
    }
  }
  return t[prices.length - 1][n]
}

// Driver code
function main () {
  const n = [3, 4, 8, 4, 6]
  const lengths = [
    [1, 2, 3],
    [2, 3, 4],
    [2, 1],
    [4, 3, 2, 1],
    [1, 2, 5, 4, 6]
  ]
  const prices = [
    [7, 3, 8],
    [2, 7, 8],
    [20, 10],
    [1, 1, 1, 6],
    [2, 8, 9, 10, 11]
  ]

  // You can uncomment the lines below and check how this recursive solution causes a time-out

  // n.push(100);
  // lengths.push([...Array(100).keys()].map((x) => x + 1));
  // prices.push([...Array(200).keys()].map((x) => x + 1).filter((x) => x % 2 === 1));

  for (let i = 0; i < n.length; i++) {
    console.log(`${i + 1}.\trod length: `, n[i])
    console.log('\tlengths: [' + lengths[i].join(', ') + ']')
    console.log('\tprices: [' + prices[i].join(', ') + ']')
    console.log('\tThe maximum profit found: ', rodCuttingBrute(lengths[i], prices[i], n[i]))
    console.log('\tThe maximum profit found: ', rodCutting(lengths[i], prices[i], n[i]))
    console.log('-'.repeat(100))
  }
}

main()

// Revison
function RodCutting (lengths, prices, n) {
  const dp = Array(prices.length + 1).fill(0).map(() => Array(n + 1).fill(0))

  for (let i = 1; i <= prices.length; i++) {
    for (let j = 1; j <= n; j++) {
      if (lengths[i - 1] > j) {
        dp[i][j] = dp[i - 1][j]
      } else {
        const c1 = dp[i - 1][j]
        const c2 = prices[i - 1] + dp[i][j - lengths[i - 1]]
        dp[i][j] = Math.max(c1, c2)
      }
    }
  }

  let x = prices.length
  let y = n
  while (x > 0 && y > 0) {
    if (dp[x - 1][y] == dp[x][y]) {
      x--
    } else if (dp[x - 1][y] >= prices[x - 1] + dp[x][y - lengths[x - 1]]) {
      x--
    } else {
      console.log('including item ' + x + ' with value = ' + prices[x - 1] + ' and length = ' + lengths[x - 1])
      y -= lengths[x - 1]
    }
  }
  return dp[prices.length][n]
}
