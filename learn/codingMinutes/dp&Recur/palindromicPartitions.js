/// Palindrimoc Partitions
 
const palindromicPartitions = (s) => {
  const checkPalindrome = (str, i, j) => {
    if (i >= j) {
      return true
    }

    if (str[i] === str[j]) return checkPalindrome(str, i + 1, j - 1)
    
    return false
  }

  const pPartitionsRecur = (str, i) => {
    // base
    if (i == str.length) {
      return 0
    }

    // recur
    let ans = Infinity
    for (let j = i; j < str.length; j++) {
      console.log(str.slice(i, j + 1))
      if (checkPalindrome(str, i, j)) {
        ans = Math.min(ans, pPartitionsRecur(str, j + 1)) 
      }
    }
    // this gives the number paritions not cuts
    return ans + 1
  }

  // number of partitions - 1 is the cuts required
  return pPartitionsRecur(s, 0) - 1
}

const main = () => {
  console.log('Palindromic Partitons for the string is ', palindromicPartitions('radar'))
}

main()