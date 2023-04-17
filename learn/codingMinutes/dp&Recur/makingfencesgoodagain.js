// https://codeforces.com/problemset/problem/1221/D

const makeFencesGreatAgain = (fences, costs) => {

  const dp = Array(fences.length).fill(0).map(() => Array(3).fill(Infinity))

  dp[0][0] = 0
  dp[0][1] = costs[0] 
  dp[0][2] = 2 * costs[0]

  // console.log('Before')
  // Print2D(dp)

  for (let i = 1; i < fences.length; i++) {
    for (let j = 0; j < 3; j++) {
      for (let k = 0; k < 3; k++) {
        // like previous 
        if (fences[i - 1] + j != fences[i] + k) {
          dp[i][k] = Math.min(dp[i][k], dp[i - 1][j] + (k * costs[i]))
        }
      }
    }
  }

  return Math.min(
    dp[fences.length - 1][0], 
    dp[fences.length - 1][1], 
    dp[fences.length - 1][2]
  )
}

const Print2D = arr => arr.forEach(o => console.log(...o))

const main = () => {
  const costs = [ [4, 1, 5] ]
  const fences =  [ [2,2,3] ]
  for (let i = 0; i < costs.length; i++) {
    console.log('Min costs for making fences great again -> ', makeFencesGreatAgain(fences[i], costs[i]))
  }
}

main()