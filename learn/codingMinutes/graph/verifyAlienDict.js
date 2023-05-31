// https://leetcode.com/problems/verifying-an-alien-dictionary/

/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */
var isAlienSorted = function(words, order) {
    const map = [...order].reduce((p, c, i) => {
      p[c] = i
      return p
    }, {})


    for (let i = 0; i < words.length - 1; i++) {
      let w1 = words[i]
      let w2 = words[i + 1]

      for (let j in [...w1]) {
        // the second word is smaller than the first word, nt possible
        if (j == w2.length) {
          return false
        }
       
        // if they don't match
        if (w1[j] != w2[j]) {
          if (map[w1[j]] > map[w2[j]]) {
            return false
          }
          // no need to further check
          break
        }
      }
    }

    return true
};

const main = () => {
  let words = ["hello","leetcode"], order = "hlabcdefgijkmnopqrstuvwxyz"
  console.log('is the dictionary valid -> ', isAlienSorted(words, order))

  words = ["word","world","row"], order = "worldabcefghijkmnpqstuvxyz"
  console.log('is the dictionary valid -> ', isAlienSorted(words, order))

}

main()