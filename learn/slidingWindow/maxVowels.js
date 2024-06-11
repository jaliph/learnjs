//
/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
const maxVowels = function (s, k) {
  const set = new Set(['a', 'e', 'i', 'o', 'u'])
  let len = 0
  let max = -Infinity
  let wStart = 0
  for (let wEnd = 0; wEnd < s.length; wEnd++) {
    if (set.has(s[wEnd])) {
      len++
    }
    if (wEnd >= k - 1) {
      max = Math.max(max, len)
      if (set.has(s[wStart])) {
        len--
      }
      wStart++
    }
  }

  return max === -Infinity ? 0 : max
}

const main = () => {
  s = 'abciiidef', k = 3
  console.log('Max num of vowels in the substring of k are ', maxVowels(s, k))

  s = 'aeiou', k = 2
  console.log('Max num of vowels in the substring of k are ', maxVowels(s, k))

  s = 'trp', k = 2
  console.log('Max num of vowels in the substring of k are ', maxVowels(s, k))
}

main()
