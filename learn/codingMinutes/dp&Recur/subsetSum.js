
const subsetSum = (arr, sum) => {
  let dp = Array(arr.length + 1).fill(0).map(() => Array(sum + 1).fill(false))

  // // for 0 as sum, 1 way to achieve is dont use anything from array
  // for (i = 0; i <= arr.length; i++) {
  //   dp[i][0] = true
  // }
  // // dp[0][0] = true

  // for (let i = 1; i <= arr.length; i++) {
  //   for (let j = 0 ; j <= sum; j++) {
  //     if (arr[i - 1] > j) {
  //       dp[i][j] = dp[i - 1][j]
  //     }
  //     else {
  //       dp[i][j] = dp[i - 1][j] || dp[i - 1][j - arr[i - 1]]
  //     }
      
  //   }
  // }


  dp[0][0] = true  
  for(let i = 1; i <= arr.length; i++) {
    for (let j = 0; j <= sum; j++) {   // start j from 0 as first row was not filled
      
      dp[i][j] = dp[i - 1][j]

      if (j - arr[i - 1] >= 0) {   // check is same as j >= arr[i - 1]
        dp[i][j] |= dp[i - 1][j - arr[i - 1]]
      }
    }
  }

  const dp2 = Array(arr.length + 1).fill(0).map(() => Array(sum + 1).fill(0))

  dp2[0][0] = 1

  for (let i = 1; i <= arr.length ; i++) {
    for (let j = 0; j <= sum; j++) {
      dp2[i][j] = dp2[i - 1][j]

      if (arr[i - 1] <= j) {
        dp2[i][j] += dp2[i - 1][j - arr[i - 1]]
      }
    }
  }

  const dp3 = Array(2).fill(0).map(() => Array(sum + 1).fill(0))

  dp3[0][0] = 1

  for (let i = 1; i <= arr.length; i++) {
    for (let j = 0; j <= sum; j++) {
      dp3[1][j] = dp3[0][j]

      if (arr[i - 1] <= j) {
        dp3[1][j] += dp3[0][j - arr[i - 1]]
      }
    }

    // copy the last row to first row
    for (let j = 0; j <= sum; j++) {
      dp3[0][j] = dp3[1][j]
    }
  }

  const dp4 = Array(sum + 1).fill(0)
  dp4[0] = 1

  for (let i = 1; i <= arr.length; i++) {
    for (let j = sum; j >= 0; j--) {
      if (arr[i - 1] <= j) {
        // if (dp4[j - arr[i - 1]] > 0) {
        //   console.log(arr[i - 1])
        // }
        dp4[j] += dp4[j - arr[i - 1]]
      }
    }
  }
  

  return {count: dp2[arr.length][sum], isPossible: dp[arr.length][sum], opt1: dp3[1][sum], opt2: dp4[sum]}  
}


// Driver Code
function main(){
  let input_arr = [[3, 5, 8], [2, 4, 7], [2, 3, 5], [1, 2, 3, 7], [10, 20, 23, 34]];
  let total = [13, 8, 5, 6, 57];

  // You can uncomment the lines below and check how this recursive solution causes a time-out

  // input_arr.push([0, 1, 4, 6, 7, 8, 9, 10, 11, 16, 17, 18, 21, 23, 25, 26, 28, 34,
  //      35, 36, 38, 39, 40, 41, 42, 44, 47, 50, 51, 54, 55, 61, 62, 63, 65, 69, 71, 72, 
  //      73, 75, 76, 78, 79, 80, 82, 83, 84, 85, 86, 88, 90, 91, 92, 93, 94, 98, 99, 100, 
  //      101, 103, 104, 106, 109, 116, 118, 119]);
  // total.push(2593);

  let result;
  for (let i = 0; i < total.length; i++) {
      console.log((i + 1) + ".\tDoes a subset of [" + input_arr[i].join(", ") + "] sum up to " + total[i] + "?   ", subsetSum(input_arr[i], total[i]));
      console.log('-'.repeat(100));
  }
}

main()