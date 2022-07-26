
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
