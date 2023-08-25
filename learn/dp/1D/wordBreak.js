// https://leetcode.com/problems/word-break/

/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {

  let dp = Array(s.length).fill(-1)
  const checkRecur = (i) => {
    // console.log(i)
    if (i == s.length) {
      return true
    }

    if (dp[i] != -1) {
      return dp[i]
    }

    // recur
    for (let word of wordDict) {
      if (s.slice(i).startsWith(word)) {
        // console.log(s, word, s.slice(i), i + word.length)
        if (checkRecur(i + word.length)) {
          dp[i + word.length] = true
          return dp[i + word.length]
        }
      }
    }
    dp[i] = false
    return dp[i]
  }

  return checkRecur(0)
}


/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak2 = function(s, wordDict) {
  let dict = new Set(wordDict)

  const checkRecur = (s, map) => {
    if (s.length == 0) {
      return []
    }

    if (map[s]) {
      return map[s]
    }

    if (dict.has(s)) {
      return [s]
    }

    let result = []
    for (let w of dict) {
      
      if (s.indexOf(w) != 0) {
        continue
      }

      if (s === w) {
        result.push(w)
      }

      // result.push(s.slice(0, w.length))
      // console.log(s.slice(0, w.length), s.slice(w.length), w)
      let subresult = checkRecur(s.slice(w.length), map)
      for (let w2 of subresult) {
        result.push(w + ' ' + w2)
      }
    }
    map[s] = result
    return map[s]
  }

  return checkRecur(s, {})
};

var wordBreak3 = function(s, wordDict) {
  let dict = new Set(wordDict)

  const checkRecur = (s, map) => {
    if (s.length == 0) {
      return true
    }

    if (map[s]) {
      return map[s]
    }

    if (dict.has(s)) {
      return map[s] = true
    }

    for (let w of dict) {
      
      if (!s.startsWith(w)) {
        continue
      }

      // result.push(s.slice(0, w.length))
      // console.log(s.slice(0, w.length), s.slice(w.length), w)
      if (checkRecur(s.slice(w.length), map)) {
        return map[s.slice(w.length)] = true
      }
    }
    return map[s] = false
  }

  return checkRecur(s, {})
};


const main = () => {
  s = "leetcode", wordDict = ["leet","code"]
  console.log('Word break result ', wordBreak(s, wordDict))

  s = "applepenapple", wordDict = ["apple","pen"]
  console.log('Word break result ', wordBreak(s, wordDict))

  s = "catsandog", wordDict = ["cats","dog","sand","and","cat"]
  console.log('Word break result ', wordBreak(s, wordDict))

  s = "acaaaaabbbdbcccdcdaadcdccacbcccabbbbcdaaaaaadb", wordDict = ["abbcbda","cbdaaa","b","dadaaad","dccbbbc","dccadd","ccbdbc","bbca","bacbcdd","a","bacb","cbc","adc","c","cbdbcad","cdbab","db","abbcdbd","bcb","bbdab","aa","bcadb","bacbcb","ca","dbdabdb","ccd","acbb","bdc","acbccd","d","cccdcda","dcbd","cbccacd","ac","cca","aaddc","dccac","ccdc","bbbbcda","ba","adbcadb","dca","abd","bdbb","ddadbad","badb","ab","aaaaa","acba","abbb"]
  console.log('Word break result ', wordBreak(s, wordDict))

  s = "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaab", wordDict = ["a","aa","aaa","aaaa","aaaaa","aaaaaa","aaaaaaa","aaaaaaaa","aaaaaaaaa","aaaaaaaaaa"]
  console.log('Word break result ', wordBreak(s, wordDict))
}

main()