const method1 = (arr1, arr2, m, n) => {
  if (m <= 0 || n <= 0) {
    return 0
  } else {
    if (arr1[m - 1] === arr2[n - 1]) {
      return 1 + method1(arr1, arr2, m - 1, n - 1)
    } else {
      return Math.max(method1(arr1, arr2, m - 1, n), method1(arr1, arr2, m, n - 1))
    }
  }
}

const method2 = (arr1, arr2) => {
  const table = Array(arr1.length + 1).fill(Array(arr2.length + 1).fill(0))
  for (let i = 0; i <= arr1.length; i++) {
    for (let j = 0; j <= arr2.length; j++) {
      if (i === 0 || j === 0) {
        table[i][j] = 0
      } else if (arr1[i] === arr2[j]) {
        table[i][j] = table[i - 1][j - 1] + 1
      } else {
        table[i][j] = Math.max(table[i - 1][j], table[i][j - 1])
      }
    }
  }
  // console.dir(table)
  return table[arr1.length][arr2.length]
}

const method3 = (arr1, arr2) => {
  const table = Array(arr2.length + 1).fill(0)
  let prev
  let temp
  for (let i = 1; i <= arr1.length; i++) {
    prev = 0
    for (let j = 1; j <= arr2.length; j++) {
      temp = table[j]
      if (arr1[i] === arr2[j]) {
        table[j] = prev + 1
      } else {
        table[j] = Math.max(table[j], table[j - 1])
      }
      prev = temp
    }
  }
  return table[arr2.length]
}

const driver = () => {
  console.log('Longest SubString ', method1([...'JAVAID'], [...'JAVA'], 'JAVAID'.length, 'JAVA'.length))
  console.log(method2([...'JAVAID'], [...'JAVA']))
  console.log(method3([...'JAVAID'], [...'JAVA']))
}

driver()
