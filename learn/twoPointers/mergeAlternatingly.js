// https://leetcode.com/problems/merge-strings-alternately/
/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
const mergeAlternately = function (word1, word2) {
  let word3 = ''
  const largerWord = word1.length > word2.length ? word1 : word2
  let i
  for (i = 0; i < Math.min(word1.length, word2.length); i++) {
    word3 += word1[i]
    word3 += word2[i]
  }
  if (word1.length == word2.length) {
    return word3
  } else {
    return word3 + largerWord.slice(i)
  }
}

const main = () => {
  word1 = 'ab', word2 = 'pqrs'
  console.log('Merged string is ', mergeAlternately(word1, word2))

  word1 = 'abc', word2 = 'pqr'
  console.log('Merged string is ', mergeAlternately(word1, word2))

  word1 = 'abcd', word2 = 'pq'
  console.log('Merged string is ', mergeAlternately(word1, word2))
}

main()
