
const method1 = (arr1, arr2, m, n, lcsCount) => {
  if (m <= 0 || n <= 0) {
    return lcsCount
  }
  let lcsCount1 = lcsCount
  if (arr1[m - 1] === arr2[n - 1]) {
    lcsCount1 = method1(arr1, arr2, m - 1, n - 1, lcsCount + 1)
  }
  const lcsCount2 = method1(arr1, arr2, m - 1, n, 0)
  const lcsCount3 = method1(arr1, arr2, m, n - 1, 0)
  return Math.max(lcsCount1, Math.max(lcsCount2, lcsCount3))
}

const method2 = (arr1, arr2, m, n, lcsCount, dp) => {
  if (m <= 0 || n <= 0) {
    return lcsCount
  }
  if (dp[m][n][lcsCount] !== 0) {
    return dp[m][n][lcsCount]
  }
  let lcsCount1 = lcsCount
  if (arr1[m - 1] === arr2[n - 1]) {
    lcsCount1 = method1(arr1, arr2, m - 1, n - 1, lcsCount + 1)
  }
  const lcsCount2 = method1(arr1, arr2, m - 1, n, 0)
  const lcsCount3 = method1(arr1, arr2, m, n - 1, 0)
  dp[m][n][lcsCount] = Math.max(lcsCount1, Math.max(lcsCount2, lcsCount3))
  return dp[m][n][lcsCount]
}

const method3 = (arr1, arr2) => {
  const table = Array(arr1.length + 1).fill(Array(arr2.length + 1).fill(0))
  let result = 0
  for (let i = 0; i <= arr1.length; i++) {
    for (let j = 0; j <= arr2.length; j++) {
      if (i === 0 || j === 0) {
        table[i][j] = 0
      } else if (arr1[i - 1] === arr2[j - 1]) {
        table[i][j] = table[i - 1][j - 1] + 1
        result = Math.max(table[i][j], result)
      }
    }
  }
  // console.dir(table)
  console.log(result)
}
const driver = () => {
  // console.log('The LCS is ', method1([...'JAVAAID'], [...'JAVA'], 'JAVAAID'.length, 'JAVAI'.length, 0))
  method3([...'TESTJAVA'], [...'JAVA'])
}

// driver()

/// / Revise

const lcsLengthBrute = (str1, str2) => {
  const lcsLengthRecur = (str1, str2, i, j, count) => {
    if (i >= str1.length || j >= str2.length) {
      return count
    }

    let c1 = count; let c2 = 0; let c3 = 0
    if (str1[i] == str2[j]) {
      c1 = lcsLengthRecur(str1, str2, i + 1, j + 1, count + 1)
    }
    c2 = lcsLengthRecur(str1, str2, i + 1, j, 0)
    c3 = lcsLengthRecur(str1, str2, i, j + 1, 0)

    return Math.max(c1, c2, c3)
  }

  return lcsLengthRecur(str1, str2, 0, 0, 0)
}

const lcsLength = (str1, str2) => {
  const dp = Array(str1.length + 1).fill(0).map(() => Array(str2.length + 1).fill(0))

  let result = 0
  for (let i = 1; i <= str1.length; i++) {
    for (let j = 1; j <= str2.length; j++) {
      if (str1[i - 1] === str2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1
        result = Math.max(result, dp[i][j])
      } else {
        dp[i][j] = 0
      }
    }
  }
  return result
}

// Driver code
function main () {
  const s1 = ['educative', 'bcdcdcd', 'arefun', 'yourocks', 'abc']
  const s2 = ['education', 'aacdcdcd', 'isfun', 'youawesome', 'def']

  // Let's uncomment this to see the benefit of using dynamic programming with memoization
  // s1.push("ypzrvyigwdiqrnbglvviozqzruvmwivgvqvrfhqi");
  // s2.push("wdiqrnbglvviozqzruvmwivgvqvrfhqiypzrvyigwdiqrn");

  for (let i = 0; i < s1.length; i++) {
    console.log(i + 1 + '.\tInput string 1: "' + s1[i] + '"')
    console.log('\tInput string 2: "' + s2[i] + '"')
    console.log('\n\tThe Length of Longest Common Substring is: ' + lcsLength(s1[i], s2[i]))
    console.log('-'.repeat(100))
  }
}

main()
