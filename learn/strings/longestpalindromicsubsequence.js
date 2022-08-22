
//
let findLPSLength = (str) => {
  const recursiveLPSFinder = (str, startIndex, endIndex) => {
    if (startIndex > endIndex) return 0

    if (startIndex === endIndex) return 1

    if (str[startIndex] === str[endIndex]) {
      return 2 + recursiveLPSFinder(str, startIndex + 1, endIndex - 1)
    }

    let c1 = recursiveLPSFinder(str, startIndex + 1, endIndex) 
    let c2 = recursiveLPSFinder(str, startIndex, endIndex - 1)

    return Math.max(c1, c2)
  }
  return recursiveLPSFinder(str, 0, str.length - 1)
}

console.log(findLPSLength('cddpd'))


// memoise

let findLPS2Length = (str) => {
  let dp = []

  const recursiveLPSFinder = (str, startIndex, endIndex) => {
    if (startIndex > endIndex) {
      return 0
    }

    if (startIndex === endIndex) {
      return 1
    }

    dp[startIndex] = dp[startIndex] || []

    if (typeof dp[startIndex][endIndex] === 'undefined'){
      if (str[startIndex] === str[endIndex]) {
        dp[startIndex][endIndex] = 2 + recursiveLPSFinder(str, startIndex + 1, endIndex - 1)
      } else {
        let c1 = recursiveLPSFinder(str, startIndex + 1, endIndex) 
        let c2 = recursiveLPSFinder(str, startIndex, endIndex - 1)
        dp[startIndex][endIndex] = Math.max(c1, c2)
      }
    }
    return dp[startIndex][endIndex]
  }

  return recursiveLPSFinder(str, 0, str.length - 1)
}


console.log(findLPS2Length('cddpd'))



// DP Bottom up algorithm

let findLPS3Length = (str) => {
  let dp = Array(str.length).fill(0).map(() => Array(str.length).fill(0))

  for (let i =0; i < str.length; i++) {
    dp [i][i] = 1
  }

  for (let startIndex = str.length - 1; startIndex >= 0; startIndex--) {
    for (let endIndex = startIndex + 1; endIndex < str.length; endIndex++) {
      if(str[startIndex] == str[endIndex]) {
        dp[startIndex][endIndex] = 2 + dp[startIndex + 1][endIndex - 1] 
      } else {
        dp[startIndex][endIndex] = Math.max(dp[startIndex][endIndex - 1], dp[startIndex + 1][endIndex])
      }
    }
  }

  return dp[0][str.length - 1]
}


console.log(findLPS3Length('cddpd'))


var longestPalindromeSubseq = function(s) {
  // let dp = []
//     const longestPalinRecur = (s, start, end) =>  {
//         if (start > end) {
//             return 0
//         }
//         if ( start == end) {
//             return 1
//         }
//         dp[start] = dp[start] || []
//         if (typeof dp[start][end] === 'undefined') {
//             if (s[start] == s [end]) {
//                 dp[start][end] = 2 + longestPalinRecur(s, start + 1, end - 1)
//             } else  {
//                 let c1 = longestPalinRecur(s, start + 1, end)
//                 let c2 = longestPalinRecur(s, start, end - 1)
      
//                 dp[start][end] = Math.max(c1, c2)
//             }
//         }
//         return dp[start][end]
      
//     }
//     return longestPalinRecur(s, 0, s.length - 1)
  let dp = Array(s.length).fill(0).map(() => Array(s.length).fill(0))
  for (let i = 0; i < s.length; i++) {
      dp[i][i] = 1
  }
  
  for (let start = s.length - 1; start >= 0; start--) {
      for (let end = start + 1; end < s.length ; end++) {
        console.log(s[start], s[end])
          if (s[start] == s[end]) {
              dp[start][end] = 2 + dp[start + 1][end - 1]
          } else {
              dp[start][end] = Math.max(dp[start + 1][end], dp[start][end - 1])
          }
      }
  }
  console.log(dp)
  return dp[0][s.length - 1]
}; 
