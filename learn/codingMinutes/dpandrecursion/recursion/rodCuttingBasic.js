
const rodCutting = (prices, len) => {
  const rodCuttinRecur = (prices, len) => {
    if (len === 0) {
      return 0
    }

    ///
    // if (index == 0) {
    //    return n * price[0];
    // }
    // int notCut = cutRod(price,index - 1,n);
    // int cut = INT_MIN;
    // int rod_length = index + 1;

    // if (rod_length <= n)
    //     cut = price[index]
    //            + cutRod(price,index,n - rod_length);

    // return max(notCut, cut);
    ///

    let ans = 0
    for (let i = 1; i <= len; i++) {
      ans = Math.max(ans, prices[i - 1] + rodCuttinRecur(prices, len - i))
    }
    return ans
  }

  return rodCuttinRecur(prices, len)
}

const rodCuttingDP = (prices, len) => {
  const dp = Array(len + 1).fill(0)

  dp[0] = 0

  for (let i = 1; i <= len; i++) {
    let max = -Infinity
    for (let j = 0; j < i; j++) {
      max = Math.max(max, prices[j] + dp[i - j - 1])
    }
    dp[i] = max
  }

  return dp[len]
}

const main = () => {
  const prices = [1, 3, 4, 5, 7, 9, 10, 11]
  const lengthOfRod = 8
  console.log('Max Profit  ', prices, lengthOfRod, rodCutting(prices, lengthOfRod))
  console.log('Max Profit  ', prices, lengthOfRod, rodCuttingDP(prices, lengthOfRod))
}

main()
