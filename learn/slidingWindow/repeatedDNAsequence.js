// https://leetcode.com/problems/repeated-dna-sequences/

/**
 * @param {string} s
 * @return {string[]}
 */
var findRepeatedDnaSequences = function(s) {

  let results = new Set()
  let windowLen = 10

  let subStrMap = {}
 
  let wStart = 0
  for (let wEnd = 0; wEnd < s.length; wEnd++) {
    if (wEnd - wStart + 1 == windowLen) {
      let substr = s.slice(wStart, wEnd + 1)
      if (subStrMap[substr]) {
        results.add(substr)
      } else {
        subStrMap[substr] = true
      }
      wStart++
    }
  }
  return [...results]
};


const main = () => {
  s = "AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT"
  console.log('repeating dna sequences ', findRepeatedDnaSequences(s))

  s = "AAAAAAAAAAAAA"
  console.log('repeating dna sequences ', findRepeatedDnaSequences(s))
}

main()