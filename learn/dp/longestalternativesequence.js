

const LAS = (arr) => {
  const dp = Array(2).fill(0).map(() => Array(arr.length).fill(1))

  for (let curr = 1; curr < arr.length; curr++) {
    let prev = curr - 1

    if (arr[prev] < arr[curr]) {
      dp[0][curr] = dp[1][prev] + 1
      dp[1][curr] = dp[1][prev] 
    } else if (arr[prev] > arr[curr]) {
      dp[1][curr] = dp[0][prev] + 1
      dp[0][curr] = dp[0][prev] 
    } else {
      dp[0][curr] = dp[0][prev]
      dp[1][curr] = dp[1][prev]
    }
  }

  return Math.max(dp[0][nums.length - 1], dp[1][nums.length - 1])
}

// Driver code
function main() {
  var nums = [
      [1, 3, 2, 5],
      [1, 2, 3, 4],
      [4, 3, 2, 1],
      [5, 5, 5, 5, 5],
      [9, 6, 4, 5, 6, 3]
  ];

  // Let's uncomment this to see the benefit of using dynamic programming with tabulation
  // nums.push([1, 6, 4, 8, 2, 9, 4, 1, 7, 11, 23, 65, 34, 23, 45, 34, 34, 32, 32, 21, 67, 89, 76, 77, 66, 44, 89, 0, 1, 2, 3, 5, 4, 2, 5, 6, 43, 2, 4, 5, 2, 55, 66, 1, 6, 4, 8, 2, 9, 4, 1, 7, 11, 23, 65, 34, 23, 45, 34, 34, 32, 32, 21, 67, 89, 76, 77, 66, 44, 89, 0, 1, 2, 3, 5, 4, 2, 5, 6, 43, 2, 4, 5, 2, 55, 66]);

  for (var i = 0; i < nums.length; i++) {
      console.log(i + 1 + ".\tNums: [" + nums[i] + "]");
      console.log("\n\tThe Length of Longest Alternating Subsequence is " + LAS(nums[i]));
      console.log("-".repeat(100));
  }
}

main();