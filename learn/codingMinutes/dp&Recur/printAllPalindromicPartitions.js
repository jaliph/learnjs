
const palindromicPartitions = (s) => {
  const checkPalindrome = (s, i, j) => {
    if (i >= j) return true
    if (s[i] === s[j]) return checkPalindrome(s, i + 1, j - 1)
    return false
  }
  const palindromicPartitionsRecur = (s, i) => {
    // base case
    if (i == s.length) {
      return [[]]
    }
    const result = []
    // recur
    for (let j = i; j < s.length; j++) {
      if (checkPalindrome(s, i, j)) {
        const temp = palindromicPartitionsRecur(s, j + 1)

        // add the existing set palindromes in front
        temp.forEach((arr) => {
          arr.unshift(s.slice(i, j + 1))
        })
        // push to result
        temp.forEach(arr => result.push(arr))
      }
    }
    return result
  }
  return palindromicPartitionsRecur(s, 0)
}

const main = () => {
  console.log(palindromicPartitions('radar'))
}

main()
