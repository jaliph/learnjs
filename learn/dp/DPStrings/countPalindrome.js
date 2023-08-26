
const findAllPalindromeinSubPositions = (inputString, j, k) => {
  let result = 0
  while (j >= 0 && k < inputString.length) {
    if (inputString[j] === inputString[k]) {
      result++
      j--
      k++
    } else {
      break
    }
  }
  return result
}

const countSubstrings = (inputString) => {
  let count = 0
  for (let i = 0; i < inputString.length; i++) {
    count += findAllPalindromeinSubPositions(inputString, i, i + 1)
    count += findAllPalindromeinSubPositions(inputString, i - 1, i + 1)
  }
  return count + inputString.length
}

const countPalindromicSubstring = (str) => {
  const dp = Array(str.length).fill(0).map(() => Array(str.length).fill(0))

  for (let i = 0; i < str.length; i++) {
    dp[i][i] = 1
  }

  let count = 0
  for (let i = str.length - 1; i >= 0; i--) {
    for (let j = i + 1; j < str.length; j++) {
      if (str[i] == str[j]) {
        const len = j - i + 1
        if (len == 2 || dp[i + 1][j - 1] == 1) {
          dp[i][j] = 1
          count++
        }
      }
    }
  }
  return count + str.length
}

// Driver code to test the above function
function main () {
  const str1List = ['abdbca', 'cddpd', 'pqr', 'abaab', 'aaa']
  // You can uncomment the lines below and check how this recursive solution causes a time-out
  // str1List.push("xkjkqlajprjwefilxgpdpebieswu");

  for (let i = 0; i < str1List.length; i++) {
    console.log(i + 1 + '.\tstr1: ' + str1List[i])
    console.log('\n\tCount of palindromic substrings:' + countPalindromicSubstring(str1List[i]))
    console.log('-'.repeat(100))
  }
}

main()
