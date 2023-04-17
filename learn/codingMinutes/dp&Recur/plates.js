
// https://www.knowsabouts.in/2021/03/round-2020-google-kick-start-plates.html

/*
Dr. Patel has N stacks of plates. Each stack contains K plates. Each plate has a positive beauty value, describing how beautiful it looks.
̉̉̉̉̉̉̉̉̉Dr. Patel would like to take exactly P plates to use for dinner tonight. If he would like to take a plate in a stack, he must also take all of the plates above it in that stack as well.
Help Dr. Patel pick the P plates that would maximize the total sum of beauty values.
What is the maximum number of houses you can buy?

Input
The first line of the input gives the number of test cases, T. T test cases follow. Each test case begins with a line containing the three integers N, K and P. Then, N lines follow. The i-th line contains K integers, describing the beauty values of each stack of plates from top to bottom.

Output
For each test case, output one line containing Case #x: y, where x is the test case number (starting from 1) and y is the maximum total sum of beauty values that Dr. Patel could pick. 
*/

const maxBeautyPlates = (noOfStacks, stackSize, minPlatesTotakes, plates) => {
  const prefix = Array(noOfStacks + 1).fill(0).map(() => Array(stackSize + 1).fill(0))
  Print2D(plates)

  for (let i = 1; i <= noOfStacks; i++ ) {
    for (let j = 1; j <= stackSize; j++) {
      prefix[i][j] += prefix[i][j - 1] + plates[i - 1][j - 1]
    }
  }
  
  Print2D(prefix)

  const dp = Array(noOfStacks + 1).fill(0).map(() => Array(minPlatesTotakes + 1).fill(0))

  for (let i = 1; i <= noOfStacks ; i++) {
    for (let j = 1; j <= minPlatesTotakes; j++) {
      // i  want to fill min plates but can till stack size only
      
      for (let k = 0; k <= Math.min(stackSize, j) ; k++ ) {
        dp[i][j] = Math.max(dp[i][j], prefix[i][k] + dp[i - 1][j - k])
      }
    }
  }

  Print2D(dp)

  return dp[noOfStacks][minPlatesTotakes]
}

const Print2D = arr => arr.forEach(o => console.log(...o))

const main = () => {
  const plates = [
    [10, 10, 100, 30],
    [80, 50, 10, 50]
  ]

  let minPlatesTotakes = 5
  let stackSize = 4
  let noOfStacks = 2
  console.log('Max of the plates can be ', maxBeautyPlates(noOfStacks, stackSize, minPlatesTotakes, plates))
}

main()