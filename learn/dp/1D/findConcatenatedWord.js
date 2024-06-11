// https://leetcode.com/problems/concatenated-words/
/**
 * @param {string[]} words
 * @return {string[]}
 */
const findAllConcatenatedWordsInADict = function (words) {
  const wordSet = new Set(words)

  const dp = new Map()
  const result = []
  const findWord = (word) => {
    if (dp.has(word)) {
      return dp.get(word)
    }
    for (let i = 1; i < word.length; i++) {
      const prefix = word.slice(0, i)
      const suffix = word.slice(i)

      if (wordSet.has(prefix) && wordSet.has(suffix) ||
          (wordSet.has(prefix) && findWord(suffix))) {
        dp.set(word, true)
        return dp.get(word)
      }
    }
    dp.set(word, false)
    return dp.get(word)
  }

  for (const w of words) {
    if (findWord(w)) {
      result.push(w)
    }
  }

  return result
}

const main = () => {
  words = ['cat', 'dog', 'catdog']
  console.log('Concatenated Words are.. ', findAllConcatenatedWordsInADict(words))

  words = ['cat', 'cats', 'catsdogcats', 'dog', 'dogcatsdog', 'hippopotamuses', 'rat', 'ratcatdogcat']
  console.log('Concatenated Words are.. ', findAllConcatenatedWordsInADict(words))
}

main()
