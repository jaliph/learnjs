

const lis = (arr) => {
  const LIS = Array(arr.length).fill(1)


  // for (let i = 1; i < arr.length; i++) {
  //   for (let j = 0; j < i ; j++) {
  //     if (arr[j] < arr[i] && LIS[i] < LIS[j] + 1) {
  //       LIS[i] = LIS[j] + 1
  //     }
  //   }
  // }

  for (let i = 1; i < arr.length; i++) {
    for (let j = 0; j < i; j++) {
      if (arr[j] <= arr[i]) {
        LIS[i] = Math.max(LIS[i], LIS[j] + 1)
      }
    }
  }
  console.log(LIS)
}

const main = () => {
  const arr = [7, 49, 23,8, 30, 22,44, 28, 23, 9, 40, 15]

  console.log('The longest increasing subsequence is ', lis(arr))
}

main()