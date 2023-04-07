
const LIS = (arr) => {
  const parents = Array(arr.length).fill(null)
  const increasingSubs = Array(arr.length + 1).fill(0)
  let length = 0
  let pos
  for (let i = 0; i < arr.length; i++) {
    let low = 1
    let high = length
    while (low <= high) {
      const mid = low + Math.ceil((high - low) / 2)
      // check where in increasingsubs arr[i] will sit, if less, it should sit above mid
      if (arr[increasingSubs[mid]] < arr[i]) {
        low = mid + 1
      } else {
        high = mid - 1
      }
    }
    pos = low
    parents[i] = increasingSubs[pos - 1]
    increasingSubs[pos] = i

    // change the length of the latest icreasingsubs
    if (pos > length) {
      length = pos
    }
  }
  console.dir(increasingSubs)
  console.dir(parents)

  const LIS = Array(length)
  let k = increasingSubs[length]
  for (let j = length - 1; j >= 0; j--) {
    LIS[j] = arr[k]
    k = parents[k]
  }
  for (let i = 0; i < length; i++) {
    console.log(LIS[i])
  }
}

const method2DP = (arr) => {
  const LIS = Array(arr.length).fill(1)
  for (let i = 1; i < arr.length; i++) {
    console.log ('Before', LIS)
    for (let j = 0; j < i; j++) {
      if (arr[j] < arr[i] && LIS[i] < LIS[j] + 1) {
        LIS[i] = LIS[j] + 1
      }
    }
    console.log ('After', LIS)
  }
  console.dir(LIS)
}

// method2DP([3, 1, 5, 2, 6, 4, 9])
// LIS([3, 1, 5, 2, 6, 4, 9])


// Revise

const lisLengthBrute = (arr) => {
  const LISRecur = (arr, curr, prev) => {
    if (curr == arr.length) {
      return 0
    }

    let length = 0
    // skip the current element
    length = LISRecur(arr, curr + 1, prev)

    // current is greater than the prev element
    if (prev < 0 || arr[prev] < arr[curr]) {
      length = Math.max(length, 1 + LISRecur(arr, curr + 1, curr))
    }
    return length
  }
  return LISRecur(arr, 0, -1)
}


const lisLengthMemoise = (arr) => {
  const LISRecur = (arr, curr, prev, dp) => {
    if (curr == arr.length) {
      return 0
    }

    if (dp[curr][prev + 1] !== -1) return dp[curr][prev + 1]

    let length = 0
    // skip the current element
    length = LISRecur(arr, curr + 1, prev, dp)

    // current is greater than the prev element
    if (prev < 0 || arr[prev] < arr[curr]) {
      length = Math.max(length, 1 + LISRecur(arr, curr + 1, curr, dp))
    }
    dp[curr][prev + 1] = length
    return dp[curr][prev + 1]
  }

  const dp = Array(arr.length + 1).fill(0).map(() => Array(arr.length + 2).fill(-1))
  return LISRecur(arr, 0, -1, dp)
}



const lisLengthMethod1 = (arr) => {
  const dp = Array(arr.length + 1).fill(0).map(() => Array(arr.length + 2).fill(0))


  for (let curr = arr.length - 1; curr > -1; curr--) {
    for (let prev = curr - 1; prev > -2; prev--) {
      let length = dp[curr + 1][prev + 1]
      
      if (prev < 0 || arr[prev] < arr[curr] ) {
        length = Math.max(length, 1 + dp[curr + 1][curr + 1])
      }

      dp[curr][prev + 1] = length 
    }
  }
  return dp[0][0]
}

const lisLength = (arr) => {
  const LIS = Array(arr.length).fill(1)

  for (let i = 1; i < arr.length; i++) {
    for (let j = 0; j < i; j++) {
      if (arr[j] < arr[i] && LIS[i] < 1 + LIS[j]) {
        LIS[i] = 1 + LIS[j]
      }
    }
  }
  return LIS[arr.length - 1]
}


// Driver code
var main = function() {
  var lists = [
      [10, 9, 2, 5, 3, 7, 101, 18],
      [7, 7, 7, 7, 7, 7, 7],
      [0, 1, 0, 3, 2, 3],
      [3, 2],
      [6, 9, 8, 2, 3, 5, 1, 4, 7],
      [0, 8, 4, 12, 2, 10, 6, 14, 1, 9, 5, 13, 3, 11, 7, 15],
      [9, 2, 5, 3, 6, 14, 11, 7, 9, 5, 13, 3, 15, 0, 8, 4, 1, 9, 5, 13, 3, 11, 7, 15, 0, 10, 6, 14, 9, 2, 5, 3, 2, 10, 6, 10, 6, 5, 13, 3, 11, 7, 15, 3, 11, 7, 15]
  ];

  // You can uncomment the line below and check how this recursive solution causes a time-out
  
  // lists.push([72, 56, 13, 33, 4, 5, 53, 14, 71, 42, 5, 74, 60, 15, 68, 42,
  //    56, 58, 67, 32, 65, 75, 47, 29, 86, 32, 77, 39, 19, 54, 54, 18, 49, 34,
  //    89, 85, 63, 86, 90, 53, 35, 2, 65, 63, 90, 26, 39, 41, 38, 32, 21, 35, 51,
  //    34, 50, 27, 51, 94, 70, 94, 18, 89, 45, 40, 13, 56, 25, 59, 51, 6, 59, 56,
  //    41, 44, 23, 26, 83, 8, 0, 33, 59, 43, 83, 40, 24, 86, 28, 2, 23, 87, 11,
  //    23, 13, 48, 20, 64, 21, 93, 8, 70, 33, 48, 10, 29, 24, 59, 92, 23, 67, 79,
  //    54, 7, 56, 5, 2, 63, 88, 58, 60, 95, 54, 7, 56, 5, 2, 63, 88, 58, 60, 95, 54, 7,
  //    56, 5, 2, 63, 88, 58, 60, 95]);


  for (var i = 0; i < lists.length; i++) {
      console.log((i + 1) + ". Input array: [" + lists[i].join(", ") + "]");
      console.log("Length of LIS is: " + lisLengthMethod1(lists[i]));
      console.log("Length of LIS is: " + lisLength(lists[i]));
      console.log("-".repeat(100));
  }
}

main();




// Revise