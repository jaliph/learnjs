// https://leetcode.com/problems/find-the-shortest-superstring/description/

/**
 * @param {string[]} words
 * @return {string}
 */
var shortestSuperstring = function(words) {
  let mask = 0

  for (let i in words) {
    mask = (1 << i) | mask
  }
 
  const findOverLappedWord = (str1,  str2) => {
    let k = Math.min(str1.length, str2.length)
    let ans = str1 + str2
    // for (let i = 1; i <= k; i++) {
    //   // console.log(str1.slice(str1.length- i), str2.slice(0, i))
    //   if (str1.slice(str1.length - i) == str2.slice(0, i)) {
    //     ans = str1 + str2.slice(i)
    //   }
    // }
    for (let i = 0; i < str1.length; i++) {
        if (str2.startsWith(str1.substring(i))) {
            return str1.slice(0, i) + str2
        }
    }
    // console.log(str1, str2, ans, 'joda ha')
    return ans
  }
  // console.log(mask)
  let map = {}
  // let results = []

  const shortestSuperStringFinder = (words, startWord, mask, map) => {
    // base case
    //all the word are selected 
    // console.log(startWord, mask)
    if (mask == 0) {
      return startWord
    }

    // memoise
    let key = startWord + "|" + mask
    if (map[key]) {
      return map[key]
    }

    //recur
    let ans
    for (let i = 0; i < words.length; i++) {
      // if available to use for superstring
      if (((mask >> i) & 1)) {
        // unset the i the word from the mask
        // console.log((mask & ~(1 << i)))
        let superString = shortestSuperStringFinder(words, words[i], (mask & ~(1 << i)), map)

        let overLappingWord = findOverLappedWord(startWord, superString)
        // console.log(superString, overLappingWord, '<-')
        if (ans == null || overLappingWord.length < ans.length) {
          ans = overLappingWord
        }
      }
    }
    map[key] = ans
    return map[key]
  }
  return shortestSuperStringFinder(words, "", mask, map)
};


const main = () => {
  words = ["alex","loves","leetcode"]
  console.log('The shortest super Subsrtring is ', shortestSuperstring(words))

  words = ["catg","ctaagt","gcta","ttca","atgcatc"]
  console.log('The shortest super Subsrtring is ', shortestSuperstring(words))

  words = ["ab","a","b"]
  console.log('The shortest super Subsrtring is ', shortestSuperstring(words))
}

main()