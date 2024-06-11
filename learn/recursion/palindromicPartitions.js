// https://leetcode.com/problems/palindrome-partitioning

/**
 * @param {string} s
 * @return {string[][]}
 */
const partition = function (s) {
  const results = []

  const parts = []

  const isPalindrome = (s, i, j) => {
    while (i <= j) {
      if (s[i] != s[j]) {
        return false
      }
      i++
      j--
    }
    return true
  }

  const canPartition = (i) => {
    // base
    if (i >= s.length) {
      results.push([...parts])
      return
    }

    // recur
    for (let j = i; j < s.length; j++) {
      if (isPalindrome(s, i, j)) {
        parts.push(s.slice(i, j + 1))
        canPartition(j + 1)
        parts.pop()
      }
    }
  }

  canPartition(0)
  return results
}

const main = () => {
  s = 'aab'
  console.log('Palindromic Partitions ', partition(s))

  s = 'a'
  console.log('Palindromic Partitions ', partition(s))
}

main()
