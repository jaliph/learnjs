
/**
 * 
 * @param {*} weights 
 * @param {*} colors 
 * @param {*} n 
 * @param {*} n - Minimum number of color required
 * @param {*} capacity 
 * @returns 
 */
const colorFulKnapSack = (weights, colors, n, minColor, capacity) => {
  // make a map of colors and their weights
  let colorW = {}
  for (let i = 0; i < colors.length; i++) {
    if (!colorW[colors[i]]) colorW[colors[i]] = []
    colorW[colors[i]].push(weights[i])
  }

  for (let i = 1; i < minColor; i++) {
    if (!colorW[i]) colorW[i] = []
  }

  console.log(colorW)
  const dp = Array(minColor).fill(0).map(() => Array(capacity + 1).fill(0))

  const firstColorWeights = colorW[Object.keys(colorW)[0]]
  for (let i = 0; i < firstColorWeights.length; i++ ) {
    dp[0][firstColorWeights[i]]++
  }
  for (let i = 1; i < minColor; i++) {
    for (let j = 0 ; j <= capacity; j++) {
      if (dp[i - 1][j] > 0) {
        // add the colorWeight if previous i - 1 is 1
        colorW[i].forEach((colorweight) =>{
          // console.log(colorweight)
          if (j + colorweight <= capacity) {
            dp[i][j + colorweight]++
          }
        })
      }
    }
  }

  // Printing
  // dp.forEach(v => console.log(...v))

  // final to find out the ans
  let max = 0
  for (let j = 1; j <= capacity; j++) {
    if (dp[Object.keys(colorW).length - 1][j]) {
      max = Math.max(max, j)
    }
  }

  return max === 0 ? -1 : (capacity - max)
}


const main = () => {
  // console.log(colorFulKnapSack([2,3,4,2,4,5,2,3], [1,1,1,2,2,2,3,3], 8, 3, 13))
  // console.log(colorFulKnapSack([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20], [1,1,1,2,2,2,3,3,3,4,4,4,5,5,5,6,6,6,7,7], 20, 10, 100))
  // console.log(colorFulKnapSack([2,3,4,5,5,4,3,2,1,10], [1,2,3,4,5,6,1,2,3,4], 10, 6, 33))
  console.log(colorFulKnapSack([57,40,51,41,73,74,66,51,64,54,48,47,60,58,73,60,38,73,66,47,48,55,38,63,59,47,57,57,53,40,45,59,70,43,38,56,47,59,68,58,50,73,55,64,44,60,37,75,71,75,45,63,65,60,47,65,39,71,36,73,44,35,48,72,54,60,45,58,60,35,58,74,59,57,43,64,37,50,44,75,73,69,44,39,36,74,62,43,70,49,35,69,64,52,41,73,58,42,38,56], 
    [43,39,26,23,9,13,20,27,2,22,29,35,41,19,32,30,8,42,4,40,3,44,37,45,16,17,18,6,36,11,10,5,28,34,12,48,25,47,46,7,21,33,50,49,38,31,24,15,1,14,6,20,12,25,46,27,3,47,2,9,1,37,8,32,5,38,16,38,39,23,39,37,2,48,19,44,32,15,49,17,20,47,27,36,17,38,21,11,33,35,15,45,21,28,47,10,29,10,30,5], 100, 50, 3070))
}

main()