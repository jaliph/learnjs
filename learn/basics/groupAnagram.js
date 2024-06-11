// https://leetcode.com/problems/group-anagrams/

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
const groupAnagrams = function (strs) {
  const getMap = (str) => {
    return [...str].reduce((obj, k) => {
      obj[k] = (obj[k] || 0) + 1
      return obj
    }, {})
  }
  const getKey = (map) => {
    let res = ''
    for (let i = 0; i < 26; i++) {
      if (map[String.fromCharCode(i + 97)]) {
        res += String.fromCharCode(i + 97) + map[String.fromCharCode(i + 97)]
      }
    }
    return res
  }

  const resultMap = {}
  for (const str of strs) {
    const key = getKey(getMap(str))
    if (!resultMap[key]) {
      resultMap[key] = []
    }
    resultMap[key].push(str)
  }

  return Object.values(resultMap)
}

const main = () => {
  strs = ['eat', 'tea', 'tan', 'ate', 'nat', 'bat']
  console.log('the grouped word are ', groupAnagrams(strs))
}

main()
