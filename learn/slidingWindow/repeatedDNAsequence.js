// https://leetcode.com/problems/repeated-dna-sequences/

/**
 * @param {string} s
 * @return {string[]}
 */
const findRepeatedDnaSequences = function (s) {
  const results = new Set()
  const windowLen = 10

  const subStrMap = {}

  let wStart = 0
  for (let wEnd = 0; wEnd < s.length; wEnd++) {
    if (wEnd - wStart + 1 == windowLen) {
      const substr = s.slice(wStart, wEnd + 1)
      if (subStrMap[substr]) {
        results.add(substr)
      } else {
        subStrMap[substr] = true
      }
      wStart++
    }
  }
  return [...results]
}

const main = () => {
  s = 'AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT'
  console.log('repeating dna sequences ', findRepeatedDnaSequences(s))

  s = 'AAAAAAAAAAAAA'
  console.log('repeating dna sequences ', findRepeatedDnaSequences(s))
}

main()
