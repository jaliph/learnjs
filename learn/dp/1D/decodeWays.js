// https://leetcode.com/problems/decode-ways/

/**
 * @param {string} s
 * @return {number}
 */
// var numDecodings = function(s) {
//   let results = []
//   const numDecodingRecur = (str, i, set) => {
//     // base case
//     if (i == str.length) {
//       results.push(set.join(''))
//       return 1
//     }

//     let ans = 0
//     if (i < str.length && Number(str[i]) >= 1 && Number(str[i]) <= 9) {
//       ans += numDecodingRecur(str, i + 1, [...set, String.fromCharCode(Number(str[i]) + 64)])
//     }

//     if (i + 1 < str.length && str[i] == '1') {
//       ans += numDecodingRecur(str, i + 2, [...set, String.fromCharCode(Number(str[i] + '' + str[i + 1]) + 64)])
//     }

//     if (i + 1 < str.length && (str[i] == '2' && Number(str[i + 1]) <= 6)) {
//       ans += numDecodingRecur(str, i + 2, [...set, String.fromCharCode(Number(str[i] + '' + str[i + 1]) + 64)])
//     }

//     return ans
//   }
//   let ans =  numDecodingRecur(s, 0, [])

//   // console.log(results)
//   return ans
// };

const numDecodings = function (s) {
  const dp = Array(s.length).fill(-1)
  const numDecodingRecur = (str, i, set) => {
    // base case
    if (i == str.length) {
      return 1
    }

    if (dp[i] != -1) {
      return dp[i]
    }

    let ans = 0
    if (i < str.length && Number(str[i]) >= 1 && Number(str[i]) <= 9) {
      ans += numDecodingRecur(str, i + 1)
    }

    if (i + 1 < str.length && str[i] == '1') {
      ans += numDecodingRecur(str, i + 2)
    }

    if (i + 1 < str.length && (str[i] == '2' && Number(str[i + 1]) <= 6)) {
      ans += numDecodingRecur(str, i + 2)
    }

    return dp[i] = ans
  }
  return numDecodingRecur(s, 0, [])
}

const main = () => {
  s = '12'
  console.log('the number of ways to decode are ', numDecodings(s))

  s = '06'
  console.log('the number of ways to decode are ', numDecodings(s))
}

main()
