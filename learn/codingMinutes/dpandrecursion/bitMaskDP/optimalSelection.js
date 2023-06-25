/*

This is a problem from competitive programmer's handbook:
We are given the prices of k products over n days, and we want to buy each product exactly once. However, we are allowed to buy at most one product in a day. What is the minimum total price?
Day 	    0 	1 	2 	3 	4 	5 	6 	7
Product 0 	6 	9 	5 	2 	8 	9 	1 	6
Product 1 	8 	2 	6 	2 	7 	5 	7 	2
Product 2 	5 	3 	9 	7 	3 	5 	1 	4

The Optimal Selection is:

    product 0 on day 3 at price 2,
    product 1 on day 1 at price 2,
    product 2 on days 6 at price 1.

which gives us the total of 5.

*/

const optimalSelection = (prices, days, countofProducts) => {
  // row are mask, and columns are products
  const dp = Array(1 << countofProducts).fill(0).map(() => Array(days).fill(Infinity))

  // base case
  // if 0 selection in the mask , and 0th day, I can't buy anything
  dp[0][0] = 0

  // for each product in the mask, their 0th day prices
  for (let i = 0; i < countofProducts; i++) {
    dp[1 << i][0] = prices[i][0]
  }

  // for all the masks
  for (let mask = 0; mask < 1 << countofProducts; mask++) {
    // days
    for (let d = 1; d < days; d++) {
      // dp[mask][d] - state

      // if not buying
      dp[mask][d] = dp[mask][d - 1]

      // now for the products

      for (let x = 0; x < countofProducts; x++) {
        // if mask contains the product
        if ((mask >> x) & 1) {
          // new mask has no x
          const new_mask = mask ^ (1 << x)

          dp[mask][d] = Math.min(dp[mask][d],
            dp[new_mask][d - 1] + prices[x][d])
        }
      }
    }
  }

  return dp[(1 << countofProducts) - 1][days - 1]
}

const main = () => {
  const prices = [
    [6, 9, 5, 2, 8, 9, 1, 6],
    [8, 2, 6, 2, 7, 5, 7, 2],
    [5, 3, 9, 7, 3, 5, 1, 4]
  ]

  console.log('The minimum cost to buy them is ', optimalSelection(prices, prices[0].length, prices.length))
}

main()
