/**
 * https://leetcode.com/problems/longest-string-chain
 * @param {string[]} words
 * @return {number}
 */
const longestStrChain = function (words) {
  const wordSet = new Set(words)
  const dp = new Map()
  const DFSSearch = (word) => {
    if (!wordSet.has(word)) {
      return 0
    }

    if (dp.has(word)) {
      return dp.get(word)
    }

    dp.set(word, 1)
    for (let i = 0; i < word.length; i++) {
      const prevWord = word.slice(0, i) + word.slice(i + 1)

      dp.set(word, Math.max(dp.get(word), DFSSearch(prevWord) + 1))
    }
    return dp.get(word)
  }
  let ans = 0
  for (const w of words) {
    ans = Math.max(ans, DFSSearch(w))
  }
  return ans
}

let longestStrChainDP2 = function (words) {
  const dp = new Map()
  words.sort((a, b) => a.length - b.length)
  let ans = 0
  for (const w of words) {
    dp.set(w, 1)
    for (let i = 0; i < w.length; i++) {
      const prevWord = w.slice(0, i) + w.slice(i + 1)
      dp.set(w, Math.max(dp.get(w), (dp.get(prevWord) || 0) + 1))
    }
    ans = Math.max(ans, dp.get(w))
  }
  return ans
}

longestStrChainDP2 = function (words) {
  const lengthMap = new Map()
  words.sort((a, b) => a.length - b.length)
  let ans = 0
  for (const w of words) {
    let longest = 0
    for (let i = 0; i < w.length; i++) {
      const newStr = w.slice(0, i) + w.slice(i + 1)
      longest = Math.max(longest, (lengthMap.get(newStr) || 0) + 1)
    }
    lengthMap.set(w, longest)
    ans = Math.max(ans, longest)
  }
  return ans
}

const main = () => {
  words = ['a', 'b', 'ba', 'bca', 'bda', 'bdca']
  console.log('Longest chain possible... ', longestStrChain(words))

  words = ['xbc', 'pcxbcf', 'xb', 'cxbc', 'pcxbc']
  console.log('Longest chain possible... ', longestStrChain(words))
}

main()
