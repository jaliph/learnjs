
const method1 = (arr1, arr2, m, n, lcsCount) => {
  if (m <= 0 || n <= 0) {
    return lcsCount
  }
  let lcsCount1 = lcsCount
  if (arr1[m - 1] === arr2[n - 1]) {
    lcsCount1 = method1(arr1, arr2, m - 1, n - 1, lcsCount + 1)
  }
  let lcsCount2 = method1(arr1, arr2, m - 1, n, 0)
  let lcsCount3 = method1(arr1, arr2, m, n - 1, 0)
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
  let lcsCount2 = method1(arr1, arr2, m - 1, n, 0)
  let lcsCount3 = method1(arr1, arr2, m, n - 1, 0)
  dp[m][n][lcsCount] = Math.max(lcsCount1, Math.max(lcsCount2, lcsCount3))
  return dp[m][n][lcsCount]
}

const method3 = (arr1, arr2) => {
  let table = Array(arr1.length + 1).fill(Array(arr2.length + 1).fill(0))
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

driver()
