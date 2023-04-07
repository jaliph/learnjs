const minFeeBrute = (steps, n) => {

  const minFeeRecur = (steps, n, i) => {
    if (i < 1) return 0

    let oneJump = minFeeRecur(steps, n, i - 1) + steps[i]
    let twoJump = i - 2 >= 0 ? steps[i - 2] +  minFeeRecur(steps, n, i - 2) : steps[i - 2 + n] +  minFeeRecur(steps, n, i - 2)
    let threeJump = i - 3 >= 0 ? steps[i - 3] +  minFeeRecur(steps, n, i - 3) : steps[i - 3 + n] +  minFeeRecur(steps, n, i - 3)

    return Math.min(Math.min(threeJump, twoJump), oneJump)
  }
  return minFeeRecur(steps, n, n - 1)
}

const minFee = (costs, n) => {
  const dp = Array(n + 1).fill(0)

  dp[1] = costs[0]
  dp[2] = costs[0]

  for (let i = 3; i <= n; i++) {
    let oneStep = cost[i - 1] + dp[i - 1]
    let twoStep = cost[i - 2] + dp[i - 2]
    let threeStep = cost[ - 3] + dp[i - 3]

    dp[i] = Math.min(oneStep, twoStep, threeStep)
  }

  return dp[n]
}


// Driver code 
function main(){
  var inputs = [[1, 2, 5, 2, 1, 2], [2, 3, 4, 5], 
                [1, 100, 1, 1, 1, 100, 1, 1, 100, 1],
                [10, 15, 20], [0, 1, 2, 3, 4, 5, 6, 7, 8]];

  // You can uncomment the lines below and check how this recursive solution causes a time-out
  //  inputs.push([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15,
  //               16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 
  //               29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 
  //               42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 
  //               55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 
  //               68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 
  //               81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 
  //               94, 95, 96, 97, 98, 99]);

  for (var i = 0; i < inputs.length; i++) {
      console.log((i + 1) + ".\tSteps:", inputs[i].length, 
                  "\n\tFee:", (inputs[i]), 
                  "\n\n\tMinimum fee:", minFee(inputs[i],inputs[i].length));

      console.log("-".repeat(100));
  }
}

main();