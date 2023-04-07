

const lbsLengthBrute = (arr) => {
  const lbsLengthRecur = (arr, curr, prev, isDesc) => {
    if (curr === arr.length) return 0

    if (prev < 0) {
      let length1 = lbsLengthRecur(arr, curr + 1, prev, isDesc)

      let length2 = Math.max(
        1 + lbsLengthRecur(arr, curr + 1, curr, isDesc),
        1 + lbsLengthRecur(arr, curr + 1, curr, 1)
      )

      return Math.max(length1, length2)
    }
    // not descending 
    if (isDesc == 0) {
      let length1 = lbsLengthRecur(arr, curr + 1, prev, isDesc)
      let length2 = 0
      if (arr[prev] < arr[curr]) {
        length2 = Math.max(
          1 + lbsLengthRecur(arr, curr + 1, curr, isDesc),
          1 + lbsLengthRecur(arr, curr + 1, curr, 1),
        )
      }
      return Math.max(length1, length2)
    // is descending
    } else {
      let length = lbsLengthRecur(arr, curr + 1, prev, isDesc)
      if (arr[prev] > arr[curr]) {
        length = Math.max(
          length,
          1 + lbsLengthRecur(arr, curr + 1, curr, isDesc),
        )
      }
      return length
    }
  }

  return lbsLengthRecur(arr, 0, -1, 0)
} 



// calculate LIS from front and back and then max of front + back - 1
const lbsLength = (arr) => {
  const LISF = Array(arr.length).fill(1)
  const LISB = Array(arr.length).fill(1)

  for (let i = 1; i < arr.length; i++) {
    for (let j = 0; j < i; j++) {
      if (arr[j] < arr[i] && LISF[i] < LISF[j] + 1) {
        LISF[i] = LISF[j] + 1
      }
    }
  }

  for (let i = arr.length - 2; i >= 0; i--) {
    for (let j = arr.length - 1; j > i; j--) {
      if (arr[j] < arr[i] && LISB[i] < LISB[j] + 1) {
        LISB[i] = LISB[j] + 1
      }
    }
  }

  let result = 0
  for (let i = 0; i < arr.length; i++) {
    result = Math.max(result, LISB[i] + LISF[i] -1)
  }
  
  return result
}

// Driver code
function main(){

  inputs = [[10], [1, 8], [2, 4, 1], [6, 5, 3, 7, 10, 1, 2], 
            [1, 4, 9, 2, 16, 20]]
  
  // You can uncomment the lines below and check how this recursive solution causes a time-out 
  inputs.push([23, 11, 12, 10, 15, 12, 6, 15, 18, 4, 14, 2, 13, 25,
               27, 21, 2, 17, 18, 30, 22, 25, 10, 27, 10, 22, 21, 
               24, 26, 12, 26, 12, 3, 16, 4, 20, 18, 1, 5, 12, 10, 
               1, 14, 21, 15, 17, 21, 18, 13, 30, 20, 10, 5, 16, 9,
               4, 25, 10, 8, 15, 2, 1, 13, 9, 12, 13, 6, 28, 6, 26, 
               8, 20, 29, 9, 5, 14, 13, 30, 7, 3, 2, 24, 28, 21, 7, 
               19, 14, 22, 28, 2, 20, 8, 6, 27, 12, 8, 27, 2, 27, 
               30, 8, 23, 16, 27, 25, 3, 1, 3, 5, 18, 2, 13, 18, 28,
               2, 25, 20, 5, 11, 2, 28, 15, 15, 12, 25, 24, 17, 30,
               17, 7, 18, 23, 13, 4, 4, 23, 23, 18, 16, 18, 14, 11,
               26, 26, 22, 21, 23, 24, 24, 25, 20, 28, 18, 17, 21, 
               14, 16, 8, 19, 23, 26, 24, 28, 18, 26, 9, 22, 14, 15,
               1, 11, 23, 20, 16, 4, 16, 5, 30, 19, 18, 6, 14, 23,
               2, 1, 22, 29, 3, 29, 22, 30, 10, 30, 12, 17, 3, 12, 
               22, 8, 22]);
  
  for (let i = 0; i < inputs.length; i++){

    console.log(i + 1 + ".\tnums:", (inputs[i]), 
               "\n\n\tThe length of the longest bitonic subsequence is:", lbsLength(inputs[i]));
               
   
    console.log("-".repeat(100));
  }
}

main();